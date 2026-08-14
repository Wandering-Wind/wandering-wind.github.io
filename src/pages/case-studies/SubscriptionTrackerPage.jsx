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
      </main>

      <SiteFooter />
    </div>
  )
}

export default SubscriptionTrackerPage
