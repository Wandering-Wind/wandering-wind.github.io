import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import ProjectPreview from '../components/work/ProjectPreview.jsx'
import productUXProjects from '../data/productUXProjects.js'
import '../styles/pages/ProductUXPage.css'

function ProductUXPage() {
  return (
    <div className="product-ux-page">
      <SiteHeader workIsCurrent />

      <main className="product-ux-main">
        <header className="product-ux-intro">
          <p className="product-ux-intro__eyebrow">Featured track</p>
          <h1>Product &amp; UX Design</h1>
          <p>
            Selected interface and product work, focused on making complex
            systems easier to understand and act on.
          </p>
        </header>

        <section
          className="project-list"
          aria-labelledby="case-studies-heading"
        >
          <h2 className="visually-hidden" id="case-studies-heading">
            Case studies
          </h2>

          {productUXProjects.map((project) => (
            <ProjectPreview key={project.slug} project={project} />
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProductUXPage
