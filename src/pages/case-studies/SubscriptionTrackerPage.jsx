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
      </main>

      <SiteFooter />
    </div>
  )
}

export default SubscriptionTrackerPage
