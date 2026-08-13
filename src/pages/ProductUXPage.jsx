import { Link } from 'react-router-dom'

function ProductUXPage() {
  return (
    <div>
      <header>
        <Link to="/">Amina Moosa</Link>

        <nav aria-label="Primary navigation">
          <Link to="/work/product-ux" aria-current="page">
            Work
          </Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <header>
          <p>Featured track</p>
          <h1>Product &amp; UX Design</h1>
          <p>
            Selected interface and product work, focused on making complex
            systems easier to understand and act on.
          </p>
        </header>

        <section aria-labelledby="case-studies-heading">
          <h2 id="case-studies-heading">Case studies</h2>

          <article>
            <p>Headline case study</p>
            <h3>ABSA NextGen Wealth Studio</h3>
            <p>
              A financial planning tool that helps young South African
              professionals understand tax, investing, and property decisions.
            </p>
            <Link to="/work/product-ux/absa-nextgen">View case study</Link>
          </article>

          <article>
            <p>Self-initiated project</p>
            <h3>Subscription Tracker</h3>
            <p>
              A product concept for making the hidden monthly cost of recurring
              subscriptions easier to see and manage.
            </p>
            <Link to="/work/product-ux/subscription-tracker">
              View case study
            </Link>
          </article>

          <article>
            <p>In progress</p>
            <h3>Thawing Memory</h3>
            <p>
              A research prototype exploring how digital tools might support
              the reconstruction of cultural memory through food, gardening,
              and ritual.
            </p>
            <Link to="/work/product-ux/thawing-memory">View case study</Link>
          </article>

          <article>
            <p>Interaction design</p>
            <h3>Dreamer&apos;s Crossroads UI</h3>
            <p>
              A game interface redesign that replaced a neon visual direction
              with a paper-scroll system and used placement to guide action.
            </p>
            <Link to="/work/product-ux/dreamers-crossroads-ui">
              View case study
            </Link>
          </article>
        </section>
      </main>

      <footer>
        <p>Set in Fraunces &amp; IBM Plex Sans. Built in React.</p>
        <Link to="/">Return home</Link>
      </footer>
    </div>
  )
}

export default ProductUXPage
