import { Link } from 'react-router-dom'
import SiteFooter from '../../components/layout/SiteFooter.jsx'
import SiteHeader from '../../components/layout/SiteHeader.jsx'
import '../../styles/pages/case-studies/CaseStudyPage.css'

function AbsaNextGenPage() {
  return (
    <div className="case-study-page">
      <SiteHeader workIsCurrent />

      <main className="case-study-main">
        <header className="case-study-hero">
          <Link className="case-study-hero__back" to="/work/product-ux">
            <span aria-hidden="true">←</span> Product &amp; UX Design
          </Link>

          <p className="case-study-hero__status">Shipped coursework product</p>
          <h1>ABSA NextGen Wealth Studio</h1>
          <p className="case-study-hero__summary">
            A financial planning tool that turns tax, savings, and property
            decisions into plain-English guidance, built for young South
            African professionals, not finance graduates.
          </p>

          <dl className="case-study-meta">
            <div>
              <dt>Role</dt>
              <dd>UX and UI design, front-end development, solo</dd>
            </div>
            <div>
              <dt>Project</dt>
              <dd>Coursework project, 2026</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>Figma, React, React Router, Recharts, Vite</dd>
            </div>
          </dl>

          <nav className="case-study-links" aria-label="Project links">
            <a
              href="https://wandering-wind.github.io/AbsaNextGen/#/home"
              target="_blank"
              rel="noreferrer"
            >
              Live product <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/Wandering-Wind/AbsaNextGen"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <p className="case-study-disclaimer">
            This independent coursework project uses ABSA as the organisation
            named in the assignment brief. It was not commissioned by or
            produced in partnership with ABSA.
          </p>
        </header>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AbsaNextGenPage
