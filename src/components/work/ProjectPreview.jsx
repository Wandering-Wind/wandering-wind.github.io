import { Link } from 'react-router-dom'

function ProjectPreview({ project }) {
  const titleId = `${project.slug}-title`

  return (
    <article aria-labelledby={titleId}>
      <p>{project.status}</p>
      <h3 id={titleId}>{project.title}</h3>
      <p>{project.summary}</p>
      <Link to={`/work/product-ux/${project.slug}`}>View case study</Link>
    </article>
  )
}

export default ProjectPreview
