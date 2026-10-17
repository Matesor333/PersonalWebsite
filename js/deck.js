(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = (s, c = document) => [...c.querySelectorAll(s)];

    // ---- render data-driven blocks
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
                    <dl>
                        <dt>Problem</dt><dd>${v.biz.problem}</dd>
                        <dt>Users</dt><dd>${val(v.biz.users)}</dd>
                        <dt>Decisions</dt><dd><ul class="plain">${v.biz.decisions.map(d => `<li>${d}</li>`).join('')}</ul></dd>
                        <dt>Outcome</dt><dd><ul class="plain inline">${v.biz.outcome.map(o => `<li>${val(o)}</li>`).join('')}</ul></dd>
                        <dt>Built with</dt><dd><ul class="chips">${chips(v.build.stack)}</ul><p class="contrib">${v.build.contribution}</p></dd>
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
            ${p.img ? `<img src="${p.img}" alt="${p.alt}" loading="lazy">` : ''}
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <ul class="chips">${chips(p.stack)}</ul>
            ${p.link ? `<p>${link(p.link)}</p>` : ''}
        </article>`).join('');
    });

    // Course rows: collapsed to name + grade, open to what I learned.
    const course = c => `
        <details class="course">
            <summary><span class="cname">${c.name}</span>${c.grade ? `<span class="grade" title="Grade">${c.grade}</span>` : ''}</summary>
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
            <h3>${y.y}</h3>
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
    const setLayer = i => {
        layerEls.forEach(el => {
            const n = +el.dataset.i;
            el.classList.toggle('lit', n <= i);
            el.classList.toggle('cur', n === i);
        });
        detail.innerHTML = `<h3>${STACK_LAYERS[i].name}</h3><p class="big">${STACK_LAYERS[i].build}</p>`;
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
            setLayer(0);
            pin = ScrollTrigger.create({
                trigger: stackEl, start: 'top top', end: `+=${STACK_LAYERS.length * 55}%`, pin: true,
                onUpdate: s => setLayer(Math.min(STACK_LAYERS.length - 1, Math.floor(s.progress * STACK_LAYERS.length)))
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
            root.dataset.lens = lens;
            sync();
            try { localStorage.setItem('lens', lens); } catch (e) { /* private mode */ }
            scrollTo({top: 0, behavior: 'instant'});
            syncPin();
            show(0);
            if (!reduce) restartHeadline();
        };
        if (reduce || !document.startViewTransition) return apply();
        const r = ev.currentTarget.getBoundingClientRect();
        root.style.setProperty('--vx', r.left + r.width / 2 + 'px');
        root.style.setProperty('--vy', r.top + r.height / 2 + 'px');
        document.startViewTransition(apply);
    };
    buttons.forEach(b => b.addEventListener('click', e => setLens(b.dataset.setLens, e)));
    sync();
    syncPin();
    show(0);

    // ---- keyboard: left/right jump a slide (up/down keep native scroll)
    addEventListener('keydown', e => {
        if (e.altKey || e.ctrlKey || e.metaKey || /input|textarea|select/i.test(e.target.tagName)) return;
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const list = visible();
        list[Math.min(list.length - 1, Math.max(0, current + d))].scrollIntoView({behavior: reduce ? 'auto' : 'smooth'});
    });
})();
