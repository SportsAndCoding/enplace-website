// src/components/blog-article-content.js
// ─────────────────────────────────────
// BLOG ARTICLE CONTENT REGISTRY
// Each article keyed by slug. Add new papers here.
// Images use Unsplash direct URLs (no downloads needed).
// ─────────────────────────────────────

const ARTICLES = {

    'hidden-hemorrhage': {
        meta: {
            title: 'The Real Cost of Restaurant Turnover: Why Your Staffing Problem Is a $420,000 Hemorrhage',
            description: 'Restaurant turnover costs a five-unit operator $420K–$720K per year. Here\'s the data, the hidden costs nobody measures, and what to do about it.',
            author: 'Rob',
            authorTitle: 'Founder & CEO, En Place',
            authorBio: 'Rob spent twenty years in restaurant operations, from hands-on work at Culver\'s to enterprise-level analytics at Caesars Entertainment, before building the platform he wished had existed for the last two decades. He writes about the intersection of restaurant operations, workforce psychology, and the data that connects them.',
            date: '2025-06-01',
            duration: '10 min read',
            series: {
                name: 'The Staffing Intelligence Series',
                number: 1,
                total: 5,
            },
            heroImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1400&q=80&fit=crop',
            heroAlt: 'Restaurant kitchen during service, the daily reality operators face',
            heroCredit: 'Unsplash',
            paperUrl: '/learn',
            paperTitle: 'Read the full research paper',
        },

        // ─────────────────────────────────────
        // CONTENT BLOCKS
        // Each block renders as a section.
        // Types: 'text', 'heading', 'image', 'pullquote', 'table', 'callout', 'cta'
        // ─────────────────────────────────────
        blocks: [

            // ── THE OPENING SCENE ──
            {
                type: 'text',
                content: `It's Tuesday at 7:14 AM. You're not even in the building yet and your phone buzzes.`
            },
            {
                type: 'pullquote',
                content: `"Hey, I'm not gonna make it in anymore. Sorry."`,
                attribution: null,
            },
            {
                type: 'text',
                content: `Not a two-week notice. Not a conversation. A text message with a period at the end, if you're lucky.

And just like that, your day is no longer about running a restaurant, it's about plugging a hole. You're calling in favors from people who already picked up an extra shift last week. You're rearranging the entire week's schedule on a whiteboard that's starting to look like a crime-scene diagram. You're pulling a double yourself because there's nobody left to ask. The prep list doesn't care that you're down a body. The reservation book doesn't care. The guests walking in at 5:30 definitely don't care.

And somewhere in the back of your mind, while you're doing all of this, you're doing a different kind of math, the kind you wish you didn't have to do: <em>How many times has this happened this year? And how many more times before it breaks me?</em>

I spent twenty years in restaurant operations, hands-on at Culver's, enterprise-level analytics at Caesars Entertainment, and I watched this scene play out hundreds of times. The text changes. The feeling doesn't. That pit in your stomach when you realize you're short-staffed again, that you're about to lose a weekend to interviews and training someone who might not last three months. Every operator I've ever met knows this feeling. Almost none of them know what it's actually costing them.`
            },

            // ── THE NUMBER ──
            {
                type: 'heading',
                content: 'The Number Nobody Talks About',
            },
            {
                type: 'text',
                content: `Ask a restaurant operator what turnover costs them and you'll hear something like "a few thousand per hire, maybe." They're thinking about the Indeed posting, the background check, the new uniform. The visible stuff.

Here's what the data actually says.

Black Box Intelligence, the largest restaurant analytics firm in the country, tracks hard replacement costs across their database of major restaurant chains. Their 2024–2025 data puts the number at <strong>$2,305 for an hourly employee, $10,518 for a non-GM manager, and over $17,500 for a general manager.</strong> These are hard costs only: separation, recruiting, and training. They don't include what happens to your operation while that position sits empty or gets filled by someone who doesn't know your menu yet.

Cornell University's Center for Hospitality Research found that those visible expenses, the posting, the interview, the onboarding paperwork, account for less than half the real bill. The other 52% is productivity loss: the slow tickets, the inconsistent plates, the tables that get adequate service instead of great service because your newest hire is still figuring out the POS. When you include that invisible half, a single front-line replacement approaches $5,864 in the original 2008 study, roughly $8,500 adjusted for inflation.

Now multiply it by reality. Full-service hourly turnover held at approximately <strong>92% through 2025</strong>, according to BBI. For a 25-employee restaurant, that means replacing roughly 23 people per year.

The hard costs alone? <strong>$55,000 to $92,000 annually.</strong> For one restaurant.

And that's before we talk about the costs you can't see on any P&L.`
            },

            // ── HIDDEN COSTS ──
            {
                type: 'heading',
                content: 'The Damage You Can\'t Put on a Spreadsheet',
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&fit=crop',
                alt: 'Restaurant service in motion, where hidden turnover costs manifest',
                credit: 'Unsplash',
            },
            {
                type: 'text',
                content: `<strong>The learning curve tax.</strong> A national study of 1,150 restaurants found that new hires take 7 to 11 weeks to reach full proficiency, depending on the segment. During that ramp, they're producing at roughly 50% efficiency while collecting 100% of their wages. With 23 replacements per year, each burning through an 8-week ramp period, you're looking at over <strong>$40,000 annually in productivity loss alone</strong>, for a single unit.

<strong>The traffic penalty.</strong> BBI found that full-service restaurants with top-quartile staff retention see <strong>2.6% higher comp traffic</strong> than their peers. For a restaurant doing $2 million in annual revenue, that gap represents $40,000 to $80,000 in lost sales. For a $3 million unit, it's $60,000 to $120,000. The customers don't write a letter explaining why they stopped coming. They just stop coming.

<strong>The contagion effect.</strong> Turnover isn't a series of isolated events. Visier analyzed millions of employment records across 86 organizations and found that when one team member quits, remaining teammates become <strong>9.1% more likely to leave within 135 days.</strong> On teams of 6 to 10 people, the size of a typical restaurant crew, that probability jumps to <strong>14.6%.</strong> Every departure is a domino.

<strong>The injury spike.</strong> Travelers Insurance analyzed 2.6 million workers' compensation claims and found that in the restaurant sector, <strong>53% of all claims involved employees in their first year.</strong> A kitchen full of new hires isn't just slow. It's dangerous.

<strong>The review damage.</strong> A Harvard Business School study using actual revenue data established that a one-star increase in Yelp rating causes a <strong>5 to 9% revenue increase</strong> for independent restaurants. Service consistency, the thing turnover destroys first, is the bridge between your team and your reviews.

<strong>The GM domino.</strong> When a general manager leaves, everything downstream destabilizes. BBI found that restaurants that retained their GM for the prior 12 months saw <strong>same-store sales growth 3.5 percentage points higher</strong> and <strong>traffic growth 3.3 percentage points higher</strong> than units that lost one. At over $17,500 in hard replacement costs alone, before counting the months of operational chaos, GM turnover is the most expensive single event in any restaurant.`
            },

            // ── FIVE-UNIT MATH ──
            {
                type: 'heading',
                content: 'The Five-Unit Math',
            },
            {
                type: 'text',
                content: `Here's where the number gets real.`
            },
            {
                type: 'callout',
                label: 'Single 25-Employee Full-Service Restaurant at 92% Turnover',
                content: null,
            },
            {
                type: 'table',
                rows: [
                    ['Hard replacement costs', '$73,000 – $92,000'],
                    ['Learning-curve productivity loss', '~$41,000'],
                    ['Traffic and revenue penalty', '$40,000 – $80,000'],
                    ['Manager time diverted to hiring/training', '$15,000 – $25,000'],
                ],
                footer: ['Single-unit total', '$170,000 – $220,000'],
            },
            {
                type: 'text',
                content: `For a higher-volume unit doing $3 million or more, the traffic penalty alone scales upward, pushing the total toward $250,000–$350,000.

Now multiply by five locations. Five units, 125 employees, each cycling through the same replacement machine:`
            },
            {
                type: 'pullquote',
                content: '$420,000 to $720,000 per year.',
                attribution: 'Annual turnover cost for a five-unit restaurant operator',
            },
            {
                type: 'text',
                content: `That number exceeds most five-unit operators' total net profit. It's not a rounding error. It's the single largest controllable expense in the business, and almost nobody is measuring it.`
            },
            {
                type: 'callout',
                label: 'Go Deeper',
                content: 'For the full methodology, every source citation, and a cost model you can plug your own numbers into, <a href="/learn">read the complete research paper in our Learning Center</a>.',
            },

            // ── WHY IT KEEPS HAPPENING ──
            {
                type: 'heading',
                content: 'Why It Keeps Happening',
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&fit=crop',
                alt: 'Empty restaurant dining room, the cost of turnover is measured in absence',
                credit: 'Unsplash',
            },
            {
                type: 'text',
                content: `The reason turnover is chronic in this industry isn't that operators don't care. It's that they can't see it coming.

Think about it. In most restaurants, the first signal that someone is unhappy is their resignation. There's no daily measurement of how your team is feeling. No anonymous channel where a line cook can surface a scheduling problem before it becomes a resignation. No connection between how someone felt on Monday and whether they'll show up next Friday.

The industry treats turnover like weather, something that happens to you. It's not. It's a system failure. Something you can measure, predict, and prevent.

The research is clear on this. Harvard's Service Profit Chain, built from real data including Taco Bell, where the lowest-turnover stores produced <strong>double the sales and 55% higher profits</strong>, proves that employee stability drives service quality, which drives customer loyalty, which drives revenue. Gallup's meta-analysis of 736 studies covering 183,806 business units confirms that top-quartile employee engagement produces 23% higher profitability and 24% lower turnover.

The restaurants that have cracked the turnover problem, In-N-Out with 5.9-year average tenure, Chick-fil-A with roughly 60% turnover against an industry average above 130%, share a common thread. They don't treat retention as an HR metric. They treat it as the operating system of the business.`
            },
            {
                type: 'text',
                content: `The interventions with the strongest evidence? Competitive wages (the elasticity of turnover to wages is 2.89, turnover is almost three times as responsive to pay changes as you'd expect). Schedule predictability (workers with canceled shifts are 11 percentage points more likely to quit). Structured onboarding (organizations with strong onboarding processes improve new hire retention by 82%). And anonymous feedback, giving your team a safe way to tell you what's wrong before they decide to leave.

That last one is the gap nobody has filled. Most restaurants have no systematic way to measure how their team feels on any given day. No way to connect a bad Monday to a resignation letter on Friday. No early warning system. Nothing between "everything seems fine" and "I quit."`,
            },

            // ── WHAT WE BUILT ──
            {
                type: 'heading',
                content: 'What We Built and Why',
            },
            {
                type: 'text',
                content: `I didn't start En Place because I read a research paper. I started it because I lived the problem for twenty years. I've been the manager getting that Tuesday morning text. I've been the one pulling doubles because someone quit without notice. I've run the numbers at the enterprise level and watched the same pattern repeat across hundreds of locations: the restaurants that retained their people outperformed on every metric that matters.

<strong>En Place is a restaurant emotional intelligence platform.</strong> Not another scheduling tool. Not another job board.

The <strong>Staff Stability Engine</strong> captures anonymous daily mood data from your team, a quick check-in that takes seconds, and surfaces patterns before they become resignations. <strong>Stable Hire</strong> assesses candidate psychological fit during the hiring process so you stop cycling through people who were never going to stay. And the escalation protocols surface problems through an anonymous channel that protects employee identity while giving managers the signal they've never had: <em>someone on your team is struggling, and here's what you can do about it right now.</em>

The restaurants losing $420,000 a year to turnover aren't doing it because they're bad operators. They're doing it because they've never had the data to see the problem, or the system to prevent it.`
            },
            {
                type: 'cta',
                primary: { text: 'See How En Place Works', url: '/contact' },
                secondary: { text: 'Read the Full Research', url: '/learn' },
            },
        ],

        // ── PULL QUOTES FOR SOCIAL ──
        pullQuotes: [
            "Full-service restaurants replace roughly 23 of every 25 hourly employees per year. That's not turnover. That's a revolving door bolted to the P&L.",
            "The first signal that someone is unhappy is their resignation. There's no daily measurement, no anonymous channel, no early warning. Just silence, then a text.",
            "When one team member quits, remaining teammates become 9.1% more likely to leave within 135 days. Every departure is a domino.",
            "A five-unit restaurant operator hemorrhages $420,000 to $720,000 annually to turnover. That exceeds most operators' total net profit.",
            "The restaurants that have cracked the turnover problem share one thing: they treat retention as the operating system of the business, not an HR metric.",
            "53% of all restaurant workers' comp claims involve first-year employees. A kitchen full of new hires isn't just slow. It's dangerous.",
            "Taco Bell stores in the lowest quintile of turnover produced double the sales and 55% higher profits. Retention isn't a feel-good initiative. It's the highest-ROI investment in the building.",
        ],
    },

    // ─────────────────────────────────────
    // PAPER #2, #3, #4, #5 go here
    // Same structure. Just add entries.
    // ─────────────────────────────────────
};

export function getArticle(slug) {
    return ARTICLES[slug] || null;
}

export function getAllSlugs() {
    return Object.keys(ARTICLES);
}