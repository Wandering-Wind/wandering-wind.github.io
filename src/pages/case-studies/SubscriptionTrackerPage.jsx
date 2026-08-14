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
      </main>

      <SiteFooter />
    </div>
  )
}

export default SubscriptionTrackerPage
