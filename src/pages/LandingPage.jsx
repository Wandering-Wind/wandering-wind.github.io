import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <header>
        <Link to="/">Amina Moosa</Link>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <section aria-labelledby="introduction-heading">
          <h1 id="introduction-heading">
            I design interactions by guiding action, not instructing it.
          </h1>
          <p>
            UI/UX design and front-end development, alongside game design and
            development.
          </p>
        </section>

        <section id="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Selected work</h2>

          <article>
            <p>Featured track</p>
            <h3>Product &amp; UX Design</h3>
            <p>
              ABSA NextGen Wealth Studio, Subscription Tracker, Thawing Memory,
              and Dreamer&apos;s Crossroads UI.
            </p>
            <Link to="/work/product-ux">View case studies</Link>
          </article>

          <article>
            <p>Also</p>
            <h3>Game Design &amp; Development</h3>
            <p>
              GameGrid, Dreamer&apos;s Crossroads, and Heaven&apos;s Ascent.
            </p>
            <Link to="/work/game-design">View game design work</Link>
          </article>
        </section>
      </main>

      <footer>
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
