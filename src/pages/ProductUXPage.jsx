import { Link } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import productUXProjects from '../data/productUXProjects.js'

function ProductUXPage() {
  return (
    <div>
      <SiteHeader workIsCurrent />

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

          {productUXProjects.map((project) => (
            <article key={project.slug}>
              <p>{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link to={`/work/product-ux/${project.slug}`}>
                View case study
              </Link>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProductUXPage
