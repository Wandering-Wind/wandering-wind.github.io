import { Link } from 'react-router-dom'
import '../styles/pages/LandingPage.css'

function EyeIcon() {
  return (
    <svg
      className="landing-hero__icon"
      viewBox="0 0 48 32"
      aria-hidden="true"
    >
      <path d="M3 16C8.5 8.5 15.5 4.5 24 4.5S39.5 8.5 45 16c-5.5 7.5-12.5 11.5-21 11.5S8.5 23.5 3 16Z" />
      <circle cx="24" cy="16" r="5" />
    </svg>
  )
}

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <Link className="landing-header__wordmark" to="/">
          Amina Moosa
        </Link>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <section
          className="landing-hero"
          aria-labelledby="introduction-heading"
        >
          <EyeIcon />
          <h1 id="introduction-heading">
            I design interactions by guiding action, not instructing it.
          </h1>
          <p>
            UI/UX design and front-end development, alongside game design and
            development.
          </p>
        </section>

        <section
          className="landing-tracks"
          id="work"
          aria-labelledby="work-heading"
        >
          <h2 className="visually-hidden" id="work-heading">
            Selected work
          </h2>

          <article className="landing-track landing-track--featured">
            <p className="landing-track__eyebrow">Featured track</p>
            <h3>Product &amp; UX Design</h3>
            <p className="landing-track__projects">
              ABSA NextGen Wealth Studio, Subscription Tracker, Thawing Memory,
              and Dreamer&apos;s Crossroads UI.
            </p>
            <Link className="landing-track__link" to="/work/product-ux">
              View case studies →
            </Link>
          </article>

          <article className="landing-track">
            <p className="landing-track__eyebrow">Also</p>
            <h3>Game Design &amp; Development</h3>
            <p className="landing-track__projects">
              GameGrid, Dreamer&apos;s Crossroads, and Heaven&apos;s Ascent.
            </p>
            <Link className="landing-track__link" to="/work/game-design">
              View work →
            </Link>
          </article>
        </section>
      </main>

      <footer className="landing-footer">
        <p>Set in Fraunces &amp; IBM Plex Sans. Built in React.</p>
        <nav aria-label="Social links">
          <a
            href="https://github.com/Wandering-Wind"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>LinkedIn</span>
        </nav>
      </footer>
    </div>
  )
}

export default LandingPage
