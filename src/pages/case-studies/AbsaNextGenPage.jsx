import { Link } from 'react-router-dom'
import VisualSequence from '../../components/case-studies/VisualSequence.jsx'
import SiteFooter from '../../components/layout/SiteFooter.jsx'
import SiteHeader from '../../components/layout/SiteHeader.jsx'
import moneySnapshotCurrent from '../../assets/case-studies/absa/money-snapshot-current.png'
import moneySnapshotPurple from '../../assets/case-studies/absa/money-snapshot-purple.png'
import moneySnapshotWireframe from '../../assets/case-studies/absa/money-snapshot-wireframe.svg'
import onboardingCurrent from '../../assets/case-studies/absa/onboarding-current.png'
import rentVsBuyCurrent from '../../assets/case-studies/absa/rent-vs-buy-current.png'
import rentVsBuyCalculation from '../../assets/case-studies/absa/rent-vs-buy-calculation.png'
import rentVsBuyPurple from '../../assets/case-studies/absa/rent-vs-buy-purple.png'
import rentVsBuyWireframe from '../../assets/case-studies/absa/rent-vs-buy-wireframe.svg'
import strategyTrackCurrent from '../../assets/case-studies/absa/strategy-track-current.png'
import '../../styles/pages/case-studies/CaseStudyPage.css'

function AbsaNextGenPage() {
  const moneySnapshotSequence = [
    {
      label: '01, Wireframe',
      src: moneySnapshotWireframe,
      width: 931,
      height: 550,
      alt: 'Money Snapshot wireframe arranging financial inputs beside summary and chart panels.',
      caption:
        'The wireframe established the relationship between editable inputs and an updating financial overview.',
    },
    {
      label: '02, Intermediate build',
      src: moneySnapshotPurple,
      width: 1901,
      height: 925,
      alt: 'Intermediate purple Money Snapshot interface with a financial health score, income breakdown, and editable inputs.',
      caption:
        'The purple build implemented the dashboard, but its low-contrast surfaces made the information hierarchy less immediate.',
    },
    {
      label: '03, Current build',
      src: moneySnapshotCurrent,
      width: 1917,
      height: 927,
      alt: 'Current Money Snapshot interface using a light content area, dark navigation, red accents, and clearly separated financial panels.',
      caption:
        'The current build separates navigation, inputs, results, and South African context with stronger contrast and clearer grouping.',
    },
  ]

  const rentVsBuySequence = [
    {
      label: '01, Wireframe',
      src: rentVsBuyWireframe,
      width: 931,
      height: 600,
      alt: 'Simulation Lab wireframe with adjustable scenario controls and areas for comparing financial outcomes.',
      caption:
        'The wireframe established a simulation workspace where inputs and comparative results could update together.',
    },
    {
      label: '02, Intermediate build',
      src: rentVsBuyPurple,
      width: 1917,
      height: 926,
      alt: 'Intermediate purple Rent vs Buy simulator with buying inputs, a net-worth chart, contextual guidance, and a buying verdict.',
      caption:
        'The purple build made the comparison functional, but the verdict competed with the chart and supporting information inside a dense surface.',
    },
    {
      label: '03, Current build',
      src: rentVsBuyCurrent,
      width: 1917,
      height: 927,
      alt: 'Current Rent vs Buy Studio with scenario controls, a prominent seven-year verdict, summary metrics, and a net-worth chart.',
      caption:
        'The current build leads with the verdict, follows with the figures behind it, and keeps the assumptions available for adjustment.',
    },
  ]

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

        <section className="case-study-section" aria-labelledby="structure-title">
          <p className="case-study-section__eyebrow">Structural pivot</p>
          <div className="case-study-section__content">
            <h2 id="structure-title">
              The product moved from a freeform canvas to a guided sequence.
            </h2>
            <p>
              The original concept asked users to drag financial cards into a
              flexible, automatically arranged workspace. It was visually
              expressive, but it placed the burden of organising the experience
              on someone who had arrived for clarity.
            </p>
            <p>
              The shipped structure uses a staged onboarding flow, persistent
              navigation, and clearly separated tools. Each step asks for a
              focused set of information before leading into the dashboard,
              strategy tracks, and decision simulators.
            </p>

            <figure className="case-study-inline-visual">
              <img
                src={onboardingCurrent}
                width="1917"
                height="923"
                loading="lazy"
                alt="Current ABSA NextGen onboarding screen with a five-step progress indicator and profile form beside a concise product introduction."
              />
              <figcaption>
                The current onboarding sequence breaks profile setup into five
                visible steps before users enter the main financial tools.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="case-study-section" aria-labelledby="snapshot-title">
          <p className="case-study-section__eyebrow">Visual evolution</p>
          <div className="case-study-section__content">
            <h2 id="snapshot-title">
              Money Snapshot kept the same core relationship while its visual
              hierarchy became more explicit.
            </h2>
            <p>
              Across all three stages, editable financial inputs drive an
              immediate summary. The largest change was not the feature set,
              but how clearly the interface separates input, interpretation,
              and supporting context.
            </p>

            <VisualSequence items={moneySnapshotSequence} />
          </div>
        </section>

        <section className="case-study-section" aria-labelledby="simulation-title">
          <p className="case-study-section__eyebrow">Decision simulator</p>
          <div className="case-study-section__content">
            <h2 id="simulation-title">
              Rent vs Buy evolved from a calculation workspace into a clearer
              decision narrative.
            </h2>
            <p>
              The simulator still exposes its assumptions and comparison data,
              but the current hierarchy answers the primary question first. A
              verdict, supporting figures, and longer-term chart now form a
              deliberate reading order.
            </p>

            <VisualSequence items={rentVsBuySequence} />
          </div>
        </section>

        <section className="case-study-section" aria-labelledby="patterns-title">
          <p className="case-study-section__eyebrow">Interaction patterns</p>
          <div className="case-study-section__content">
            <h2 id="patterns-title">
              Guidance stays connected to the input or decision that produced
              it.
            </h2>
            <p>
              The interface avoids separating calculation from explanation.
              Inputs, results, warnings, and suggested priorities appear within
              the same working context so users can adjust a choice and inspect
              the consequence.
            </p>

            <ol className="case-study-patterns">
              <li>
                <h3>Immediate feedback</h3>
                <p>
                  Financial summaries and projections update as assumptions
                  change, keeping cause and effect visible.
                </p>
              </li>
              <li>
                <h3>Progressive guidance</h3>
                <p>
                  Multi-year strategies are divided into named stages and
                  milestones rather than presented as one long instruction set.
                </p>
              </li>
              <li>
                <h3>Contextual priorities</h3>
                <p>
                  Warnings and recommendations explain which prerequisite, such
                  as an emergency fund, should come before a longer-term goal.
                </p>
              </li>
            </ol>

            <figure className="case-study-inline-visual">
              <img
                src={strategyTrackCurrent}
                width="1917"
                height="928"
                loading="lazy"
                alt="Current Strategy Track screen showing a five-stage investment plan, adjustable assumptions, an emergency-fund warning, and a South African context panel."
              />
              <figcaption>
                The Strategy Track keeps adjustable assumptions, staged goals,
                and prerequisite warnings within one decision context.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="case-study-section" aria-labelledby="technical-title">
          <p className="case-study-section__eyebrow">Technical highlight</p>
          <div className="case-study-section__content">
            <h2 id="technical-title">
              The comparison is calculated month by month, then translated into
              a yearly decision view.
            </h2>
            <p>
              The simulator reduces the remaining bond balance through monthly
              interest and principal calculations. In parallel, it applies
              property growth, compounds the renter&apos;s investment portfolio,
              increases rent annually, and stores yearly snapshots for the
              chart and verdict.
            </p>
            <p>
              These outputs are illustrative projections based on adjustable
              assumptions. They explain the model&apos;s logic rather than predict
              an individual financial outcome.
            </p>

            <figure className="case-study-code-visual">
              <div className="case-study-code-visual__crop">
                <img
                  src={rentVsBuyCalculation}
                  width="1602"
                  height="868"
                  loading="lazy"
                  alt="JavaScript calculation loop reducing a bond balance, applying annual property growth, compounding a renter investment portfolio, increasing rent, and recording yearly snapshots."
                />
              </div>
              <figcaption>
                The cropped excerpt shows the central comparison loop. The
                original screenshot remains intact in the project assets.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default AbsaNextGenPage
