// src/components/blog-article.js
import '../styles/components/blog-article.scss';
import { getArticle } from './blog-article-content.js';

// ─────────────────────────────────────
// HELPERS
// ─────────────────────────────────────

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function renderBlock(block) {
    switch (block.type) {

        case 'text':
            // Split on double newlines for paragraphs
            return block.content
                .split('\n\n')
                .map(p => `<p class="article__paragraph">${p.trim()}</p>`)
                .join('');

        case 'heading':
            return `<h2 class="article__section-heading">${block.content}</h2>`;

        case 'image':
            return `
                <figure class="article__figure">
                    <img class="article__image" 
                         src="${block.src}" 
                         alt="${block.alt}" 
                         loading="lazy" />
                    ${block.credit ? `<figcaption class="article__caption">Photo: ${block.credit}</figcaption>` : ''}
                </figure>`;

        case 'pullquote':
            return `
                <blockquote class="article__pullquote">
                    <p class="article__pullquote-text">${block.content}</p>
                    ${block.attribution ? `<cite class="article__pullquote-cite">— ${block.attribution}</cite>` : ''}
                </blockquote>`;

        case 'table':
            const rows = block.rows.map(([label, value]) =>
                `<tr class="article__table-row">
                    <td class="article__table-label">${label}</td>
                    <td class="article__table-value">${value}</td>
                </tr>`
            ).join('');
            const footer = block.footer
                ? `<tfoot><tr class="article__table-footer">
                       <td class="article__table-label">${block.footer[0]}</td>
                       <td class="article__table-value">${block.footer[1]}</td>
                   </tr></tfoot>`
                : '';
            return `
                <div class="article__table-wrap">
                    <table class="article__table">
                        <tbody>${rows}</tbody>
                        ${footer}
                    </table>
                </div>`;

        case 'callout':
            return `
                <div class="article__callout">
                    ${block.label ? `<span class="article__callout-label">${block.label}</span>` : ''}
                    ${block.content ? `<p class="article__callout-text">${block.content}</p>` : ''}
                </div>`;

        case 'cta':
            return `
                <div class="article__cta-block">
                    <a href="${block.primary.url}" class="article__cta-btn article__cta-btn--primary">${block.primary.text}</a>
                    ${block.secondary ? `<a href="${block.secondary.url}" class="article__cta-btn article__cta-btn--secondary">${block.secondary.text}</a>` : ''}
                </div>`;

        default:
            return '';
    }
}


// ─────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────

export default function BlogArticle(slug) {
    const article = getArticle(slug);
    const section = document.createElement('section');
    section.className = 'article';

    if (!article) {
        section.innerHTML = `
            <div class="article__not-found">
                <h1>Article Not Found</h1>
                <p>This article doesn't exist yet.</p>
                <a href="/learn" class="article__cta-btn article__cta-btn--primary">Back to Learning Center</a>
            </div>`;
        return section;
    }

    const { meta, blocks } = article;
    const bodyHTML = blocks.map(renderBlock).join('');

    section.innerHTML = `
        <!-- HERO -->
        <div class="article__hero" style="background-image: url('${meta.heroImage}')">
            <div class="article__hero-overlay"></div>
            <div class="article__hero-inner">
                <div class="article__hero-meta">
                    ${meta.series ? `<span class="article__series-badge">Part ${meta.series.number} of ${meta.series.total} · ${meta.series.name}</span>` : ''}
                </div>
                <h1 class="article__hero-title">${meta.title}</h1>
                <div class="article__hero-byline">
                    <span class="article__author">By ${meta.author}</span>
                    <span class="article__separator">·</span>
                    <span class="article__date">${formatDate(meta.date)}</span>
                    <span class="article__separator">·</span>
                    <span class="article__duration">${meta.duration}</span>
                </div>
            </div>
        </div>

        <!-- ARTICLE BODY -->
        <div class="article__body">
            <div class="article__body-inner">
                ${bodyHTML}
            </div>
        </div>

        <!-- AUTHOR BIO -->
        <div class="article__bio-section">
            <div class="article__bio-inner">
                <div class="article__bio-avatar">
                    <span class="article__bio-initial">${meta.author.charAt(0)}</span>
                </div>
                <div class="article__bio-content">
                    <span class="article__bio-name">${meta.author}</span>
                    <span class="article__bio-title">${meta.authorTitle}</span>
                    <p class="article__bio-text">${meta.authorBio}</p>
                </div>
            </div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="article__footer-cta">
            <div class="article__footer-cta-inner">
                <h2 class="article__footer-cta-title">Ready to see it in action?</h2>
                <p class="article__footer-cta-text">Book a demo and see how En Place transforms your staffing operations.</p>
                <div class="article__footer-cta-buttons">
                    <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="article__cta-btn article__cta-btn--primary">Book a Demo</a>
                    <a href="/learn" class="article__cta-btn article__cta-btn--secondary">Back to Learning Center</a>
                </div>
            </div>
        </div>
    `;

    return section;
}