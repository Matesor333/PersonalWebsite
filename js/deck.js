(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = (s, c = document) => [...c.querySelectorAll(s)];

    // ---- render ventures + side projects from js/ventures.js
    const val = v => (typeof v === 'string' ? v : `<span class="tbd">TBD · ${v.tbd}</span>`);
    const chips = a => a.map(s => `<li class="chip">${val(s)}</li>`).join('');
    const link = ([t, h]) => `<a class="arrow-link" href="${h}" target="_blank" rel="noopener noreferrer">${t}<span aria-hidden="true">↗</span></a>`;

    $('#ventures-list').forEach(el => {
        el.innerHTML = VENTURES.map(v => `
        <article class="venture" data-r>
            <header class="venture-head">
                <h3>${v.name}</h3>
                <p class="venture-meta"><span>${val(v.role)}</span><span class="status">${v.status}</span></p>
            </header>
            <div class="venture-body">
                <div class="venture-text">
                    <dl data-show="business">
                        <dt>Problem</dt><dd>${v.biz.problem}</dd>
                        <dt>Users</dt><dd>${val(v.biz.users)}</dd>
                        <dt>Decisions</dt><dd><ul class="plain">${v.biz.decisions.map(d => `<li>${d}</li>`).join('')}</ul></dd>
                        <dt>Outcome</dt><dd><ul class="plain inline">${v.biz.outcome.map(o => `<li>${val(o)}</li>`).join('')}</ul></dd>
                    </dl>
                    <dl data-show="build">
                        <dt>Stack</dt><dd><ul class="chips">${chips(v.build.stack)}</ul></dd>
                        <dt>What I built</dt><dd>${v.build.contribution}</dd>
                    </dl>
                    <p class="venture-links">${v.links.map(link).join('')}</p>
                </div>
                ${v.media ? `<div class="venture-media">${v.media.video
                    ? `<video src="${v.media.video}" muted loop playsinline preload="none" aria-label="${v.media.alt}"></video>`
                    : `<img src="${v.media.img}" alt="${v.media.alt}" loading="lazy">`}</div>` : ''}
            </div>
        </article>`).join('');
    });

    $('#side-list').forEach(el => {
        el.innerHTML = SIDE_PROJECTS.map(p => `
        <article class="side" data-r>
            <img src="${p.img}" alt="${p.alt}" loading="lazy">
            <h3>${p.name}</h3>
            <p data-show="business">${p.biz}</p>
            <ul class="chips" data-show="build">${chips(p.stack)}</ul>
            ${p.link ? `<p>${link(p.link)}</p>` : ''}
        </article>`).join('');
    });

    // ---- lens switch: view-transition circle wipe from the clicked button
    const buttons = $('[data-set-lens]');
    const sync = () => buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.setLens === root.dataset.lens));
    const setLens = (lens, ev) => {
        if (lens === root.dataset.lens) return;
        const apply = () => {
            root.dataset.lens = lens;
            sync();
            try { localStorage.setItem('lens', lens); } catch (e) { /* private mode */ }
        };
        if (reduce || !document.startViewTransition) return apply();
        const r = ev.currentTarget.getBoundingClientRect();
        root.style.setProperty('--vx', r.left + r.width / 2 + 'px');
        root.style.setProperty('--vy', r.top + r.height / 2 + 'px');
        document.startViewTransition(apply);
    };
    buttons.forEach(b => b.addEventListener('click', e => setLens(b.dataset.setLens, e)));
    sync();

    // ---- slides: counter, reveals, video
    const slides = $('.slide');
    const total = String(slides.length).padStart(2, '0');
    const counter = $('#counter')[0];
    let current = 0;
    const show = i => {
        current = i;
        counter.innerHTML = `<span class="num" key="${i}">${String(i + 1).padStart(2, '0')}</span> / ${total}`;
        counter.title = slides[i].dataset.title || '';
    };
    show(0);

    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    }), {threshold: 0.15});
    $('[data-r]').forEach((el, i) => { el.style.setProperty('--i', i % 4); io.observe(el); });

    const slideIo = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) show(slides.indexOf(e.target));
    }), {rootMargin: '-45% 0px -45% 0px'});
    slides.forEach(s => slideIo.observe(s));

    const videoIo = new IntersectionObserver(es => es.forEach(e => {
        if (reduce) return;
        e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause();
    }));
    $('video').forEach(v => videoIo.observe(v));

    // ---- keyboard: left/right jump a slide (up/down keep native scroll)
    addEventListener('keydown', e => {
        if (e.altKey || e.ctrlKey || e.metaKey || /input|textarea|select/i.test(e.target.tagName)) return;
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const t = slides[Math.min(slides.length - 1, Math.max(0, current + d))];
        t.scrollIntoView({behavior: reduce ? 'auto' : 'smooth'});
    });

    // ---- GSAP: cover ring + roadmap rail (content stays visible if the CDN fails)
    if (window.gsap && window.ScrollTrigger && !reduce) {
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
    } else {
        $('.step').forEach(s => s.classList.add('on'));
    }
})();