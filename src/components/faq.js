// src/components/faq.js
import "../styles/components/faq.scss";

const FAQ_DATA = [
    {
        category: "About En Place",
        icon: "🏠",
        questions: [
            {
                q: "What exactly is En Place?",
                a: "En Place is a workforce intelligence platform built for restaurants. It predicts staff turnover before it happens using anonymous daily mood check-ins, behavioral analytics, and network-wide intelligence. Think of it as loss prevention software — except instead of protecting inventory, it protects your team."
            },
            {
                q: "Is this a scheduling tool?",
                a: "No. En Place doesn't replace your scheduler. It sits alongside whatever you use for scheduling today — 7shifts, HotSchedules, paper, spreadsheets — and tells you the human cost your schedule is creating before you publish it. The optional Stable Schedule Builder add-on shows you emotional load patterns; your existing scheduler handles the shift logic."
            },
            {
                q: "Does it replace my POS or any existing software?",
                a: "No installations. No integrations required. En Place requires nothing from your current tech stack. Managers access a web portal. Staff check in from any smartphone browser — no app download required."
            },
            {
                q: "How is this different from a survey tool?",
                a: "Surveys tell you how people feel today. En Place builds behavioral fingerprints over time — learning each staff member's patterns across six dimensions, then flagging deviations that predict flight risk 2–6 weeks in advance. It's the difference between a thermometer and a weather forecast."
            }
        ]
    },
    {
        category: "Pricing & Contracts",
        icon: "💰",
        questions: [
            {
                q: "What does En Place cost?",
                a: "The Staff Stability Engine starts at $1,500/month and includes everything: Manager Portal, Staff Portal, Action Board, 7-Step Escalation Ladder, and Network Intelligence. Premium add-ons (Stable Hire, Stable Schedule Builder, House Guardian) are $500/month each. Operational add-ons (Open Shift Marketplace, Shift Swap) are $200/month each. Full suite is $3,400/month."
            },
            {
                q: "Are there long-term contracts?",
                a: "No. En Place is month-to-month. No annual commitment required, no cancellation fees. You stay because it's working — not because you're locked in."
            },
            {
                q: "Is there a free trial?",
                a: "We don't offer a free trial, but we do offer live demos of both the Manager Portal and Staff Portal — with real data from our demo restaurant. You'll see exactly what your team would experience before spending a dollar. Contact us or book a demo from the site."
            },
            {
                q: "What's included in the $1,500/month base?",
                a: "Everything your operation needs to detect and prevent turnover: anonymous daily mood tracking, behavioral fingerprinting, persona classification (four staff personas), retention risk scoring, the 7-Step Escalation Ladder, Action Board, and En Place Network Intelligence — which gives you benchmark data from day one, not just your own restaurant's history."
            }
        ]
    },
    {
        category: "Setup & Onboarding",
        icon: "⚡",
        questions: [
            {
                q: "How long does setup take?",
                a: "Under an hour. You purchase, complete guided onboarding in the Manager Portal, and import your staff (CSV upload or QR code scan). Staff portals go live immediately. No consultants. No setup calls. No IT department required."
            },
            {
                q: "Do I need any technical skills?",
                a: "None. If you can use a smartphone, you can use En Place. The onboarding flow walks managers through every step, and staff check in from any browser with no app download and no account creation required."
            },
            {
                q: "What if my staff aren't tech-savvy?",
                a: "The staff check-in experience is intentionally minimal — three taps and they're done. It takes under 60 seconds. We've designed it specifically for restaurant staff whose primary tool is a ticket printer, not a laptop."
            }
        ]
    },
    {
        category: "Privacy & Anonymity",
        icon: "🔒",
        questions: [
            {
                q: "Is the mood data actually anonymous?",
                a: "Yes — by design, not policy. Mood-based data is aggregated and anonymized before it ever reaches a manager. Individual check-in responses are never visible to management. Managers see team trends, risk signals, and escalation recommendations — never a specific person's score or response."
            },
            {
                q: "Can managers figure out who submitted what?",
                a: "No. The system is architected so that mood escalations never expose individual staff names. The only data that can be attributed to a specific person is schedule-based — things managers already observe directly, like shift patterns and attendance. This isn't just a privacy setting; it's how the system is built."
            },
            {
                q: "What happens to our data if we cancel?",
                a: "Your data is yours. You can export it before canceling. After cancellation, data is retained for 30 days and then deleted per our standard data policy."
            },
            {
                q: "Where is data stored?",
                a: "All data is stored in the United States on encrypted infrastructure (Supabase PostgreSQL). We do not sell or share your data with third parties."
            }
        ]
    },
    {
        category: "How It Works",
        icon: "🧠",
        questions: [
            {
                q: "What are the four staff personas?",
                a: "En Place's Staff Stability Engine classifies staff into four personas based on behavioral patterns over time: Steady Operator (reliable, consistent, low risk), Quiet Contributor (engaged but reserved — easy to overlook until they're gone), Social Navigator (mood is influenced by team dynamics), and Flight Risk (showing active departure signals). Each persona gets a tailored intervention strategy."
            },
            {
                q: "What is the En Place Network?",
                a: "Because En Place operates across multiple restaurants, every new client immediately benefits from aggregated, anonymized network intelligence — industry benchmarks, seasonal patterns, and turnover predictors that no single restaurant could build on their own. You're not starting from zero on day one."
            },
            {
                q: "What is House Guardian?",
                a: "House Guardian is an optional add-on that quietly scans open-ended staff check-in notes for high-risk signals — harassment, theft, substance use, or team conflict. It requires corroboration from multiple independent sources before escalating anything to management, and it never names individuals based on a single report."
            },
            {
                q: "What happens when a staff member quits?",
                a: "En Place's Aftermath feature automatically monitors socially connected colleagues in the days following a departure. Research shows that turnover is contagious — when one person leaves, others in their social network are significantly more likely to follow. Aftermath catches the cascade before it starts."
            }
        ]
    }
];

export default function Faq() {
    const section = document.createElement("section");
    section.className = "faq";
    section.id = "faq";

    section.innerHTML = `
    <div class="faq__container">

      <header class="faq-hero">
        <p class="faq-hero__eyebrow">Got questions?</p>
        <h1 class="faq-hero__title">We've got straight answers.</h1>
        <p class="faq-hero__subtitle">No sales language. No runaround. Everything you need to know about En Place before you make a decision.</p>
        <div class="faq-search">
          <input type="text" id="faqSearch" class="faq-search__input" placeholder="Search questions..." autocomplete="off" />
          <span class="faq-search__icon">⌕</span>
        </div>
      </header>

      <div class="faq__body">

        <!-- Category nav -->
        <aside class="faq-nav">
          ${FAQ_DATA.map((cat, i) => `
            <button class="faq-nav__item ${i === 0 ? 'faq-nav__item--active' : ''}" data-category="${i}">
              <span class="faq-nav__icon">${cat.icon}</span>
              <span class="faq-nav__label">${cat.category}</span>
            </button>
          `).join('')}
          <div class="faq-nav__cta">
            <p>Still have questions?</p>
            <a href="/contact" class="faq-nav__contact-link">Talk to the team →</a>
          </div>
        </aside>

        <!-- Questions -->
        <div class="faq__content" id="faqContent">
          ${renderAllCategories()}
        </div>

      </div>

    </div>
  `;

    initFaq(section);
    return section;
}

function renderAllCategories() {
    return FAQ_DATA.map((cat, catIndex) => `
    <div class="faq-category" data-category-index="${catIndex}">
      <div class="faq-category__header">
        <span class="faq-category__icon">${cat.icon}</span>
        <h2 class="faq-category__title">${cat.category}</h2>
      </div>
      <div class="faq-category__items">
        ${cat.questions.map((item, qIndex) => `
          <div class="faq-item" data-q="${catIndex}-${qIndex}">
            <button class="faq-item__question" type="button" onclick="toggleFaqItem('${catIndex}-${qIndex}')">
              <span class="faq-item__text">${item.q}</span>
              <span class="faq-item__chevron">+</span>
            </button>
            <div class="faq-item__answer">
              <p>${item.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function initFaq(section) {
    window.toggleFaqItem = function (key) {
        const item = document.querySelector(`.faq-item[data-q="${key}"]`);
        if (!item) return;
        const isOpen = item.classList.contains('faq-item--open');

        // Close all others
        document.querySelectorAll('.faq-item--open').forEach(el => {
            el.classList.remove('faq-item--open');
            el.querySelector('.faq-item__chevron').textContent = '+';
        });

        if (!isOpen) {
            item.classList.add('faq-item--open');
            item.querySelector('.faq-item__chevron').textContent = '−';
        }
    };

    // Category nav
    section.querySelectorAll('.faq-nav__item').forEach(btn => {
        btn.addEventListener('click', () => {
            section.querySelectorAll('.faq-nav__item').forEach(b => b.classList.remove('faq-nav__item--active'));
            btn.classList.add('faq-nav__item--active');

            const catIndex = btn.dataset.category;
            const target = document.querySelector(`.faq-category[data-category-index="${catIndex}"]`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Search
    const searchInput = section.querySelector('#faqSearch');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        const items = document.querySelectorAll('.faq-item');
        const categories = document.querySelectorAll('.faq-category');

        if (!query) {
            items.forEach(item => item.style.display = '');
            categories.forEach(cat => cat.style.display = '');
            return;
        }

        FAQ_DATA.forEach((cat, catIndex) => {
            let catHasMatch = false;
            cat.questions.forEach((item, qIndex) => {
                const el = document.querySelector(`.faq-item[data-q="${catIndex}-${qIndex}"]`);
                const matches = item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query);
                el.style.display = matches ? '' : 'none';
                if (matches) catHasMatch = true;
            });
            const catEl = document.querySelector(`.faq-category[data-category-index="${catIndex}"]`);
            catEl.style.display = catHasMatch ? '' : 'none';
        });
    });
}