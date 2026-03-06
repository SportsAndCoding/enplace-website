// src/components/learn.js
import '../styles/components/learn.scss';

// ─────────────────────────────────────
// CONTENT DATABASE
// Add new content here. Each item renders as a card.
// Types: 'training' | 'research' | 'case-study'
// For videos: set videoUrl to a Vimeo embed URL
// For articles: set articleUrl to link out, or leave blank for "Coming Soon"
// ─────────────────────────────────────

const CONTENT = [
    {
        id: 'getting-started',
        type: 'training',
        title: 'Getting Started with En Place',
        excerpt: 'A complete walkthrough of the platform — from your first login to reading your Staff Stability Engine dashboard.',
        thumbnail: null,
        videoUrl: null,       // Replace with Vimeo embed URL: 'https://player.vimeo.com/video/XXXXXXX'
        articleUrl: null,
        date: '2025-01-15',
        duration: '12 min video',
        featured: true,
    },
    {
        id: 'sse-dashboard',
        type: 'training',
        title: 'Reading Your SSE Dashboard',
        excerpt: 'Learn how the Staff Stability Engine surfaces flight-risk employees before they resign — and what actions to take.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: null,
        date: '2025-01-20',
        duration: '8 min video',
        featured: false,
    },
    {
        id: 'open-shift-walkthrough',
        type: 'training',
        title: 'Open Shift Marketplace: Billy Called In Sick',
        excerpt: 'See how En Place instantly notifies available staff with bonus incentives when someone calls out — solving your biggest daily headache.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: null,
        date: '2025-01-25',
        duration: '6 min video',
        featured: false,
    },
    {
        id: 'house-guardian-setup',
        type: 'training',
        title: 'Setting Up House Guardian Alerts',
        excerpt: 'Configure text-mining alerts that flag workplace risks like harassment, safety issues, and morale problems before they escalate.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: null,
        date: '2025-02-01',
        duration: '10 min video',
        featured: false,
    },
    {
        id: 'true-cost-turnover',
        type: 'research',
        title: 'The Real Cost of Restaurant Turnover: Why Your Staffing Problem Is a $420,000 Hemorrhage',
        excerpt: 'Black Box Intelligence data shows a five-unit operator hemorrhages $420,000–$720,000 annually to turnover. Here\'s the full cost model — hard costs, hidden costs, and the math nobody is tracking.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: '/learn/hidden-hemorrhage/',
        date: '2026-02-24',
        duration: '10 min read',
        featured: true,
    },
    {
        id: 'service-profit-chain',
        type: 'research',
        title: 'The Harvard Framework That Explains Why Your Best Restaurants Always Have the Same Staff',
        excerpt: 'Taco Bell stores with the lowest turnover produced 2\u00d7 sales and 55% higher profits. The Service Profit Chain \u2014 validated across 30 years of research \u2014 explains exactly why.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: '/learn/service-profit-chain/',
        date: '2026-03-03',
        duration: '9 min read',
        featured: true,
    },
    {
        id: 'anonymous-feedback',
        type: 'research',
        title: 'Why Anonymous Mood Tracking Changes Everything',
        excerpt: 'When staff know their identity is protected, honesty rates jump from 23% to 89%. Here\'s the science behind En Place\'s anonymization model.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: null,
        date: '2025-02-05',
        duration: '7 min read',
        featured: false,
    },
    {
        id: 'exit-interview-myth',
        type: 'research',
        title: 'Exit Interviews Are Too Late: A Predictive Approach',
        excerpt: 'By the time someone sits for an exit interview, you\'ve already lost them — and the $5,000 it costs to replace them. Predictive analytics flips the script.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: null,
        date: '2025-02-10',
        duration: '6 min read',
        featured: false,
    },
    {
        id: 'scheduling-fairness',
        type: 'research',
        title: 'Schedule Fairness: The Silent Retention Killer',
        excerpt: 'Research shows perceived scheduling unfairness is the #2 reason hourly workers quit, behind only pay. Most managers don\'t even know it\'s happening.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: null,
        date: '2025-02-15',
        duration: '5 min read',
        featured: false,
    },
    {
        id: 'turnover-calculator',
        type: 'research',
        title: 'Restaurant Turnover Cost Calculator',
        excerpt: 'Enter your restaurant\'s numbers and see what employee turnover is actually costing you — with breakdown by category and savings projections.',
        thumbnail: null,
        videoUrl: null,
        articleUrl: '/calculator',
        date: '2025-02-13',
        duration: 'Interactive tool',
        featured: true,
    },
];

// ─────────────────────────────────────
// CATEGORY CONFIG
// ─────────────────────────────────────

const CATEGORIES = [
    { key: 'all', label: 'All' },
    { key: 'training', label: 'Platform Training' },
    { key: 'research', label: 'Industry Research' },
    { key: 'case-study', label: 'Case Studies' },
];

const TYPE_LABELS = {
    'training': 'Training',
    'research': 'Research',
    'case-study': 'Case Study',
};

const TYPE_ICONS = {
    'training': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    'research': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    'case-study': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
};

// ─────────────────────────────────────
// HELPERS
// ─────────────────────────────────────

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function buildCard(item) {
    const hasVideo = !!item.videoUrl;
    const hasArticle = !!item.articleUrl;
    const isComingSoon = !hasVideo && !hasArticle;

    // Thumbnail area — video play icon or article icon
    const thumbnailInner = item.type === 'training'
        ? `<div class="learn__card-play">${TYPE_ICONS['training']}</div>`
        : `<div class="learn__card-icon">${TYPE_ICONS[item.type]}</div>`;

    const ctaText = item.type === 'training'
        ? (hasVideo ? 'Watch Video' : 'Coming Soon')
        : (hasArticle ? 'Read Article' : 'Coming Soon');

    const ctaClass = isComingSoon ? 'learn__card-cta learn__card-cta--disabled' : 'learn__card-cta';

    return `
        <article class="learn__card" data-type="${item.type}" data-id="${item.id}">
            <div class="learn__card-thumbnail">
                ${thumbnailInner}
            </div>
            <div class="learn__card-body">
                <div class="learn__card-meta-top">
                    <span class="learn__card-badge learn__card-badge--${item.type}">
                        ${TYPE_ICONS[item.type]} ${TYPE_LABELS[item.type]}
                    </span>
                </div>
                <h3 class="learn__card-title">${item.title}</h3>
                <p class="learn__card-excerpt">${item.excerpt}</p>
                <div class="learn__card-meta-bottom">
                    <span class="learn__card-date">${formatDate(item.date)}</span>
                    <span class="learn__card-duration">${item.duration}</span>
                </div>
                <button class="${ctaClass}" ${isComingSoon ? 'disabled' : ''} 
                    ${hasVideo ? `data-video="${item.videoUrl}"` : ''}
                    ${hasArticle ? `data-article="${item.articleUrl}"` : ''}>
                    ${ctaText}
                </button>
            </div>
        </article>
    `;
}

// ─────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────

export default function Learn() {
    const section = document.createElement('section');
    section.className = 'learn';

    // Count by type for filter badges
    const counts = {
        all: CONTENT.length,
        training: CONTENT.filter(c => c.type === 'training').length,
        research: CONTENT.filter(c => c.type === 'research').length,
        'case-study': CONTENT.filter(c => c.type === 'case-study').length,
    };

    const filterTabs = CATEGORIES.map(cat => `
        <button class="learn__filter ${cat.key === 'all' ? 'learn__filter--active' : ''}" 
                data-filter="${cat.key}">
            ${cat.label}
            <span class="learn__filter-count">${counts[cat.key]}</span>
        </button>
    `).join('');

    const contentCards = CONTENT.map(item => buildCard(item)).join('');

    section.innerHTML = `
        <!-- HERO -->
        <div class="learn__hero">
            <div class="learn__hero-inner">
                <span class="learn__hero-label">Learning Center</span>
                <h1 class="learn__hero-title">Master Your Staffing Intelligence</h1>
                <p class="learn__hero-subtitle">
                    Platform training, industry research, and the insights your team needs 
                    to turn turnover from a cost center into a competitive advantage.
                </p>
            </div>
        </div>

        <!-- FILTERS -->
        <div class="learn__controls">
            <div class="learn__controls-inner">
                <div class="learn__filters">
                    ${filterTabs}
                </div>
            </div>
        </div>

        <!-- CONTENT GRID -->
        <div class="learn__content">
            <div class="learn__grid">
                ${contentCards}
            </div>

            <!-- Empty state for case studies -->
            <div class="learn__empty" style="display: none;">
                <div class="learn__empty-icon">
                    ${TYPE_ICONS['case-study']}
                </div>
                <h3 class="learn__empty-title">Case Studies Coming Soon</h3>
                <p class="learn__empty-text">
                    We're documenting real results from En Place restaurants. 
                    Check back soon for data-driven success stories.
                </p>
            </div>
        </div>

        <!-- VIDEO MODAL -->
        <div class="learn__modal" id="learnVideoModal">
            <div class="learn__modal-backdrop"></div>
            <div class="learn__modal-content">
                <button class="learn__modal-close" aria-label="Close video">&times;</button>
                <div class="learn__modal-player">
                    <iframe id="learnVideoFrame" src="" frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="learn__cta-section">
            <div class="learn__cta-inner">
                <h2 class="learn__cta-title">Ready to see it in action?</h2>
                <p class="learn__cta-text">
                    Book a demo and see how En Place transforms your staffing operations.
                </p>
                <div class="learn__cta-buttons">
                    <a href="https://calendly.com/rob-en-place/en-place-demo" target="_blank" rel="noopener" class="learn__cta-btn learn__cta-btn--primary">Book a Demo</a>
                    <a href="/pricing" class="learn__cta-btn learn__cta-btn--secondary">View Pricing</a>
                </div>
            </div>
        </div>
    `;

    // ─────────────────────────────────────
    // FILTER LOGIC
    // ─────────────────────────────────────

    const filters = section.querySelectorAll('.learn__filter');
    const cards = section.querySelectorAll('.learn__card');
    const emptyState = section.querySelector('.learn__empty');
    const grid = section.querySelector('.learn__grid');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filters.forEach(f => f.classList.remove('learn__filter--active'));
            btn.classList.add('learn__filter--active');

            const filter = btn.dataset.filter;
            let visibleCount = 0;

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Show empty state if no cards visible
            if (visibleCount === 0) {
                grid.style.display = 'none';
                emptyState.style.display = 'flex';
            } else {
                grid.style.display = '';
                emptyState.style.display = 'none';
            }
        });
    });

    // ─────────────────────────────────────
    // VIDEO MODAL LOGIC
    // ─────────────────────────────────────

    const modal = section.querySelector('#learnVideoModal');
    const modalBackdrop = section.querySelector('.learn__modal-backdrop');
    const modalClose = section.querySelector('.learn__modal-close');
    const videoFrame = section.querySelector('#learnVideoFrame');

    function openVideo(url) {
        videoFrame.src = url + '?autoplay=1';
        modal.classList.add('learn__modal--open');
        document.body.style.overflow = 'hidden';
    }

    function closeVideo() {
        modal.classList.remove('learn__modal--open');
        videoFrame.src = '';
        document.body.style.overflow = '';
    }

    // Video CTA buttons
    section.querySelectorAll('[data-video]').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.dataset.video;
            if (url) openVideo(url);
        });
    });

    // Article CTA buttons
    section.querySelectorAll('[data-article]').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.dataset.article;
            if (url) window.location.href = url;
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeVideo);
    modalBackdrop.addEventListener('click', closeVideo);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVideo();
    });

    return section;
}