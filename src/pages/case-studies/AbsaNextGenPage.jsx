import { Link } from 'react-router-dom'
import SiteFooter from '../../components/layout/SiteFooter.jsx'
import SiteHeader from '../../components/layout/SiteHeader.jsx'
import rentVsBuyCurrent from '../../assets/case-studies/absa/rent-vs-buy-current.png'
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

        <figure className="case-study-hero-visual">
          <img
            src={rentVsBuyCurrent}
            width="1917"
            height="927"
            alt="Current ABSA NextGen Rent vs Buy Studio showing adjustable financial inputs, a seven-year buying verdict, and a net-worth comparison chart."
          />
          <figcaption>
            The shipped Rent vs Buy Studio turns adjustable assumptions into a
            direct comparison and plain-language verdict.
          </figcaption>
        </figure>

        <section className="case-study-section" aria-labelledby="overview-title">
          <p className="case-study-section__eyebrow">Overview</p>
          <div className="case-study-section__content">
            <h2 id="overview-title">
              One product, three connected ways to understand a financial
              decision.
            </h2>
            <p>
              NextGen Wealth Studio is a financial-planning web application
              built around Money Snapshot, a live financial-health dashboard,
              Strategy Tracks, personalised five-year roadmaps, and Money
              Studio, a set of interactive decision simulators. The financial
              examples use South African parameters sourced for the 2026
              assignment period rather than a live financial-data feed.
            </p>
            <p>
              The product moved through three distinct visual and structural
              stages, from an ambitious glassmorphism and neumorphism canvas,
              through a purple intermediate build, to the clearer,
              ABSA-aligned structure that shipped. That evolution, including
              what changed and why, is the central story of this case study.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AbsaNextGenPage
