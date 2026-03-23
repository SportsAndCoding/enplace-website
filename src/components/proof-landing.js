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
          <li><a href="#database">Database</a></li>
          <li><a href="#dossier">Dossier</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="tel:5134020611">Contact · (513) 402-0611</a></li>
        </ul>
        <div class="proof-nav__actions">
          <a href="https://proof.en-place.ai/proof/index" class="proof-nav__login">Login</a>
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--nav">Get Started</a>
        </div>
      </nav>

      <!-- HERO CONTENT -->
      <div class="proof-hero__content">
        <div class="proof-hero__eyebrow">
          <div class="proof-hero__eyebrow-rule"></div>
          <span class="proof-hero__eyebrow-text">The Premium Restaurant Database</span>
        </div>

        <h1 class="proof-hed proof-hed--hero" style="margin-bottom:26px;">
          Know every<br>restaurant worth<br><em>selling to.</em>
        </h1>

        <p class="proof-hero__sub">
          Proof Intelligence is a comprehensive, enriched database of
          <strong>America's full-service restaurant market</strong>: every steakhouse,
          wine bar, sports bar, winery, and upscale dining room in the country.
          Built for the professionals who sell into them.
        </p>

        <div class="proof-hero__cta-stack">
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary">
            Start Free &nbsp;→
          </a>
          <span class="proof-hero__micro">Used by food and beverage sales professionals across the country.</span>
        </div>
      </div>

      <!-- STATS STRIP -->
      <div class="proof-stats">
        <div class="proof-stats__item">
          <div class="proof-stats__n">900K+</div>
          <div class="proof-stats__l">Qualified restaurants indexed</div>
        </div>
        <div class="proof-stats__item">
          <div class="proof-stats__n">Weekly</div>
          <div class="proof-stats__l">Refreshed. New licenses are new leads.</div>
        </div>
        <div class="proof-stats__item">
          <div class="proof-stats__n">Enriched</div>
          <div class="proof-stats__l">Ratings, contacts, cuisine, price point and more</div>
        </div>
        <div class="proof-stats__item">
          <div class="proof-stats__n">$1.00</div>
          <div class="proof-stats__l">Deep-Dive Dossier. Exists nowhere else.</div>
        </div>
      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ THREE PILLARS ══ -->
    <section class="proof-sec" id="database">
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
        <h2 class="proof-hed proof-hed--sec" style="margin-bottom:14px;">One platform. <em>Three reasons to subscribe.</em></h2>
        <p style="font-size:15.5px;font-weight:300;color:rgba(247,243,233,0.65);line-height:1.75;max-width:560px;margin-bottom:48px;">
          The same database, the same dossier, and the same signals serve four completely different buyers, each with their own ROI.
        </p>

        <div class="proof-usecases">

          <!-- 1: Sales Professionals -->
          <div class="proof-usecases__card">
            <div class="proof-usecases__top">
              <div class="proof-usecases__tag">For Sales Professionals</div>
              <h3 class="proof-hed proof-hed--card">Close more accounts. Walk in knowing everything.</h3>
              <p class="proof-usecases__body-copy">Beverage distributors, food service vendors, restaurant tech companies, and equipment reps use Proof to find net-new accounts, research prospects before the first call, and pull a full dossier before walking in the door.</p>
            </div>
            <div class="proof-usecases__bullets">
              <div class="proof-usecases__bullets-label">What they use it for</div>
              <div class="proof-usecases__bullet"><span>◆</span>Territory prospecting across 900K+ qualified accounts</div>
              <div class="proof-usecases__bullet"><span>◆</span>Pre-call research on ownership, reputation, and pain points</div>
              <div class="proof-usecases__bullet"><span>◆</span>New license alerts as a first-mover signal on new accounts</div>
              <div class="proof-usecases__bullet"><span>◆</span>Multi-unit identification to turn one deal into five</div>
            </div>
            <div class="proof-usecases__footer">
              <div>
                <div class="proof-usecases__price">$49<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/mo</span></div>
                <div class="proof-usecases__price-sub">Pro. Dossiers at $1.00. Team and Company plans available.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Get Started</a>
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
                <div class="proof-usecases__price-sub">Pro. One placement pays for years of access.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Get Started</a>
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
                <div class="proof-usecases__price">$250<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/mo</span></div>
                <div class="proof-usecases__price-sub">Team plan. Up to 10 users.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Get Started</a>
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
                <div class="proof-usecases__price">$10<span style="font-size:14px;font-weight:400;color:rgba(247,243,233,0.45);">/dossier</span></div>
                <div class="proof-usecases__price-sub">No subscription. Pay as you go with credits.</div>
              </div>
              <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary btn-proof-primary--sm">Get Started</a>
            </div>
          </div>

        </div>

        <!-- Credit callout -->
        <div class="proof-credit-callout">
          <div>
            <div class="proof-credit-callout__label">No Subscription Required</div>
            <div class="proof-credit-callout__hed">Load credits. Pull dossiers. No commitment.</div>
            <div class="proof-credit-callout__sub">Dossiers are $10 without a subscription. Load $30, run three competitor dossiers, and walk away with more intelligence than any consultant could deliver for that price. Or upgrade to Pro and pay $1.00 each.</div>
          </div>
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary" style="white-space:nowrap;flex-shrink:0;">Start Free &nbsp;→</a>
        </div>

      </div>
    </section>

    <div class="proof-rule"></div>

    <!-- ══ WHO BUYS + PRICING ══ -->
    <section class="proof-sec" id="pricing">
      <div class="proof-sec__inner">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">

          <div>
            <div class="proof-tag">Who Uses It</div>
            <h2 class="proof-hed proof-hed--sec" style="margin-bottom:36px;">Built for the people <em>closing deals.</em></h2>
            <ul class="proof-buyers">
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Beverage Distributors</div><div class="proof-buyers__note">Territory prospecting</div></li>
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Food Service Vendors</div><div class="proof-buyers__note">Account targeting</div></li>
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Restaurant Technology</div><div class="proof-buyers__note">Market mapping</div></li>
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Equipment &amp; Smallwares</div><div class="proof-buyers__note">New account outreach</div></li>
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Payment Processors</div><div class="proof-buyers__note">Volume identification</div></li>
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Hospitality Recruiters</div><div class="proof-buyers__note">GM placement intelligence</div></li>
              <li class="proof-buyers__row"><div class="proof-buyers__diamond"></div><div class="proof-buyers__name">Staffing &amp; Recruiting</div><div class="proof-buyers__note">Client development</div></li>
            </ul>
          </div>

          <div>
            <div class="proof-tag" style="margin-bottom:16px;">Pricing</div>
            <div class="proof-pricing-card">

              <div class="proof-pricing-card__tier">
                <div class="proof-pricing-card__tier-label">Free</div>
                <div class="proof-pricing-card__price">$0<span>/mo</span></div>
                <div class="proof-pricing-card__desc">Search and browse every restaurant in the database. No commitment.</div>
                <div class="proof-pricing-card__line"><span>Enrichment</span><span>$0.25 / record</span></div>
                <div class="proof-pricing-card__line"><span>Dossier</span><span>$10.00 / report</span></div>
              </div>

              <div class="proof-pricing-card__tier proof-pricing-card__tier--featured">
                <div class="proof-pricing-card__pro-badge">Pro</div>
                <div class="proof-pricing-card__tier-label proof-pricing-card__tier-label--gold">Pro</div>
                <div class="proof-pricing-card__price">$49<span>/mo</span></div>
                <div class="proof-pricing-card__desc">Full access. CSV export, CRM tracking, new issuance alerts, and weekly digest included.</div>
                <div class="proof-pricing-card__line proof-pricing-card__line--gold"><span>Enrichment</span><span>$0.01 / record</span></div>
                <div class="proof-pricing-card__line proof-pricing-card__line--gold"><span>Dossier</span><span>$1.00 / report</span></div>
                <div class="proof-pricing-card__highlight">Upgrade to Pro and get 90% off every dossier.</div>
              </div>

              <div class="proof-pricing-card__teams">
                <div class="proof-pricing-card__teams-label">Teams &amp; Companies</div>
                <div class="proof-pricing-card__team-row">
                  <div><div class="proof-pricing-card__team-name">Team</div><div class="proof-pricing-card__team-sub">Up to 10 users</div></div>
                  <div class="proof-pricing-card__team-price">$250<span>/mo</span></div>
                </div>
                <div class="proof-pricing-card__team-row">
                  <div><div class="proof-pricing-card__team-name">Company</div><div class="proof-pricing-card__team-sub">Up to 25 users</div></div>
                  <div class="proof-pricing-card__team-price">$500<span>/mo</span></div>
                </div>
              </div>

            </div>
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
              <div class="proof-video__bullet"><span>◆</span> Click Enrich. Full profile populates instantly.</div>
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
          Stop building lists by hand. Stop walking in cold. The premium restaurant market is fully mapped,
          and every account comes with a $1 intelligence brief ready to pull.
        </p>
        <div class="proof-cta-band__btns">
          <a href="https://proof.en-place.ai/proof/index" class="btn-proof-primary">Start Free &nbsp;→</a>
          <a href="#demo-video" class="btn-proof-ghost">Watch It in Action</a>
        </div>
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