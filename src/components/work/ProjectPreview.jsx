import { Link } from 'react-router-dom'

function ProjectPreview({ project }) {
  const titleId = `${project.slug}-title`

  return (
    <article className="project-preview" aria-labelledby={titleId}>
      <p className="project-preview__status">{project.status}</p>
      <h3 id={titleId}>{project.title}</h3>
      <p className="project-preview__summary">{project.summary}</p>
      <Link
        className="project-preview__link"
        to={`/work/product-ux/${project.slug}`}
      >
        View case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}

export default ProjectPreview
