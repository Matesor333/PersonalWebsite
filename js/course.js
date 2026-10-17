// Renders a course page (data-page="fiit" | "rgu") from js/education.js.
(() => {
    document.documentElement.classList.add('js');
    const $ = (s, c = document) => [...c.querySelectorAll(s)];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const chips = a => a.map(s => `<li class="chip">${s}</li>`).join('');

    const module = c => `
        <article class="module" data-r>
            <header>
                <h3>${c.name}</h3>
                ${c.grade ? `<span class="grade">Grade ${c.grade}</span>` : c.status ? `<span class="grade now">${c.status}</span>` : ''}
            </header>
            ${c.desc ? `<p>${c.desc}</p>` : ''}
            ${c.learned ? `<p class="learned">${c.learned}</p>` : ''}
            ${c.outcomes ? `<ul class="chips">${chips(c.outcomes)}</ul>` : ''}
        </article>`;

    const groups = document.body.dataset.page === 'rgu'
        ? EDU_RGU
        : [{y: 'Courses', courses: EDU_FIIT}, {y: 'Key projects', courses: EDU_FIIT_PROJECTS}];

    $('#years')[0].innerHTML = groups.map((g, i) => `
        <section class="year" id="y${i + 1}">
            <h2>${g.y}${g.current ? ' <span class="status">You are here</span>' : ''}</h2>
            <div class="modules">${g.note ? `<p class="note">${g.note}</p>` : ''}${g.courses.map(module).join('')}</div>
        </section>`).join('');

    const nav = $('#yearnav')[0];
    if (nav) nav.innerHTML = groups.map((g, i) => `<a href="#y${i + 1}">${g.y.split(' · ')[0]}</a>`).join('');

    // headline: words rise in (same mask-and-rise as the deck cover)
    const h1 = $('.cp-hero h1')[0];
    h1.innerHTML = h1.textContent.trim().split(/\s+/).map((w, i) => `<span class="w"><span style="--d:${i}">${w}</span></span>`).join(' ');

    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    }), {threshold: 0.15});
    $('[data-r]').forEach((el, i) => { el.style.setProperty('--i', i % 4); io.observe(el); });

    // year index follows the section in view
    if (nav) {
        const links = $('a', nav);
        const spy = new IntersectionObserver(es => es.forEach(e => {
            if (!e.isIntersecting) return;
            links.forEach(a => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + e.target.id)));
        }), {rootMargin: '-35% 0px -60% 0px'});
        $('.year').forEach(s => spy.observe(s));
        links.forEach(a => a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: reduce ? 'auto' : 'smooth'});
        }));
    }
    $('#year')[0].textContent = new Date().getFullYear();
})();
