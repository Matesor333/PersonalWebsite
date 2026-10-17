// English is the default; Slovak and German live in js/lang/*.js. Picks ?lang= > saved choice > en, overlays the
// pack onto the data globals and onto [data-i18n] markup, and runs before the page scripts render anything.
(() => {
    const LANGS = ['en', 'sk', 'de'];
    const saved = () => { try { return localStorage.getItem('lang'); } catch (e) { return null; } };
    const save = l => { try { localStorage.setItem('lang', l); } catch (e) { /* private mode */ } };

    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) save(q);
    const lang = LANGS.includes(q) ? q : LANGS.includes(saved()) ? saved() : 'en';
    const pack = (window.I18N_PACKS || {})[lang] || {ui: {}, data: {}};
    const ui = pack.ui;

    // Overlay mirrors the English shape; anything it leaves out (grades, hrefs, tech names) stays English.
    const localize = (b, o) => o === undefined ? b
        : typeof o === 'string' ? o
        : Array.isArray(b) ? b.map((x, i) => localize(x, o[i]))
        : b && typeof b === 'object' ? Object.fromEntries(Object.entries(b).map(([k, v]) => [k, localize(v, o[k])]))
        : b;
    for (const k in pack.data) if (window[k]) window[k] = localize(window[k], pack.data[k]);

    const $ = s => [...document.querySelectorAll(s)];
    document.documentElement.lang = lang;
    $('[data-i18n]').forEach(el => { const s = ui[el.dataset.i18n]; if (s != null) el.innerHTML = s; });
    $('[data-i18n-attr]').forEach(el => el.dataset.i18nAttr.split(';').forEach(p => {
        const [a, k] = p.split('=').map(s => s.trim());
        if (ui[k] != null) el.setAttribute(a, ui[k]);
    }));
    // translated headline: rebuild the per-word spans the cover animation needs
    if (lang !== 'en') $('[data-i18n-words]').forEach(el => {
        el.innerHTML = el.textContent.trim().split(/\s+/).map((w, i) => `<span class="w"><span style="--d:${i}">${w}</span></span>`).join(' ');
    });

    window.I18N = {lang, t: (key, en) => ui[key] ?? en};

    // Switching reloads on the same slide: deck.js owns GSAP pins and element refs a live re-render would break.
    const sw = $('.lang-switch')[0];
    if (!sw) return;
    const btns = [...sw.querySelectorAll('button')];
    const mark = l => {
        sw.dataset.active = LANGS.indexOf(l);
        btns.forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
    };
    mark(lang);
    // the pill only animates after first paint, so a SK/DE page does not load with it sliding in
    requestAnimationFrame(() => requestAnimationFrame(() => sw.classList.add('ready')));
    btns.forEach(b => b.addEventListener('click', () => {
        const to = b.dataset.lang;
        if (to === lang || sw.dataset.busy) return;
        sw.dataset.busy = 1;
        save(to);
        mark(to);
        const u = new URL(location.href);
        if (to === 'en') u.searchParams.delete('lang'); else u.searchParams.set('lang', to);
        const sec = document.elementFromPoint(innerWidth / 2, innerHeight / 2)?.closest('section[id]');
        u.hash = sec ? sec.id : '';
        // let the pill land before the page swaps
        setTimeout(() => location.replace(u), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220);
    }));
})();
