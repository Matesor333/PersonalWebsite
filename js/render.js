// Markup shared by the deck and the case-study page. Loads after i18n.js so labels are already localised.
window.R = (() => {
    const t = I18N.t;
    const val = v => (typeof v === 'string' ? v : `<span class="tbd">${t('js.tbd', 'TBD')} · ${v.tbd}</span>`);
    const chips = a => a.map(s => `<li class="chip">${val(s)}</li>`).join('');
    const link = ([t, h]) => `<a class="arrow-link" href="${h}" target="_blank" rel="noopener noreferrer">${t}<span aria-hidden="true">↗</span></a>`;

    // `page` = on the case-study page itself: no card header (the hero carries the name) and no link back to itself.
    const venture = (v, page) => {
        const links = page ? v.links.filter(l => !l[1].endsWith('project-details.html')) : v.links;
        return `
        <article class="venture" data-r>
            ${page ? '' : `<header class="venture-head">
                <h3>${v.name}</h3>
                <p class="venture-meta"><span>${val(v.role)}</span><span class="status">${v.status}</span></p>
            </header>`}
            <div class="venture-body">
                <div class="venture-text">
                    <dl>
                        <dt>${t('js.problem', 'Problem')}</dt><dd>${v.biz.problem}</dd>
                        <dt>${t('js.users', 'Users')}</dt><dd>${val(v.biz.users)}</dd>
                        <dt>${t('js.decisions', 'Decisions')}</dt><dd><ul class="plain">${v.biz.decisions.map(d => `<li>${d}</li>`).join('')}</ul></dd>
                        <dt>${t('js.outcome', 'Outcome')}</dt><dd><ul class="plain inline">${v.biz.outcome.map(o => `<li>${val(o)}</li>`).join('')}</ul></dd>
                        <dt class="r-build">${t('js.builtwith', 'Built with')}</dt><dd class="r-build">${v.build.stack.length ? `<ul class="chips">${chips(v.build.stack)}</ul>` : ''}<p class="contrib">${v.build.contribution}</p></dd>
                    </dl>
                    ${links.length ? `<p class="venture-links">${links.map(link).join('')}</p>` : ''}
                </div>
                ${v.media ? `<div class="venture-media">${v.media.video
                    ? `<video src="${v.media.video}" muted loop playsinline preload="none" aria-label="${v.media.alt}"></video>`
                    : `<img src="${v.media.img}" alt="${v.media.alt}" loading="lazy">`}</div>` : ''}
            </div>
        </article>`;
    };
    return {val, chips, link, venture};
})();
