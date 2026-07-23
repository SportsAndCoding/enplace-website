// src/components/blog-article.js
import '../styles/components/blog-article.scss';
import { getArticle } from './blog-article-content.js';
import { createClient } from '@supabase/supabase-js';

// ─────────────────────────────────────
// SUPABASE (same pattern as contact.js)
// ─────────────────────────────────────

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

let supabase;
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured - paper download gate will not save leads');
    supabase = { from: () => ({ insert: async () => ({ error: { message: 'Supabase not configured' } }) }) };
} else {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
}

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
// PAPER DOWNLOAD GATE
// Renders between article body and author bio.
// Shows form -> writes to contact_submissions -> reveals download link.
// ─────────────────────────────────────

function renderPaperGate(meta) {
    // Only render if paperUrl points to a PDF
    if (!meta.paperUrl || !meta.paperUrl.endsWith('.pdf')) return '';

    const paperTitle = meta.paperTitle || 'Download the Full Research Paper';

    return `
        <div class="article__paper-gate" id="paper-gate">
            <div class="article__paper-gate-inner">

                <!-- PRE-SUBMIT: The form -->
                <div class="article__paper-gate-form-wrap" id="paper-gate-form-wrap">
                    <div class="article__paper-gate-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                        </svg>
                    </div>
                    <h3 class="article__paper-gate-title">${paperTitle}</h3>
                    <p class="article__paper-gate-desc">
                        Get the complete research with full citations, methodology notes, and evidence transparency appendix.
                        Enter your info below and the download link appears instantly.
                    </p>

                    <div class="article__paper-gate-fields" id="paper-gate-fields">
                        <div class="article__paper-gate-row">
                            <div class="article__paper-gate-field">
                                <label for="paper-gate-name">Name <span class="article__paper-gate-req">*</span></label>
                                <input type="text" id="paper-gate-name" placeholder="Your name" required />
                            </div>
                            <div class="article__paper-gate-field">
                                <label for="paper-gate-email">Email <span class="article__paper-gate-req">*</span></label>
                                <input type="email" id="paper-gate-email" placeholder="you@yourcompany.com" required />
                            </div>
                        </div>
                        <div class="article__paper-gate-row">
                            <div class="article__paper-gate-field">
                                <label for="paper-gate-restaurant">Company (optional)</label>
                                <input type="text" id="paper-gate-restaurant" placeholder="Company name" />
                            </div>
                        </div>
                        <button class="article__paper-gate-submit" id="paper-gate-submit">
                            Get the Paper
                        </button>
                        <div class="article__paper-gate-status" id="paper-gate-status"></div>
                    </div>
                </div>

                <!-- POST-SUBMIT: Download link (hidden initially) -->
                <div class="article__paper-gate-success" id="paper-gate-success" style="display: none;">
                    <div class="article__paper-gate-icon article__paper-gate-icon--success">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                    </div>
                    <h3 class="article__paper-gate-title">Your paper is ready</h3>
                    <a href="${meta.paperUrl}" target="_blank" rel="noopener"
                       class="article__paper-gate-download" id="paper-gate-download">
                        Download PDF
                    </a>
                </div>

            </div>
        </div>
    `;
}

function initPaperGate(meta) {
    const submitBtn = document.getElementById('paper-gate-submit');
    const statusEl = document.getElementById('paper-gate-status');
    const formWrap = document.getElementById('paper-gate-form-wrap');
    const successWrap = document.getElementById('paper-gate-success');

    if (!submitBtn) return;

    submitBtn.addEventListener('click', async () => {
        const name = document.getElementById('paper-gate-name')?.value?.trim();
        const email = document.getElementById('paper-gate-email')?.value?.trim();
        const restaurant = document.getElementById('paper-gate-restaurant')?.value?.trim();

        // Validate
        if (!name || !email) {
            statusEl.textContent = 'Name and email are required.';
            statusEl.className = 'article__paper-gate-status article__paper-gate-status--error';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            statusEl.textContent = 'Please enter a valid email address.';
            statusEl.className = 'article__paper-gate-status article__paper-gate-status--error';
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        statusEl.textContent = '';
        statusEl.className = 'article__paper-gate-status';

        // Write to contact_submissions
        const { error } = await supabase.from('contact_submissions').insert({
            name,
            email,
            restaurant_name: restaurant || null,
            message: `Paper download: ${meta.title}`,
        });

        if (error) {
            // Still show the download even if Supabase fails.
            // The lead capture failed but we don't punish the user.
            console.warn('Paper gate insert failed:', error.message);
        }

        // Reveal download
        formWrap.style.display = 'none';
        successWrap.style.display = 'flex';
    });
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
    const paperGateHTML = renderPaperGate(meta);

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

        <!-- PAPER DOWNLOAD GATE (only renders if paperUrl points to a PDF) -->
        ${paperGateHTML}

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
                <p class="article__footer-cta-text">Book a demo and see how LeanOn transforms your staffing operations.</p>
                <div class="article__footer-cta-buttons">
                    <a href="/contact" class="article__cta-btn article__cta-btn--primary">Book a Demo</a>
                    <a href="/learn" class="article__cta-btn article__cta-btn--secondary">Back to Learning Center</a>
                </div>
            </div>
        </div>
    `;

    // Init paper gate form handler after DOM renders
    setTimeout(() => initPaperGate(meta), 0);

    return section;
}