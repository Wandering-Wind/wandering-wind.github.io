import { Link } from 'react-router-dom'
import SiteFooter from '../../components/layout/SiteFooter.jsx'
import SiteHeader from '../../components/layout/SiteHeader.jsx'
import '../../styles/pages/case-studies/CaseStudyPage.css'

function SubscriptionTrackerPage() {
  return (
    <div className="case-study-page">
      <SiteHeader workIsCurrent />

      <main className="case-study-main">
        <header className="case-study-hero">
          <Link className="case-study-hero__back" to="/work/product-ux">
            <span aria-hidden="true">←</span> Product &amp; UX Design
          </Link>

          <p className="case-study-hero__status">
            Concept case study, design only
          </p>
          <h1>Subscription Tracker</h1>
          <p className="case-study-hero__summary">
            Making the hidden, compounding cost of recurring subscriptions
            visible before it quietly erodes a budget.
          </p>

          <dl className="case-study-meta">
            <div>
              <dt>Role</dt>
              <dd>UX and UI design, concept</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>Self-initiated concept, 2026</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>Figma</dd>
            </div>
          </dl>

          <p className="case-study-disclaimer">
            This is a self-initiated design concept. The problem and audience
            statements are hypotheses, not findings from primary research. No
            usability testing or outcome data is presented.
          </p>
        </header>

        <section
          className="case-study-section"
          aria-labelledby="subscription-overview-title"
        >
          <p className="case-study-section__eyebrow">Overview and hypothesis</p>
          <div className="case-study-section__content">
            <h2 id="subscription-overview-title">
              What changes when recurring costs are presented as one commitment
              instead of separate small charges?
            </h2>
            <p>
              Subscription Tracker is a design concept for consolidating
              recurring payments across streaming, software, memberships, and
              other services. It would show the combined monthly and annual
              cost, upcoming renewals, and a longer-term projection within one
              focused experience.
            </p>
            <p>
              The concept deliberately addresses one flow rather than proposing
              a complete banking or budgeting application. Its purpose is to
              explore how cost can be made visible at the moment someone reviews,
              adds, or reconsiders a subscription.
            </p>

            <aside
              className="case-study-limitation"
              aria-labelledby="subscription-hypothesis-title"
            >
              <h3 id="subscription-hypothesis-title">Working hypothesis</h3>
              <p>
                If recurring payments are consolidated and translated into
                annual and multi-year totals, people may be better able to
                evaluate whether each service still deserves a place in their
                budget. This hypothesis has not been tested with users.
              </p>
            </aside>
          </div>
        </section>

        <section
          className="case-study-section"
          aria-labelledby="subscription-constraints-title"
        >
          <p className="case-study-section__eyebrow">
            Assumptions and constraints
          </p>
          <div className="case-study-section__content">
            <h2 id="subscription-constraints-title">
              The concept is intentionally bounded by manual input, transparent
              calculations, and a neutral decision flow.
            </h2>
            <p>
              These constraints define what the proposed experience can and
              cannot claim. They also keep the design focused enough to explore
              one interaction properly.
            </p>

            <ol className="case-study-goals">
              <li>
                <h3>Manual subscription data</h3>
                <p>
                  Users would enter a service name, cost, billing cycle,
                  category, and renewal date. The concept does not connect to a
                  bank account or request transaction history.
                </p>
              </li>
              <li>
                <h3>Transparent projections</h3>
                <p>
                  Monthly, annual, and multi-year totals would be calculated
                  from entered prices and billing cycles. They would not predict
                  price increases or future spending behaviour.
                </p>
              </li>
              <li>
                <h3>Illustrative audience</h3>
                <p>
                  The intended young-professional scenario is a design device,
                  not a persona derived from interviews or behavioural data.
                </p>
              </li>
              <li>
                <h3>Neutral decision support</h3>
                <p>
                  The interface would help someone compare keeping,
                  downgrading, pausing, or cancelling without treating one
                  choice as morally correct.
                </p>
              </li>
              <li>
                <h3>No provider integration</h3>
                <p>
                  Proposed cancellation and downgrade actions describe a user
                  flow. They would not directly modify an external subscription
                  account.
                </p>
              </li>
              <li>
                <h3>Deliberately narrow scope</h3>
                <p>
                  The concept covers subscription visibility and review, not a
                  complete banking, expense-tracking, or financial-advice
                  product.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="case-study-section"
          aria-labelledby="subscription-scope-title"
        >
          <p className="case-study-section__eyebrow">Scope and structure</p>
          <div className="case-study-section__content">
            <h2 id="subscription-scope-title">
              Four connected views move from awareness to a deliberate decision.
            </h2>
            <p>
              The proposed information architecture keeps the experience small.
              Each view answers a different question without expanding into a
              general-purpose budgeting product.
            </p>

            <div className="concept-grid">
              <article>
                <p className="concept-grid__number">01</p>
                <h3>Dashboard</h3>
                <p>
                  What is the combined monthly and annual commitment, and which
                  renewals are approaching?
                </p>
              </article>
              <article>
                <p className="concept-grid__number">02</p>
                <h3>Subscription list</h3>
                <p>
                  Which services are active, what do they cost, and how can they
                  be sorted by cost, category, or renewal date?
                </p>
              </article>
              <article>
                <p className="concept-grid__number">03</p>
                <h3>Forecast</h3>
                <p>
                  What would the current set of subscriptions cost over one,
                  three, or five years?
                </p>
              </article>
              <article>
                <p className="concept-grid__number">04</p>
                <h3>Subscription detail</h3>
                <p>
                  Is the service still used, and should it be kept, paused,
                  downgraded, or cancelled outside the tool?
                </p>
              </article>
            </div>

            <aside className="case-study-limitation" aria-labelledby="entry-flow-title">
              <h3 id="entry-flow-title">Supporting entry flow</h3>
              <p>
                An add-subscription form would collect the name, price, billing
                cycle, category, and next renewal date. Before saving, it would
                show the annualised cost created by that entry.
              </p>
            </aside>
          </div>
        </section>

        <section
          className="case-study-section"
          aria-labelledby="subscription-interactions-title"
        >
          <p className="case-study-section__eyebrow">Interaction decisions</p>
          <div className="case-study-section__content">
            <h2 id="subscription-interactions-title">
              Each interaction translates a recurring charge into a decision
              someone can inspect.
            </h2>

            <ol className="case-study-patterns">
              <li>
                <h3>Spend reality check</h3>
                <p>
                  The dashboard would pair the combined total with a concrete
                  time period instead of presenting a monthly number alone.
                </p>
              </li>
              <li>
                <h3>Live forecast</h3>
                <p>
                  Temporarily removing a service would update the one, three,
                  and five-year projection without a separate submit step.
                </p>
              </li>
              <li>
                <h3>Neutral usage check-in</h3>
                <p>
                  A lightweight prompt would help someone consider recent use
                  without labelling a subscription as good or bad.
                </p>
              </li>
              <li>
                <h3>Impact before saving</h3>
                <p>
                  Adding a subscription would reveal its annual cost before it
                  becomes part of the tracked total.
                </p>
              </li>
              <li>
                <h3>Multiple off-ramps</h3>
                <p>
                  Keep, pause, downgrade, and cancel would remain visible as
                  alternatives rather than forcing a binary decision.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="case-study-section"
          aria-labelledby="subscription-direction-title"
        >
          <p className="case-study-section__eyebrow">Proposed visual direction</p>
          <div className="case-study-section__content">
            <h2 id="subscription-direction-title">
              A warm, personal system would separate the concept from a bank or
              institutional finance product.
            </h2>
            <p>
              This direction is provisional and may change once wireframes show
              what the interface needs. It is presented as an intention, not a
              finished style guide.
            </p>

            <div className="subscription-direction">
              <article>
                <h3>Colour</h3>
                <div className="subscription-palette" aria-label="Proposed colour palette">
                  <span className="subscription-palette__amber">Warm amber</span>
                  <span className="subscription-palette__cream">Soft cream</span>
                  <span className="subscription-palette__charcoal">Deep charcoal</span>
                </div>
                <p>
                  Amber would highlight value and decisions, cream would soften
                  the working surface, and charcoal would preserve readable
                  contrast. Muted red would be reserved for urgent renewals.
                </p>
              </article>
              <article>
                <h3>Typography</h3>
                <p>
                  Sora is proposed for friendly, geometric headings, with Inter
                  for body copy and financial values where clarity matters most.
                </p>
              </article>
              <article>
                <h3>Tone</h3>
                <p>
                  Copy would remain calm, specific, and non-judgmental. The tool
                  should support a choice without turning subscription review
                  into a guilt exercise.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="case-study-section"
          aria-labelledby="subscription-validation-title"
        >
          <p className="case-study-section__eyebrow">What I would validate next</p>
          <div className="case-study-section__content">
            <h2 id="subscription-validation-title">
              The next questions concern comprehension and decision quality, not
              whether a polished screen looks appealing.
            </h2>

            <ul className="validation-questions">
              <li>
                Can someone understand the total commitment without needing an
                explanation of the calculation?
              </li>
              <li>
                Does annual or multi-year framing help someone evaluate a small
                monthly charge, or does it feel exaggerated?
              </li>
              <li>
                Can people distinguish a temporary forecast toggle from an
                actual cancellation action?
              </li>
              <li>
                Do the keep, pause, downgrade, and cancel options feel neutral
                rather than manipulative?
              </li>
              <li>
                What information is necessary for a useful review without
                asking for sensitive financial or transaction data?
              </li>
            </ul>

            <aside className="case-study-reflection" aria-labelledby="subscription-status-title">
              <h3 id="subscription-status-title">Current status</h3>
              <p>
                The product hypothesis, scope, information architecture, and
                interaction principles are defined. Wireframes, visual design,
                prototyping, and usability testing have not been completed.
                This page will be updated with process evidence only as that work
                exists.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default SubscriptionTrackerPage
