# 001: Make the "Every layer of the stack" ladder snap, shorter, and animated

Commit: 0b9caee · Severity: HIGH · Categories: interruptibility/feel, easing, performance

## Problem (as reported)
On the pinned ladder slide the user has to scroll many times with short scrolls, or do one long scroll and release, and the layer change feels abrupt and poorly animated.

## Diagnosis (all confirmed in code)
`js/deck.js` lines 127–130:
```js
pin = ScrollTrigger.create({
    trigger: stackEl, start: 'top top', end: `+=${STACK_LAYERS.length * 55}%`, pin: true,
    onUpdate: s => setLayer(Math.min(STACK_LAYERS.length - 1, Math.floor(s.progress * STACK_LAYERS.length)))
});
```
`js/deck.js` lines 76–83:
```js
const setLayer = i => {
    layerEls.forEach(el => { ...classList.toggle('lit'/'cur')... });
    detail.innerHTML = `<h3>${STACK_LAYERS[i].name}</h3><p class="big">${STACK_LAYERS[i].build}</p>`;
};
```
1. **Too much scroll per step.** 11 layers x 55% = 605% of a viewport (about 6 screens) to climb the ladder. One layer = 0.55 screen = about 5 mouse-wheel notches. That is "scroll multiple times".
2. **No snap.** A layer changes only when `floor(progress * n)` crosses a threshold. A short scroll stops part-way through a band, the page rests there, and the user has to push again. A long flick lands wherever inertia ends. That is "one long scroll and release".
3. **The detail pane has no motion.** `innerHTML` is replaced instantly, so the large title and text pop in.
4. **`setLayer` runs on every scroll tick** (60 times a second), rewriting `innerHTML` and toggling classes even when the layer has not changed. This causes jank, and it would restart any enter animation each tick.
5. **The climb is only discrete dots.** There is no continuous movement tied to progress, so a snapping slide would feel stepped, not like a climb.

Rejected alternative: hijack wheel and touch with GSAP `Observer` to step one layer per gesture. It is snappier, but it takes over native scrolling, breaks trackpad inertia and keyboard scrolling, and traps the user inside the slide. Snap on top of normal scroll is the better trade.

## Target values (do not approximate)
- Scroll distance per layer: `40%` of viewport height (was 22% in the first pass, which advanced a layer per wheel notch and skipped 5 layers on a 10-notch flick; measured in headless Edge). 11 layers = 440%. Snap delay 0.12.
- Layer index: `Math.round(progress * (n - 1))` (first layer at progress 0, last layer at 1).
- Snap: `snap: { snapTo: 1 / (n - 1), duration: { min: 0.2, max: 0.45 }, delay: 0.08, ease: 'expo.out' }`. `expo.out` is GSAP's closest built-in to the site's `--ease: cubic-bezier(0.16, 1, 0.3, 1)`.
- Detail enter: WAAPI, `duration: 240`, `easing: 'cubic-bezier(0.16, 1, 0.3, 1)'`, from `{opacity: 0, transform: 'translateY(12px)'}` to `{opacity: 1, transform: 'none'}`. Enter only, no exit.
- Layer row transitions: shorten `opacity` from `0.4s` to `0.25s`. The dot `transform` stays `0.4s`.
- Reduced motion: unchanged, because `hasGsap` is false and the ladder is a static list.

## Steps
1. `js/deck.js`, replace `setLayer` (lines 76–83) with a guarded version:
```js
let shown = -1;
const setLayer = i => {
    if (i === shown) return;
    shown = i;
    layerEls.forEach(el => {
        const n = +el.dataset.i;
        el.classList.toggle('lit', n <= i);
        el.classList.toggle('cur', n === i);
    });
    detail.innerHTML = `<h3>${STACK_LAYERS[i].name}</h3><p class="big">${STACK_LAYERS[i].build}</p>`;
    detail.getAnimations().forEach(a => a.cancel());
    detail.animate(
        [{opacity: 0, transform: 'translateY(12px)'}, {opacity: 1, transform: 'none'}],
        {duration: 240, easing: 'cubic-bezier(0.16, 1, 0.3, 1)'}
    );
};
```
2. `js/deck.js` `syncPin`: reset `shown = -1` before `setLayer(0)` (the `shown` variable must be declared in the same scope, above `setLayer`). Replace the `ScrollTrigger.create` call with:
```js
const n = STACK_LAYERS.length;
pin = ScrollTrigger.create({
    trigger: stackEl, start: 'top top', end: `+=${n * 22}%`, pin: true,
    snap: {snapTo: 1 / (n - 1), duration: {min: 0.2, max: 0.45}, delay: 0.08, ease: 'expo.out'},
    onUpdate: s => {
        setLayer(Math.round(s.progress * (n - 1)));
        fill.style.transform = `scaleY(${s.progress})`;
    }
});
```
3. Continuous climb: in `syncPin`, inside the pinned branch, create the fill element once and reuse it:
```js
let fill = $('.ladder-fill')[0];
if (!fill) { fill = document.createElement('span'); fill.className = 'ladder-fill'; fill.setAttribute('aria-hidden', 'true'); $('#ladder')[0].append(fill); }
```
   (Declare `fill` in the pinned branch so `onUpdate` closes over it.) When unpinned, hide it via the CSS below, which only shows it under `.stack-pinned`.
4. `css/deck.css`:
   - Change `.layer { ... transition: opacity 0.4s var(--ease); }` to `0.25s`.
   - Add (the ladder already has `position: static`, so add `position: relative` to `.ladder`):
```css
.ladder { position: relative; }
.ladder-fill { display: none; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--accent); transform-origin: bottom; transform: scaleY(0); }
.stack-pinned .ladder-fill { display: block; }
```
   The ladder is listed top-down with layer 0 at the bottom, so `transform-origin: bottom` makes the fill climb from the lowest layer.
5. Do not change `end`/snap for the non-desktop path. That path has no pin.

## Scope boundaries
Only `js/deck.js` (setLayer, syncPin) and `css/deck.css` (the ladder rules above). Do not touch the lens switch, the cover ring, the roadmap rail or any other ScrollTrigger.

## Verification
- `node --check js/deck.js`, then serve the site and open the Build deck at 1440x900.
- With a mouse wheel: 2–3 notches should move exactly one layer, and it should settle on that layer without further input. One long flick should move several layers and end on a whole layer, never between two.
- Trackpad: a short two-finger swipe moves one layer; momentum should not overshoot past the last layer into the next slide before the ladder completes.
- Feel-check: record the screen at 60 fps and step through the detail swap frame by frame; the text should arrive in about 240 ms with no flash of the old text. In DevTools Performance, scrolling through the ladder should show no repeated style/layout work from `innerHTML` (it should run once per layer change).
- Scroll back up through the ladder, switch to the Business lens and back, and resize across 900px wide: no blank gap, and the fill resets to empty at the top.
- Reduced motion on: the ladder stays a static, fully lit list.
