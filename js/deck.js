(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = (s, c = document) => [...c.querySelectorAll(s)];
    const t = I18N.t;

    // ---- render data-driven blocks
    const {chips, link, venture} = R;

    $('#ventures-list').forEach(el => { el.innerHTML = VENTURES.map(v => venture(v)).join(''); });

    $('#side-list').forEach(el => {
        el.innerHTML = SIDE_PROJECTS.map(p => `
        <article class="side" data-r>
            ${p.img ? `<img src="${p.img}" alt="${p.alt}" loading="lazy">` : ''}
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <ul class="chips">${chips(p.stack)}</ul>
            ${p.link ? `<p>${link(p.link)}</p>` : ''}
        </article>`).join('');
    });

    // Course rows: collapsed to name + grade, open to what I learned.
    const course = c => !(c.desc || c.learned || c.outcomes) ? `
        <div class="course static"><span class="cname">${c.name}</span>${c.status ? `<span class="grade now">${c.status}</span>` : ''}</div>` : `
        <details class="course">
            <summary><span class="cname">${c.name}</span>${c.grade ? `<span class="grade" title="${t('js.grade', 'Grade')}">${c.grade}</span>` : ''}</summary>
            <div class="cbody">
                <p>${c.desc}</p>
                ${c.learned ? `<p>${c.learned}</p>` : ''}
                ${c.outcomes ? `<ul class="chips">${chips(c.outcomes)}</ul>` : ''}
            </div>
        </details>`;
    $('#fiit-courses').forEach(el => { el.innerHTML = EDU_FIIT.map(course).join(''); });
    $('#rgu-list').forEach(el => {
        el.innerHTML = EDU_RGU.map(y => `
        <li class="step">
            <h3>${y.y}${y.current ? ` <span class="status">${t('js.here', 'You are here')}</span>` : ''}</h3>
            ${y.note ? `<p>${y.note}</p>` : ''}
            <div class="courses">${y.courses.map(course).join('')}</div>
        </li>`).join('');
    });

    // ---- stack ladder (index 0 = lowest layer; listed top-down)
    $('#ladder').forEach(el => {
        el.innerHTML = STACK_LAYERS.map((l, i) => ({l, i})).reverse().map(({l, i}) =>
            `<li class="layer lit" data-i="${i}"><span class="name">${l.name}</span><span class="ev">${l.build}</span></li>`).join('');
    });
    const layerEls = $('.layer');
    const detail = $('#ladder-detail')[0];
    let shown = -1;
    const setLayer = i => {
        if (i === shown) return; // onUpdate fires every scroll tick; only touch the DOM when the layer changes
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

    // ---- slides + counter (counts only the slides of the active lens)
    const slides = $('.slide');
    const counter = $('#counter')[0];
    const visible = () => slides.filter(s => s.offsetParent !== null);
    let current = 0;
    const show = i => {
        const list = visible();
        current = Math.max(0, i);
        counter.innerHTML = `<span class="num">${String(current + 1).padStart(2, '0')}</span> / ${String(list.length).padStart(2, '0')}`;
        counter.title = (list[current] && list[current].dataset.title) || '';
        const id = list[current] && list[current].id;
        $('.bar-nav a').forEach(a => {
            const on = a.hash === '#' + id;
            if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
            if (on) a.scrollIntoView({inline: 'nearest', block: 'nearest', behavior: reduce ? 'auto' : 'smooth'});
        });
    };

    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    }), {threshold: 0.15});
    $('[data-r]').forEach((el, i) => { el.style.setProperty('--i', i % 4); io.observe(el); });

    const slideIo = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { const i = visible().indexOf(e.target); if (i >= 0) show(i); }
    }), {rootMargin: '-45% 0px -45% 0px'});
    slides.forEach(s => slideIo.observe(s));

    const videoIo = new IntersectionObserver(es => es.forEach(e => {
        if (reduce) return;
        e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause();
    }));
    $('video').forEach(v => videoIo.observe(v));

    // ---- GSAP (content stays visible if the CDN fails)
    const hasGsap = !!(window.gsap && window.ScrollTrigger) && !reduce;
    const desk = matchMedia('(min-width: 900px) and (min-height: 640px)');
    const stackEl = $('#stack')[0];
    let pin;
    // The ladder pin only exists in the Build deck: a pin spacer on a hidden section would leave a blank gap.
    const syncPin = () => {
        if (!hasGsap) return;
        if (pin) { pin.kill(true); pin = null; }
        stackEl.classList.remove('stack-pinned');
        layerEls.forEach(el => { el.classList.add('lit'); el.classList.remove('cur'); });
        if (root.dataset.lens === 'build' && desk.matches) {
            stackEl.classList.add('stack-pinned');
            const n = STACK_LAYERS.length;
            let fill = $('.ladder-fill')[0];
            if (!fill) {
                fill = document.createElement('span');
                fill.className = 'ladder-fill';
                fill.setAttribute('aria-hidden', 'true');
                $('#ladder')[0].append(fill);
            }
            fill.style.transform = 'scaleY(0)';
            shown = -1;
            setLayer(0);
            // Scroll distance per layer, as % of the viewport. Measured: 22 moved a layer per wheel notch (a flick skipped 5);
            // 40 is ~4 notches per layer. Lower it for a more sensitive ladder, raise it for a calmer one.
            const LAYER_SCROLL = 40;
            pin = ScrollTrigger.create({
                trigger: stackEl, start: 'top top', end: `+=${n * LAYER_SCROLL}%`, pin: true,
                snap: {snapTo: 1 / (n - 1), duration: {min: 0.2, max: 0.45}, delay: 0.12, ease: 'expo.out'},
                onUpdate: s => {
                    setLayer(Math.round(s.progress * (n - 1)));
                    fill.style.transform = `scaleY(${s.progress})`;
                }
            });
        }
        ScrollTrigger.refresh();
    };

    if (hasGsap) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.lens-ring', {
            scale: 1.7, opacity: 0, ease: 'none',
            scrollTrigger: {trigger: '#cover', start: 'top top', end: 'bottom top', scrub: true}
        });
        gsap.fromTo('.rail-fill', {scaleY: 0}, {
            scaleY: 1, ease: 'none',
            scrollTrigger: {trigger: '.roadmap', start: 'top 65%', end: 'bottom 70%', scrub: true}
        });
        $('.step').forEach(s => ScrollTrigger.create({
            trigger: s, start: 'top 65%',
            onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on')
        }));
        desk.addEventListener('change', syncPin);
    } else {
        $('.step').forEach(s => s.classList.add('on'));
    }

    // ---- lens switch: circle wipe from the clicked button, then a fresh start at the cover of the other deck
    const buttons = $('[data-set-lens]');
    const sync = () => buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.setLens === root.dataset.lens));
    const restartHeadline = () => $('#cover h1')[0].getAnimations({subtree: true}).forEach(a => { a.currentTime = 0; a.play(); });
    const setLens = (lens, ev) => {
        if (lens === root.dataset.lens) return;
        const apply = () => {
            const here = visible()[current];
            root.dataset.lens = lens;
            sync();
            try { localStorage.setItem('lens', lens); } catch (e) { /* private mode */ }
            syncPin();
            // slides shared by both decks (cover, ventures, how I operate, ask) stay put; otherwise start at the cover
            if (here && here.id !== 'cover' && here.offsetParent !== null) {
                here.scrollIntoView({behavior: 'instant'});
                show(visible().indexOf(here));
            } else {
                scrollTo({top: 0, behavior: 'instant'});
                show(0);
                if (!reduce) restartHeadline();
            }
        };
        if (reduce || !document.startViewTransition) return apply();
        const r = ev.currentTarget.getBoundingClientRect();
        root.style.setProperty('--vx', r.left + r.width / 2 + 'px');
        root.style.setProperty('--vy', r.top + r.height / 2 + 'px');
        // The wipe is scoped to this class so page-to-page view transitions keep the default crossfade.
        root.classList.add('lens-wipe');
        document.startViewTransition(apply).finished.finally(() => root.classList.remove('lens-wipe'));
    };
    buttons.forEach(b => b.addEventListener('click', e => setLens(b.dataset.setLens, e)));
    sync();
    syncPin();
    show(0);
    // Arriving from a course page with #fiit / #rgu: the pin spacer shifted the target after the browser's jump.
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({behavior: 'instant'});

    // ---- keyboard: left/right jump a slide (up/down keep native scroll; focused controls keep their own keys)
    addEventListener('keydown', e => {
        if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest('input, textarea, select, a, button, summary')) return;
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const list = visible();
        list[Math.min(list.length - 1, Math.max(0, current + d))].scrollIntoView({behavior: reduce ? 'auto' : 'smooth'});
    });
})();
