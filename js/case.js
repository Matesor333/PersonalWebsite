// Renders the Elev8 case study (project-details.html) from js/ventures.js.
(() => {
    document.documentElement.classList.add('js');
    const $ = (s, c = document) => [...c.querySelectorAll(s)];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const {val, venture} = R;
    const v = VENTURES[0];

    const h1 = $('.cp-hero h1')[0];
    h1.innerHTML = v.name.split(/\s+/).map((w, i) => `<span class="w"><span style="--d:${i}">${w}</span></span>`).join(' ');
    $('#cp-meta')[0].innerHTML = `${val(v.role)} · ${v.status}`;
    $('#case-venture')[0].innerHTML = venture(v, true);
    $('#case-now')[0].innerHTML = val({tbd: I18N.t('pd.nowtbd', 'current status and next milestone')});

    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    }), {threshold: 0.15});
    $('[data-r]').forEach((el, i) => { el.style.setProperty('--i', i % 4); io.observe(el); });

    // The demo plays only while it is on screen, and never under reduced motion.
    const videoIo = new IntersectionObserver(es => es.forEach(e => {
        if (reduce) return;
        e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause();
    }));
    $('video').forEach(el => videoIo.observe(el));

    $('#year')[0].textContent = new Date().getFullYear();
})();
