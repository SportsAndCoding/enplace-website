// src/components/proof-landing.js
// Proof Intelligence — full landing page
// Standalone — no En Place navbar, no cross-navigation
// Deployed at proof.en-place.ai

export default function ProofLanding() {
  const root = document.createElement("div");
  root.className = "proof";

  // ── MARK SVG (reused inline) ─────────────────────────────────────────
  const markSVG = (size = 34) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="${size}" height="${size}">
      <defs>
        <linearGradient id="pmg" x1="10%" y1="5%" x2="90%" y2="95%">
          <stop offset="0%" stop-color="#fae49a"/>
          <stop offset="50%" stop-color="#f4d06f"/>
          <stop offset="100%" stop-color="#e6b800"/>
        </linearGradient>
        <radialGradient id="pig" cx="35%" cy="28%" r="65%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.11)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="42" height="42" rx="8" fill="url(#pmg)"/>
      <rect x="1" y="1" width="42" height="42" rx="8" fill="url(#pig)"/>
      <text x="22" y="23"
        font-family="Cinzel,serif"
        font-size="26"
        font-weight="700"
        fill="#1a1200"
        text-anchor="middle"
        dominant-baseline="central"
        opacity="0.82">P</text>
    </svg>`;

  root.innerHTML = `

    <!-- ══ HERO ══ -->
    <section class="proof-hero">
      <div class="proof-hero__bg"></div>
      <div class="proof-hero__vignette"></div>

      <!-- NAV -->
      <nav class="proof-nav">
        <a href="/proof" class="proof-nav__logo">
          ${markSVG(34)}
          <div class="proof-nav__wordmark">
            <span class="proof-nav__proof">PROOF</span>
            <span class="proof-nav__intel">Intelligence</span>
          </div>
        </a>
        <ul class="proof-nav__links">
          <li><a href="#workflow">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="tel:5134020611">Contact · (513) 402-0611</a></li>
        </ul>
        <div class="proof-nav__actions">
          <a href="https://proof.en-place.ai/proof/index" class="proof-nav__login">Login</a>
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--nav">Start Free</a>
        </div>
      </nav>

      <!-- HERO CONTENT -->
      <div class="proof-hero__content">
        <div class="proof-hero__eyebrow">
          <div class="proof-hero__eyebrow-rule"></div>
          <span class="proof-hero__eyebrow-text">Restaurant Sales Intelligence</span>
        </div>

        <h1 class="proof-hed proof-hed--hero" style="margin-bottom:26px;">
          Know every restaurant<br>in your territory before<br>you <em>walk in the door.</em>
        </h1>

        <p class="proof-hero__sub">
          Proof Intelligence is the only platform that combines a <strong>900K+ restaurant database</strong>
          with AI-powered dossiers, GM vacancy detection, a built-in CRM, and a daily prioritized call list.
          Built for the sales professionals who sell into restaurants.
        </p>

        <div class="proof-hero__cta-stack">
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary">
            Start Free &nbsp;→
          </a>
          <span class="proof-hero__micro">No credit card required · Full search access in 60 seconds</span>
        </div>
      </div>

      <!-- STATS STRIP -->
      <div class="proof-stats">
        <div class="proof-stats__item">
          <div class="proof-stats__n">900K+</div>
          <div class="proof-stats__l">Licensed restaurants indexed nationwide</div>
        </div>
        <div class="proof-stats__item">
          <div class="proof-stats__n">60 sec</div>
          <div class="proof-stats__l">AI dossiers. Ownership, pain points, recommended approach.</div>
        </div>
        <div class="proof-stats__item">
          <div class="proof-stats__n">GM Scan</div>
          <div class="proof-stats__l">Detects GM vacancies by region. Nobody else does this.</div>
        </div>
        <div class="proof-stats__item">
          <div class="proof-stats__n">CRM</div>
          <div class="proof-stats__l">Built-in pipeline, daily call list, and contact management.</div>
        </div>
      </div>
    </section>

    <!-- ══ SOCIAL PROOF ══ -->
    <div class="proof-social-strip">
      <div class="proof-social-strip__inner">
        <div class="proof-social-strip__quote">
          <div class="proof-social-strip__text">"The Docket changed my mornings. I used to spend 20 minutes deciding who to call. Now I open Proof and my list is ready."</div>
          <div class="proof-social-strip__attr">Territory Rep, Beverage Distributor</div>
        </div>
        <div class="proof-social-strip__divider"></div>
        <div class="proof-social-strip__quote">
          <div class="proof-social-strip__text">"I imported my entire book of business and enriched 200 records in an afternoon. Half of them had phone numbers I didn't have."</div>
          <div class="proof-social-strip__attr">Account Executive, Restaurant Equipment</div>
        </div>
        <div class="proof-social-strip__divider"></div>
        <div class="proof-social-strip__quote">
          <div class="proof-social-strip__text">"The dossier paid for itself on the first call. I knew the owner's name and their biggest complaint."</div>
          <div class="proof-social-strip__attr">Territory Rep, Restaurant Equipment Vendor</div>
        </div>
      </div>
    </div>

    <div class="proof-rule"></div>

    <!-- ══ HOW SALES TEAMS USE PROOF — WORKFLOW ══ -->
    <section class="proof-sec" id="workflow">
      <div class="proof-sec__inner">
        <div class="proof-tag">How Sales Teams Use Proof</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:16px;">From territory plan to <em>closed deal.</em></h2>
        <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.65);line-height:1.75;max-width:580px;margin-bottom:56px;">
          This is the workflow that replaces three separate tools and turns your pre-call research from 45 minutes into 60 seconds.
        </p>

        <div class="proof-workflow proof-workflow--7">
          <div class="proof-workflow__step">
            <div class="proof-workflow__num">01</div>
            <div class="proof-workflow__connector"></div>
            <div class="proof-workflow__label">Territory Planning</div>
            <div class="proof-workflow__body">Search 900K+ restaurants by state, county, city, category, and license type. Build your target list in minutes, not days. Export to CSV or save directly to the CRM.</div>
            <div class="proof-workflow__tool">Search Portal + Filters</div>
          </div>

          <div class="proof-workflow__step">
            <div class="proof-workflow__num">02</div>
            <div class="proof-workflow__connector"></div>
            <div class="proof-workflow__label">Lead Discovery</div>
            <div class="proof-workflow__body">New liquor licenses detected weekly. A new license means a new restaurant that hasn't chosen its distributors, tech stack, or suppliers. First mover wins.</div>
            <div class="proof-workflow__tool">Weekly Digest Alerts</div>
          </div>

          <div class="proof-workflow__step">
            <div class="proof-workflow__num">03</div>
            <div class="proof-workflow__connector"></div>
            <div class="proof-workflow__label">Account Research</div>
            <div class="proof-workflow__body">Pull a $1 dossier on any target. Ownership structure, reputation analysis, pain points, competitor landscape, and a recommended approach. Walk in knowing everything.</div>
            <div class="proof-workflow__tool">Deep-Dive Dossier</div>
          </div>

          <div class="proof-workflow__step">
            <div class="proof-workflow__num">04</div>
            <div class="proof-workflow__connector"></div>
            <div class="proof-workflow__label">GM Vacancy Detection</div>
            <div class="proof-workflow__body">Run a GM Scan on your territory. Restaurants with leadership instability are making emergency vendor decisions right now. This is the signal nobody else can see.</div>
            <div class="proof-workflow__tool">GM Vacancy Scan</div>
          </div>

          <div class="proof-workflow__step proof-workflow__step--featured">
            <div class="proof-workflow__num">05</div>
            <div class="proof-workflow__connector"></div>
            <div class="proof-workflow__label">The Docket</div>
            <div class="proof-workflow__body">Every morning, Proof analyzes your contacts, notes, dossiers, and vacancy signals to build your prioritized call list. Tell it how many calls you want to make. It tells you who, why today, and what to say.</div>
            <div class="proof-workflow__tool">AI-Powered Daily Call List</div>
          </div>

          <div class="proof-workflow__step">
            <div class="proof-workflow__num">06</div>
            <div class="proof-workflow__connector"></div>
            <div class="proof-workflow__label">Call Prep &amp; Outreach</div>
            <div class="proof-workflow__body">Generate a personalized first outreach email built from the dossier. The owner's name, their biggest pain point, and the hook that gets a response. Hit send.</div>
            <div class="proof-workflow__tool">Outreach Generator</div>
          </div>

          <div class="proof-workflow__step">
            <div class="proof-workflow__num">07</div>
            <div class="proof-workflow__label">Pipeline Tracking</div>
            <div class="proof-workflow__body">Save contacts from search results or GM scans. Track status from lead to closed. Add notes after every call. Import your existing book of business via CSV or Excel. One platform, zero tab switching.</div>
            <div class="proof-workflow__tool">Built-In CRM</div>
          </div>
        </div>

      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ FEATURES ANCHOR ══ -->
    <div id="features"></div>

    <!-- ══ DEEP-DIVE DOSSIER ══ -->
    <section class="proof-dossier-section" id="dossier">
      <div class="proof-dossier-section__inner">

        <div class="proof-dossier-section__intro">

          <!-- LEFT: copy -->
          <div>
            <div class="proof-tag">The Deep-Dive Dossier</div>
            <h2 class="proof-hed proof-hed--sec" style="margin-bottom:22px;">Stop walking in <em>cold.</em></h2>

            <div class="proof-price-callout">
              <div class="proof-price-callout__big">$1</div>
              <div class="proof-price-callout__context">
                <span class="proof-price-callout__label">Per Report</span>
                <span class="proof-price-callout__sub">Generated in 30 to 60 seconds</span>
              </div>
            </div>

            <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.72);line-height:1.78;margin-bottom:18px;">
              Click one button on any record and receive a <strong style="color:#f7f3e9;font-weight:500;">complete account intelligence brief</strong>:
              ownership structure, reputation analysis, online presence audit, competitor landscape,
              hiring signals, and a recommended approach, assembled in under a minute.
            </p>
            <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.72);line-height:1.78;margin-bottom:28px;">
              The rep who walks in knowing the owner's name, what customers are complaining about,
              and whether there's an open GM position is having a
              <strong style="color:#f7f3e9;font-weight:500;">categorically different conversation</strong>
              than the rep who shows up with just an address.
            </p>

            <div class="proof-contrast">
              <div class="proof-contrast__side">
                <div class="proof-contrast__label proof-contrast__label--bad">Without a Dossier</div>
                <ul class="proof-contrast__list">
                  <li class="bad-item">Walk in cold, ask for the manager</li>
                  <li class="bad-item">Don't know if it's the owner or a shift lead</li>
                  <li class="bad-item">Generic pitch that fits nobody</li>
                  <li class="bad-item">No idea if they're a 2-location group</li>
                  <li class="bad-item">One account, one shot</li>
                </ul>
              </div>
              <div class="proof-contrast__side">
                <div class="proof-contrast__label proof-contrast__label--good">With a Dossier</div>
                <ul class="proof-contrast__list">
                  <li class="good-item">Know the owner's name before you open the door</li>
                  <li class="good-item">Lead with their biggest customer complaint</li>
                  <li class="good-item">Pitch built around their actual pain</li>
                  <li class="good-item">Know they own 4 other locations</li>
                  <li class="good-item">First outreach email already written</li>
                  <li class="good-item">One deal becomes five</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- RIGHT: mock dossier document -->
          <div>
            <div class="proof-mock">
              <div class="proof-mock__topbar">
                <div class="proof-mock__title-row">
                  ${markSVG(20)}
                  <span class="proof-mock__title-text">PROOF · DEEP-DIVE DOSSIER</span>
                </div>
                <div class="proof-mock__badges">
                  <span class="proof-mock__badge proof-mock__badge--generated">Generated</span>
                  <span class="proof-mock__badge proof-mock__badge--high">High Opportunity</span>
                </div>
              </div>

              <div class="proof-mock__body">
                <div>
                  <div class="proof-mock__acct-name">The Mahogany Room</div>
                  <div class="proof-mock__acct-address">4821 Montgomery Rd, Cincinnati, OH 45212 · Est. 2011</div>
                </div>

                <div class="proof-mock__rule"></div>

                <div>
                  <div class="proof-mock__section-label">Basic Information</div>
                  <div class="proof-mock__field-grid">
                    <div><div class="proof-mock__field-k">Cuisine</div><div class="proof-mock__field-v proof-mock__field-v--hi">American Steakhouse</div></div>
                    <div><div class="proof-mock__field-k">Price Point</div><div class="proof-mock__field-v proof-mock__field-v--hi">$$$$</div></div>
                    <div><div class="proof-mock__field-k">Rating</div><div class="proof-mock__field-v proof-mock__field-v--hi">4.6 · 340 reviews</div></div>
                    <div><div class="proof-mock__field-k">Avg. Check</div><div class="proof-mock__field-v proof-mock__field-v--gold">$85 to 110/pp</div></div>
                  </div>
                </div>

                <div class="proof-mock__rule"></div>

                <div>
                  <div class="proof-mock__section-label">Ownership Intelligence</div>
                  <div class="proof-mock__owner-block">
                    <div class="proof-mock__owner-row">
                      <div class="proof-mock__owner-name">Marcus T. Bellamy</div>
                      <span class="proof-mock__li-badge">LinkedIn ↗</span>
                    </div>
                    <div class="proof-mock__owner-detail">Managing partner, Bellamy Hospitality Group LLC (OH). Former F&amp;B director, Marriott International.</div>
                    <div class="proof-mock__multiunit">Owns 3 additional locations: Bellamy Chop House (Dayton), The Rail Bar &amp; Kitchen (Mason), Bellamy at The Banks</div>
                  </div>
                </div>

                <div class="proof-mock__rule"></div>

                <div>
                  <div class="proof-mock__section-label">Reputation Signals</div>
                  <div style="display:flex;flex-direction:column;gap:6px;">
                    <div class="proof-mock__rep-row"><span class="proof-mock__rep-label">Food quality</span><div class="proof-mock__rep-track"><div class="proof-mock__rep-fill" style="width:90%"></div></div><span class="proof-mock__rep-score">9.0</span></div>
                    <div class="proof-mock__rep-row"><span class="proof-mock__rep-label">Service</span><div class="proof-mock__rep-track"><div class="proof-mock__rep-fill" style="width:64%"></div></div><span class="proof-mock__rep-score">6.4</span></div>
                    <div class="proof-mock__rep-row"><span class="proof-mock__rep-label">Wait times</span><div class="proof-mock__rep-track"><div class="proof-mock__rep-fill" style="width:42%"></div></div><span class="proof-mock__rep-score">4.2</span></div>
                    <div class="proof-mock__rep-row"><span class="proof-mock__rep-label">Consistency</span><div class="proof-mock__rep-track"><div class="proof-mock__rep-fill" style="width:58%"></div></div><span class="proof-mock__rep-score">5.8</span></div>
                  </div>
                </div>

                <div class="proof-mock__rule"></div>

                <div>
                  <div class="proof-mock__section-label">Identified Pain Points</div>
                  <ul class="proof-mock__pain-list">
                    <li>Recurring complaints about inconsistent service and long waits. Front-of-house staffing signal.</li>
                    <li>3 open FOH positions posted on Indeed in past 60 days. Active hiring, likely turnover issue.</li>
                    <li>Website last updated 2022. No online ordering, outdated menu.</li>
                    <li>No loyalty program identified across any platform.</li>
                  </ul>
                </div>

                <div class="proof-mock__rule"></div>

                <div class="proof-mock__approach">
                  <div class="proof-mock__approach-label">Recommended Approach</div>
                  <div class="proof-mock__approach-text">
                    Lead with staffing. Marcus is a hospitality operator who knows service scores drive revenue.
                    The FOH turnover signal is your hook. Ask about it before you pitch anything.
                    Once you're in the door on location one, the other three properties are in play.
                  </div>
                  <div class="proof-mock__rating-row">
                    <span class="proof-mock__rating-label">Opportunity:</span>
                    <span class="proof-mock__rating-badge">HIGH · MULTI-UNIT</span>
                  </div>
                </div>

                <div class="proof-mock__email-row">
                  <div class="proof-mock__email-copy">
                    <div class="proof-mock__email-label">Ready to Reach Out?</div>
                    <div class="proof-mock__email-sub">First outreach email drafted from this dossier</div>
                  </div>
                  <button class="proof-mock__email-btn">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4l6 5 6-5M2 4h12v9H2z"/></svg>
                    Generate Outreach Email
                  </button>
                </div>
              </div>

              <div class="proof-mock__gen-row">
                <span class="proof-mock__gen-left">Report generated in <strong>41 seconds</strong></span>
                <button class="proof-mock__gen-btn">Pull Dossier &nbsp;· &nbsp;$1.00</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Every Dossier Contains -->
        <div class="proof-tag" style="margin-bottom:16px;">Every Dossier Contains</div>
        <div class="proof-contents">
          <div class="proof-contents__card"><div class="proof-contents__num">01</div><div class="proof-contents__title">Basic Information</div><div class="proof-contents__desc">Address, hours, cuisine type, price range, estimated covers, year established, and website quality assessment.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">02</div><div class="proof-contents__title">Ownership Intelligence</div><div class="proof-contents__desc">Owner name, background, LLC entity, management structure, and every other business they operate.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">03</div><div class="proof-contents__title">LinkedIn Profile</div><div class="proof-contents__desc">Owner's professional history, hospitality background, and industry associations. Pulled and summarized.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">04</div><div class="proof-contents__title">Online Presence Audit</div><div class="proof-contents__desc">Website platform, Google Business status, social activity, third-party ordering, and reservation systems.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">05</div><div class="proof-contents__title">Reputation Analysis</div><div class="proof-contents__desc">Overall sentiment, what customers praise, what they complain about, and any notable press or health incidents.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">06</div><div class="proof-contents__title">Menu &amp; Operations</div><div class="proof-contents__desc">Signature offerings, avg. check estimate, POS system if identifiable, and current job postings.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">07</div><div class="proof-contents__title">Hiring Patterns</div><div class="proof-contents__desc">Open positions by role, posting history, and whether active hiring signals growth, turnover, or a leadership gap.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">08</div><div class="proof-contents__title">New GM Alert</div><div class="proof-contents__desc">Recent management change detected. New GMs reset vendor relationships. One of the highest-value signals in the database.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">09</div><div class="proof-contents__title">Competitive Landscape</div><div class="proof-contents__desc">Direct competitors within five miles and how this account differentiates itself in the market.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">10</div><div class="proof-contents__title">Account Intelligence</div><div class="proof-contents__desc">Estimated revenue range, employee count, best contact method, owner email if public, and best time to reach.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">11</div><div class="proof-contents__title">Multi-Unit Flag</div><div class="proof-contents__desc">All locations under the same ownership identified and listed. One deal often becomes many.</div></div>
          <div class="proof-contents__card"><div class="proof-contents__num">12</div><div class="proof-contents__title">Recommended Approach</div><div class="proof-contents__desc">The strongest hook, best first contact method, landmines to avoid, and a High / Medium / Low opportunity rating.</div></div>
          <div class="proof-contents__card proof-contents__card--full">
            <div>
              <div class="proof-contents__num" style="margin-bottom:6px;">13</div>
              <div class="proof-contents__title" style="font-size:19px;margin-bottom:6px;">Generate Outreach Email</div>
              <div class="proof-contents__desc" style="max-width:600px;">One click drafts a personalized first outreach email built from everything in the dossier: the owner's name, the account's strongest pain point, and the recommended hook. The rep's only job is to hit send.</div>
            </div>
            <div class="proof-contents__cta">
              <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#f4d06f" stroke-width="1.5"><path d="M3 5l7 6 7-6M3 5h14v11H3z"/></svg>
              <span class="proof-contents__cta-text">Generate Outreach Email</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ THE DOCKET ══ -->
    <section class="proof-sec" id="docket">
      <div class="proof-sec__inner">
        <div class="proof-tag">The Feature That Makes It a Daily Habit</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:22px;">
          Every morning, Proof tells you<br><em>who to call.</em>
        </h2>

        <div class="proof-docket-grid">
          <!-- LEFT: copy -->
          <div>
            <p style="font-size:16px;font-weight:300;color:rgba(247,243,233,0.72);line-height:1.78;margin-bottom:28px;">
              Your pipeline has 80 contacts. Some have GM vacancies. Some you haven't called in three weeks.
              Some have a proposal pending. Some just got a bad Yelp review. The Docket reads everything — your contacts,
              your notes, every dossier, every scan result — and ranks your calls by who needs attention today.
              Not who's alphabetically first. Who matters right now.
            </p>

            <div class="proof-docket-bullets">
              <div class="proof-docket-bullet"><span>◆</span>Enter how many calls you want to make today</div>
              <div class="proof-docket-bullet"><span>◆</span>AI analyzes your full pipeline, notes, dossiers, and vacancy signals</div>
              <div class="proof-docket-bullet"><span>◆</span>Each call gets a specific reason why today and a suggested opening line</div>
              <div class="proof-docket-bullet"><span>◆</span>Phone numbers pulled from enrichment data, ready to tap</div>
              <div class="proof-docket-bullet"><span>◆</span>Enrich or pull a dossier on any contact directly from the call card</div>
              <div class="proof-docket-bullet"><span>◆</span>One click opens the full contact record with notes and history</div>
            </div>
          </div>

          <!-- RIGHT: mock docket -->
          <div>
            <div class="proof-docket-mock">
              <div class="proof-docket-mock__topbar">
                <div class="proof-docket-mock__topbar-left">
                  ${markSVG(16)}
                  <span class="proof-docket-mock__topbar-label">THE DOCKET · TUESDAY, MARCH 25</span>
                </div>
                <span class="proof-docket-mock__topbar-badge">8 Calls Prioritized</span>
              </div>

              <div class="proof-docket-mock__body">
                <div class="proof-docket-mock__card proof-docket-mock__card--hot">
                  <div class="proof-docket-mock__rank">1</div>
                  <div class="proof-docket-mock__info">
                    <div class="proof-docket-mock__name">Marcus Bellamy · The Mahogany Room</div>
                    <div class="proof-docket-mock__type-row">
                      <span class="proof-docket-mock__type proof-docket-mock__type--close">Close Attempt</span>
                      <span class="proof-docket-mock__phone">(513) 555-0142</span>
                    </div>
                    <div class="proof-docket-mock__reason">Proposal sent 6 days ago. No response. Follow up before he goes with another vendor. Mention the multi-unit discount for his 4 locations.</div>
                  </div>
                </div>

                <div class="proof-docket-mock__card proof-docket-mock__card--hot">
                  <div class="proof-docket-mock__rank">2</div>
                  <div class="proof-docket-mock__info">
                    <div class="proof-docket-mock__name">Brickhouse Tavern &amp; Kitchen</div>
                    <div class="proof-docket-mock__type-row">
                      <span class="proof-docket-mock__type proof-docket-mock__type--cold">Cold Intro</span>
                      <span class="proof-docket-mock__phone">(513) 555-0287</span>
                    </div>
                    <div class="proof-docket-mock__reason">GM vacancy detected 34 days ago. Second posting this quarter. They're struggling. Lead with staffing solutions.</div>
                  </div>
                </div>

                <div class="proof-docket-mock__card">
                  <div class="proof-docket-mock__rank">3</div>
                  <div class="proof-docket-mock__info">
                    <div class="proof-docket-mock__name">Teresa Campos · El Torero Mexican Grill</div>
                    <div class="proof-docket-mock__type-row">
                      <span class="proof-docket-mock__type proof-docket-mock__type--follow">Follow Up</span>
                      <span class="proof-docket-mock__phone">(513) 555-0419</span>
                    </div>
                    <div class="proof-docket-mock__reason">Last contacted 19 days ago. Your note says she wanted pricing for 2 locations. Send the updated proposal.</div>
                  </div>
                </div>

                <div class="proof-docket-mock__card">
                  <div class="proof-docket-mock__rank">4</div>
                  <div class="proof-docket-mock__info">
                    <div class="proof-docket-mock__name">The Oak Barrel Steakhouse</div>
                    <div class="proof-docket-mock__type-row">
                      <span class="proof-docket-mock__type proof-docket-mock__type--cold">Cold Intro</span>
                      <span class="proof-docket-mock__phone">(513) 555-0661</span>
                    </div>
                    <div class="proof-docket-mock__reason">New GM vacancy. Owner responding to reviews personally — they're overwhelmed. Good timing for a first call.</div>
                  </div>
                </div>
              </div>

              <div class="proof-docket-mock__footer">
                <span>Showing 4 of 8 · <strong>Based on your pipeline, notes, and scan data</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ YOUR PIPELINE, BUILT IN ══ -->
    <section class="proof-sec proof-sec--dark" id="crm">
      <div class="proof-sec__inner">
        <div class="proof-tag">No More Spreadsheets</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:22px;">
          From first search to <em>closed deal.</em><br>One platform.
        </h2>

        <p style="font-size:16px;font-weight:300;color:rgba(247,243,233,0.68);line-height:1.78;max-width:640px;margin-bottom:40px;">
          Every contact you save from search, every restaurant you flag from a GM scan, every record you import from a CSV — they all land in the same pipeline. Track status, add notes, log last contacted dates, enrich with Google and Yelp data, generate dossiers. Your entire book of business in one place with intelligence attached to every record.
        </p>

        <div class="proof-crm-features">
          <div class="proof-crm-feature"><span>◆</span>Save contacts from search results with one click</div>
          <div class="proof-crm-feature"><span>◆</span>Import your existing book of business via CSV or Excel</div>
          <div class="proof-crm-feature"><span>◆</span>Status pipeline: Lead, Contacted, Meeting Set, Proposal, Won, Lost, Nurture</div>
          <div class="proof-crm-feature"><span>◆</span>Standalone notes timeline on every contact</div>
          <div class="proof-crm-feature"><span>◆</span>Enrich any contact with phone, website, ratings — even imported records without a database match</div>
          <div class="proof-crm-feature"><span>◆</span>Generate dossiers on any contact, including imports</div>
          <div class="proof-crm-feature"><span>◆</span>Last contacted tracking with one-click "Mark Contacted Today"</div>
          <div class="proof-crm-feature"><span>◆</span>Filter and sort by status, source, or date</div>
        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ GM VACANCY SCAN (reduced) ══ -->
    <section class="proof-sec" id="gm-scan">
      <div class="proof-sec__inner">
        <div class="proof-tag">GM Vacancy Scan</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:22px;">
          The signal <em>nobody else can see.</em>
        </h2>
        <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.68);line-height:1.78;max-width:600px;margin-bottom:44px;">
          Select a region. Proof scans every restaurant in it, cross-referencing job boards,
          social media, review patterns, and operational signals to detect GM vacancies.
          Results ranked by confidence with the specific signals that triggered detection.
        </p>

        <div class="proof-scan-grid">

          <!-- LEFT: How it works -->
          <div class="proof-scan-steps">
            <div class="proof-scan-step">
              <div class="proof-scan-step__num">01</div>
              <div class="proof-scan-step__content">
                <div class="proof-scan-step__title">Pick your region</div>
                <div class="proof-scan-step__desc">Select a state, county, or city. Get a cost estimate before you run.</div>
              </div>
            </div>
            <div class="proof-scan-step">
              <div class="proof-scan-step__num">02</div>
              <div class="proof-scan-step__content">
                <div class="proof-scan-step__title">Every restaurant gets scanned</div>
                <div class="proof-scan-step__desc">Each restaurant gets checked against multiple live data sources for leadership instability signals.</div>
              </div>
            </div>
            <div class="proof-scan-step">
              <div class="proof-scan-step__num">03</div>
              <div class="proof-scan-step__content">
                <div class="proof-scan-step__title">Results ranked by signal strength</div>
                <div class="proof-scan-step__desc">Restaurants with detected vacancies surface at the top with estimated time since the position opened.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: Mock scan results -->
          <div class="proof-scan-mock">
            <div class="proof-scan-mock__topbar">
              <div class="proof-scan-mock__topbar-left">
                ${markSVG(16)}
                <span class="proof-scan-mock__topbar-label">GM VACANCY SCAN · BUTLER COUNTY, OH</span>
              </div>
              <span class="proof-scan-mock__topbar-badge">47 Restaurants Scanned</span>
            </div>

            <div class="proof-scan-mock__body">
              <div class="proof-scan-mock__result proof-scan-mock__result--high">
                <div class="proof-scan-mock__result-header">
                  <span class="proof-scan-mock__result-name">Brickhouse Tavern &amp; Kitchen</span>
                  <span class="proof-scan-mock__confidence proof-scan-mock__confidence--high">HIGH</span>
                </div>
                <div class="proof-scan-mock__result-addr">7812 Cox Rd, West Chester, OH 45069</div>
                <div class="proof-scan-mock__signals">
                  <span class="proof-scan-mock__signal">GM posting on Indeed (34 days)</span>
                  <span class="proof-scan-mock__signal">2nd posting this quarter</span>
                  <span class="proof-scan-mock__signal">Service score declining</span>
                </div>
              </div>

              <div class="proof-scan-mock__result proof-scan-mock__result--high">
                <div class="proof-scan-mock__result-header">
                  <span class="proof-scan-mock__result-name">The Oak Barrel Steakhouse</span>
                  <span class="proof-scan-mock__confidence proof-scan-mock__confidence--high">HIGH</span>
                </div>
                <div class="proof-scan-mock__result-addr">1250 Princeton Rd, Hamilton, OH 45011</div>
                <div class="proof-scan-mock__signals">
                  <span class="proof-scan-mock__signal">GM role posted across 3 platforms</span>
                  <span class="proof-scan-mock__signal">Owner responding to reviews personally</span>
                </div>
              </div>

              <div class="proof-scan-mock__result">
                <div class="proof-scan-mock__result-header">
                  <span class="proof-scan-mock__result-name">Midtown Grill &amp; Bar</span>
                  <span class="proof-scan-mock__confidence proof-scan-mock__confidence--med">MEDIUM</span>
                </div>
                <div class="proof-scan-mock__result-addr">440 Main St, Middletown, OH 45042</div>
                <div class="proof-scan-mock__signals">
                  <span class="proof-scan-mock__signal">Recent management change on LinkedIn</span>
                  <span class="proof-scan-mock__signal">Service complaints spiked 3 weeks ago</span>
                </div>
              </div>
            </div>

            <div class="proof-scan-mock__footer">
              <span class="proof-scan-mock__footer-left">Scan completed in <strong>3 min 12 sec</strong> · Cost: <strong>$2.35</strong></span>
              <button class="proof-scan-mock__footer-btn">Pull Dossier →</button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ THREE PILLARS ══ -->
    <section class="proof-sec proof-sec--dark" id="database">
      <div class="proof-sec__inner">
        <div class="proof-tag">Why Proof Is Different</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:44px;">
          Three things no other<br>database can say.
        </h2>

        <div class="proof-pillars">
          <div class="proof-pillars__card">
            <div class="proof-pillars__top">
              <div class="proof-pillars__num">01</div>
              <div class="proof-pillars__divider"></div>
              <div class="proof-pillars__label">The Quality Filter</div>
            </div>
            <h3 class="proof-hed proof-hed--card">Every record earned its place here.</h3>
            <p class="proof-pillars__body">
              This isn't a scraped list of every restaurant on Google Maps. Every establishment
              in this database holds an active liquor license, which means they've met state
              requirements, posted bonds, and operate with the volume to justify it.
              Fast food doesn't qualify. Lunch counters don't qualify.
              The places worth selling to do.
            </p>
            <div class="proof-pillars__footer">The license is proof of business. That's the filter.</div>
          </div>

          <div class="proof-pillars__card">
            <div class="proof-pillars__top">
              <div class="proof-pillars__num">02</div>
              <div class="proof-pillars__divider"></div>
              <div class="proof-pillars__label">Live Intelligence</div>
            </div>
            <h3 class="proof-hed proof-hed--card">New licenses are <em>new leads.</em></h3>
            <p class="proof-pillars__body">
              The database refreshes weekly. Every new license issued in a qualifying state
              shows up in Proof, and a new license means a brand-new operation that hasn't
              chosen its distributors, its tech stack, its vendors, or its suppliers yet.
              The rep who gets there first wins. That window doesn't stay open long.
            </p>
            <div class="proof-pillars__footer">New license Monday. Your rep at the door Wednesday.</div>
          </div>

          <div class="proof-pillars__card">
            <div class="proof-pillars__top">
              <div class="proof-pillars__num">03</div>
              <div class="proof-pillars__divider"></div>
              <div class="proof-pillars__label">Category of One</div>
            </div>
            <h3 class="proof-hed proof-hed--card">The Dossier exists nowhere else.</h3>
            <p class="proof-pillars__body">
              No other restaurant database gives you on-demand account intelligence like this.
              Ownership structure, reputation analysis, hiring signals, competitor landscape,
              and a recommended approach, assembled in under 60 seconds for a dollar.
              Your competitors are still Googling the restaurant name.
            </p>
            <div class="proof-pillars__footer">One button. One dollar. Walk in knowing everything.</div>
          </div>
        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ VENUE TYPES ══ -->
    <section class="proof-sec">
      <div class="proof-sec__inner">
        <div class="proof-tag">What's Inside</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:44px;">Every establishment that <em>means business.</em></h2>
        <div class="proof-venues">
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Upscale Steakhouses</div><div class="proof-venues__desc">High-check operators with premium product needs across food, beverage, and equipment.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Wine Bars &amp; Wineries</div><div class="proof-venues__desc">Beverage-forward operations with sophisticated purchasing relationships.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Sports Bars</div><div class="proof-venues__desc">High-volume accounts with significant food, draft, and package goods spend.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Full-Service Seafood</div><div class="proof-venues__desc">Volume purchasers across fresh product, specialty ingredients, and premium proteins.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Fine Dining</div><div class="proof-venues__desc">White-tablecloth operations that demand the highest quality across every category.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Bar &amp; Grills</div><div class="proof-venues__desc">The backbone of the casual dining market. Consistent volume, year-round buying.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Craft Cocktail Bars</div><div class="proof-venues__desc">Premium spirits buyers with strong brand loyalty and influential menus.</div></div>
          <div class="proof-venues__card"><div class="proof-venues__pip"></div><div class="proof-venues__name">Breweries &amp; Taprooms</div><div class="proof-venues__desc">Hybrid food-and-beverage operations with growing product and service needs.</div></div>
        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ USE CASES ══ -->
    <section class="proof-sec proof-sec--dark" id="use-cases">
      <div class="proof-sec__inner">
        <div class="proof-tag">Use Cases</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:14px;">One platform. <em>Four completely different ROIs.</em></h2>
        <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.65);line-height:1.75;max-width:560px;margin-bottom:48px;">
          The same database, the same dossier, and the same signals serve four completely different buyers, each with their own ROI.
        </p>

        <div class="proof-usecases">

          <!-- 1: Sales Professionals -->
          <div class="proof-usecases__card">
            <div class="proof-usecases__top">
              <div class="proof-usecases__tag">For Sales Professionals</div>
              <h3 class="proof-hed proof-hed--card">Your entire workflow. One login.</h3>
              <p class="proof-usecases__body-copy">Beverage distributors, food service vendors, restaurant tech companies, and equipment reps use Proof to find net-new accounts, research prospects with $1 dossiers, detect GM vacancies, manage their pipeline in the built-in CRM, and start every morning with The Docket: a prioritized call list built from their contacts, notes, and intelligence.</p>
            </div>
            <div class="proof-usecases__bullets">
              <div class="proof-usecases__bullets-label">What they use it for</div>
              <div class="proof-usecases__bullet"><span>◆</span>Territory prospecting across 900K+ qualified accounts</div>
              <div class="proof-usecases__bullet"><span>◆</span>GM vacancy scans to find restaurants making emergency decisions</div>
              <div class="proof-usecases__bullet"><span>◆</span>The Docket: AI-prioritized daily call list with opening lines</div>
              <div class="proof-usecases__bullet"><span>◆</span>Built-in CRM with status pipeline, notes, and last contacted tracking</div>
            </div>
            <div class="proof-usecases__footer">
              <div>
                <div class="proof-usecases__price">$49<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/mo</span></div>
                <div class="proof-usecases__price-sub">Starter. Growth and Team plans available.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Start Free</a>
            </div>
          </div>

          <!-- 2: Hospitality Recruiters -->
          <div class="proof-usecases__card proof-usecases__card--featured">
            <div class="proof-usecases__feature-bar">High ROI Use Case</div>
            <div class="proof-usecases__top">
              <div class="proof-usecases__tag">For Hospitality Recruiters</div>
              <h3 class="proof-hed proof-hed--card">Find GM vacancies before anyone else does.</h3>
              <p class="proof-usecases__body-copy">A GM placement is worth $15,000 to $25,000 in fees. Proof surfaces active GM vacancies, identifies the owner doing the hiring, and shows how long the search has been open. A 60-day-old posting means they're frustrated and ready to talk.</p>
            </div>
            <div class="proof-usecases__bullets">
              <div class="proof-usecases__bullets-label">What they use it for</div>
              <div class="proof-usecases__bullet"><span>◆</span>GM vacancy detection with posting age and urgency signals</div>
              <div class="proof-usecases__bullet"><span>◆</span>Owner contact intelligence for direct outreach</div>
              <div class="proof-usecases__bullet"><span>◆</span>Establishment caliber and price point as a compensation proxy</div>
              <div class="proof-usecases__bullet"><span>◆</span>Multi-unit flag to identify group placements worth more in fees</div>
            </div>
            <div class="proof-usecases__footer">
              <div>
                <div class="proof-usecases__price">$49<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/mo</span></div>
                <div class="proof-usecases__price-sub">Starter. One placement pays for years of access.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Start Free</a>
            </div>
          </div>

          <!-- 3: Multi-Unit Operators -->
          <div class="proof-usecases__card">
            <div class="proof-usecases__top">
              <div class="proof-usecases__tag">For Multi-Unit Operators</div>
              <h3 class="proof-hed proof-hed--card">Know when a competitor's GM is available.</h3>
              <p class="proof-usecases__body-copy">Restaurant groups use Proof to watch the competitive landscape for talent signals. When a GM vacancy appears at a top competitor, that's an opportunity to recruit before they've even posted publicly.</p>
            </div>
            <div class="proof-usecases__bullets">
              <div class="proof-usecases__bullets-label">What they use it for</div>
              <div class="proof-usecases__bullet"><span>◆</span>Competitor GM vacancy monitoring by market</div>
              <div class="proof-usecases__bullet"><span>◆</span>Talent signals before positions are announced publicly</div>
              <div class="proof-usecases__bullet"><span>◆</span>Market intelligence on new openings in their trade area</div>
              <div class="proof-usecases__bullet"><span>◆</span>Competitive landscape dossiers on direct market competitors</div>
            </div>
            <div class="proof-usecases__footer">
              <div>
                <div class="proof-usecases__price">$249<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/mo</span></div>
                <div class="proof-usecases__price-sub">Team plan. Up to 10 users.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Start Free</a>
            </div>
          </div>

          <!-- 4: General Managers -->
          <div class="proof-usecases__card">
            <div class="proof-usecases__top">
              <div class="proof-usecases__tag">For General Managers</div>
              <h3 class="proof-hed proof-hed--card">See yourself the way your competitors do.</h3>
              <p class="proof-usecases__body-copy">Pull a dossier on your own restaurant and get an honest third-party audit: what Google and Yelp actually say, what your reputation scores look like, and how you stack up against the three restaurants competing for the same Friday night covers.</p>
            </div>
            <div class="proof-usecases__bullets">
              <div class="proof-usecases__bullets-label">What they use it for</div>
              <div class="proof-usecases__bullet"><span>◆</span>Own-restaurant audit: reputation scores, sentiment, and blind spots</div>
              <div class="proof-usecases__bullet"><span>◆</span>Competitive dossiers on 3 to 5 restaurants in the same trade area</div>
              <div class="proof-usecases__bullet"><span>◆</span>Identify competitor weaknesses before your next menu or promo cycle</div>
              <div class="proof-usecases__bullet"><span>◆</span>No subscription needed. Load credits, pull dossiers on demand.</div>
            </div>
            <div class="proof-usecases__footer">
              <div>
                <div class="proof-usecases__price">$15<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/dossier</span></div>
                <div class="proof-usecases__price-sub">No subscription. Pay as you go with credits.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Start Free</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ WHO BUYS + PRICING ══ -->
    <section class="proof-sec" id="pricing">
      <div class="proof-sec__inner">
        <div class="proof-tag" style="margin-bottom:16px;">Pricing</div>
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:48px;">Pick the plan that fits <em>how you sell.</em></h2>

        <div class="proof-pricing-tiers">

          <!-- FREE -->
          <div class="proof-pricing-tier">
            <div class="proof-pricing-tier__header">
              <div class="proof-pricing-tier__label">Free</div>
              <div class="proof-pricing-tier__price">$0<span>/mo</span></div>
              <div class="proof-pricing-tier__desc">Search and browse the database. No credit card required.</div>
            </div>
            <div class="proof-pricing-tier__body">
              <div class="proof-pricing-tier__line"><span>Enrichment</span><span>$0.50 / record</span></div>
              <div class="proof-pricing-tier__line"><span>Dossier</span><span>$15 / report</span></div>
              <div class="proof-pricing-tier__line"><span>GM Scan</span><span>$0.50 / restaurant</span></div>
              <div class="proof-pricing-tier__line"><span>The Docket</span><span>—</span></div>
              <div class="proof-pricing-tier__line"><span>Weekly Alerts</span><span>—</span></div>
            </div>
            <a href="https://proof.en-place.ai/proof/index" class="btn-proof-ghost" style="width:100%;justify-content:center;">Start Free</a>
          </div>

          <!-- STARTER -->
          <div class="proof-pricing-tier">
            <div class="proof-pricing-tier__header">
              <div class="proof-pricing-tier__label">Starter</div>
              <div class="proof-pricing-tier__price">$49<span>/mo</span></div>
              <div class="proof-pricing-tier__desc">Full search filters and CSV export. Includes monthly allowances.</div>
            </div>
            <div class="proof-pricing-tier__body">
              <div class="proof-pricing-tier__line"><span>Enrichments included</span><span class="proof-pricing-tier__incl">50</span></div>
              <div class="proof-pricing-tier__line"><span>Dossiers included</span><span class="proof-pricing-tier__incl">5</span></div>
              <div class="proof-pricing-tier__line"><span>Scan restaurants incl.</span><span class="proof-pricing-tier__incl">100</span></div>
              <div class="proof-pricing-tier__line"><span>The Docket</span><span class="proof-pricing-tier__incl">10/mo</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Enrichment</span><span>$0.15</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Dossier</span><span>$7</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Scan</span><span>$0.30</span></div>
            </div>
            <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary" style="width:100%;justify-content:center;">Start Free</a>
          </div>

          <!-- GROWTH -->
          <div class="proof-pricing-tier proof-pricing-tier--featured">
            <div class="proof-pricing-tier__badge">Most Popular</div>
            <div class="proof-pricing-tier__header">
              <div class="proof-pricing-tier__label proof-pricing-tier__label--gold">Growth</div>
              <div class="proof-pricing-tier__price">$99<span>/mo</span></div>
              <div class="proof-pricing-tier__desc">Everything in Starter. Larger allowances. Unlimited Docket. Weekly alerts.</div>
            </div>
            <div class="proof-pricing-tier__body">
              <div class="proof-pricing-tier__line"><span>Enrichments included</span><span class="proof-pricing-tier__incl">200</span></div>
              <div class="proof-pricing-tier__line"><span>Dossiers included</span><span class="proof-pricing-tier__incl">15</span></div>
              <div class="proof-pricing-tier__line"><span>Scan restaurants incl.</span><span class="proof-pricing-tier__incl">500</span></div>
              <div class="proof-pricing-tier__line"><span>The Docket</span><span class="proof-pricing-tier__incl">Unlimited</span></div>
              <div class="proof-pricing-tier__line"><span>Weekly Alerts</span><span class="proof-pricing-tier__incl">Included</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Enrichment</span><span>$0.10</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Dossier</span><span>$5</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Scan</span><span>$0.25</span></div>
            </div>
            <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary" style="width:100%;justify-content:center;">Start Free</a>
          </div>

          <!-- TEAM -->
          <div class="proof-pricing-tier">
            <div class="proof-pricing-tier__header">
              <div class="proof-pricing-tier__label">Team</div>
              <div class="proof-pricing-tier__price">$249<span>/mo</span></div>
              <div class="proof-pricing-tier__desc">Up to 10 users. Shared CRM. Admin controls.</div>
            </div>
            <div class="proof-pricing-tier__body">
              <div class="proof-pricing-tier__line"><span>Enrichments included</span><span class="proof-pricing-tier__incl">500</span></div>
              <div class="proof-pricing-tier__line"><span>Dossiers included</span><span class="proof-pricing-tier__incl">40</span></div>
              <div class="proof-pricing-tier__line"><span>Scan restaurants incl.</span><span class="proof-pricing-tier__incl">1,500</span></div>
              <div class="proof-pricing-tier__line"><span>The Docket</span><span class="proof-pricing-tier__incl">Unlimited</span></div>
              <div class="proof-pricing-tier__line"><span>Weekly Alerts</span><span class="proof-pricing-tier__incl">Included</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Enrichment</span><span>$0.08</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Dossier</span><span>$3</span></div>
              <div class="proof-pricing-tier__line proof-pricing-tier__line--dim"><span>Overage: Scan</span><span>$0.15</span></div>
            </div>
            <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary" style="width:100%;justify-content:center;">Start Free</a>
          </div>

        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ VIDEO ══ -->
    <section class="proof-sec proof-sec--dark" id="demo-video">
      <div class="proof-sec__inner">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;">
          <div>
            <div class="proof-tag">See It Live</div>
            <h2 class="proof-hed proof-hed--sec" style="margin-bottom:22px;">From search to <em>dossier in 60 seconds.</em></h2>
            <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.68);line-height:1.78;margin-bottom:28px;">
              Watch a real account get pulled from the database, enriched with live data, and a Deep-Dive Dossier generated. Start to finish. No narration, no slides. Just the product working.
            </p>
            <div style="display:flex;flex-direction:column;gap:11px;">
              <div class="proof-video__bullet"><span>◆</span> Search and filter 900K+ records</div>
              <div class="proof-video__bullet"><span>◆</span> Run a GM Scan on your territory</div>
              <div class="proof-video__bullet"><span>◆</span> Pull a $1 Dossier. Complete intelligence in under a minute.</div>
            </div>
          </div>
          <div>
            <!-- Replace inner content with Loom or Vimeo iframe when ready -->
            <div class="proof-video__frame">
              <div style="display:flex;flex-direction:column;align-items:center;gap:13px;">
                <div class="proof-video__play-btn">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#1a1200"><polygon points="8,5 19,12 8,19"/></svg>
                </div>
                <div class="proof-video__coming-soon">Video Coming Soon</div>
              </div>
              <div class="proof-video__corner proof-video__corner--tl"></div>
              <div class="proof-video__corner proof-video__corner--tr"></div>
              <div class="proof-video__corner proof-video__corner--bl"></div>
              <div class="proof-video__corner proof-video__corner--br"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ CTA BANNER ══ -->
    <section class="proof-cta-band">
      <div class="proof-cta-band__inner">
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:16px;">
          Your next best account<br>is already <em>in here.</em>
        </h2>
        <p class="proof-cta-band__sub">
          900K+ restaurants. GM vacancy detection. $1 dossiers. A daily call list that tells you who to call and why.
          The reps who use Proof walk in with intelligence nobody else has.
        </p>
        <div class="proof-cta-band__btns">
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary">Start Free &nbsp;→</a>
          <a href="#demo-video" class="btn-proof-ghost">Watch It in Action</a>
        </div>
        <div class="proof-cta-band__friction">No credit card required · Full search access in 60 seconds · Cancel anytime</div>
      </div>
    </section>

    <!-- ══ FOOTER ══ -->
    <footer class="proof-footer">
      <div class="proof-footer__brand">Proof Intelligence &nbsp;·&nbsp; An En Place Company</div>
      <div class="proof-footer__copy">© 2026 En Place, Inc. All rights reserved.</div>
    </footer>

  `;

  return root;
}
