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

        <section className="case-study-section" aria-labelledby="problem-title">
          <p className="case-study-section__eyebrow">Problem and goals</p>
          <div className="case-study-section__content">
            <h2 id="problem-title">
              Make complex financial choices easier to examine before someone
              commits to them.
            </h2>
            <p>
              The assignment brief focused on young South African professionals
              balancing decisions about property, investing, tax, debt, and
              savings without a simple way to compare their consequences. It
              framed limited personalisation and financial overwhelm as a
              business problem for ABSA. That business framing came from the
              brief and is not presented here as independently verified ABSA
              data.
            </p>

            <ol className="case-study-goals">
              <li>
                <h3>Reduce decision fatigue</h3>
                <p>
                  Let people adjust assumptions and compare difficult choices
                  without building their own spreadsheet.
                </p>
              </li>
              <li>
                <h3>Teach through the interaction</h3>
                <p>
                  Explain South African financial concepts at the moment they
                  affect a calculation or recommendation.
                </p>
              </li>
              <li>
                <h3>Connect insight to a next step</h3>
                <p>
                  Turn a one-time result into a clearer path through
                  personalised milestones and guidance.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="case-study-section" aria-labelledby="research-title">
          <p className="case-study-section__eyebrow">Research foundation</p>
          <div className="case-study-section__content">
            <h2 id="research-title">
              Different inputs informed the design, but they do not carry the
              same evidentiary weight.
            </h2>

            <div className="case-study-research-grid">
              <article>
                <h3>Desk research</h3>
                <p>
                  Sources cited in the assignment work informed the South
                  African financial examples and the original visual direction.
                  The financial parameters were current for the 2026 assignment
                  period and are not maintained as a live feed.
                </p>
              </article>
              <article>
                <h3>Illustrative personas</h3>
                <p>
                  Four personas helped explore different combinations of
                  income, savings, property, travel, and investing goals. They
                  were design personas created for the brief, not personas
                  derived from primary user interviews.
                </p>
              </article>
              <article>
                <h3>Informal feedback</h3>
                <p>
                  A few classmates and friends said the earlier version felt
                  dense and difficult to follow. That feedback helped motivate
                  a clearer structure, but it was not a moderated usability
                  study or a measured behavioural result.
                </p>
              </article>
            </div>

            <aside className="case-study-limitation" aria-labelledby="gap-title">
              <h3 id="gap-title">What remains unvalidated</h3>
              <p>
                The product has not been tested through structured usability
                sessions with its intended audience. A meaningful next step
                would be to test whether people understand the simplified
                language, financial-health framing, and simulator verdicts,
                then revise the design from observed evidence.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AbsaNextGenPage
