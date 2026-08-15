import { Link } from 'react-router-dom'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import '../styles/pages/ComingSoonPage.css'

function ComingSoonPage({ title, externalLink }) {
  return (
    <div className="coming-soon-page">
      <main className="coming-soon">
        <p className="coming-soon__eyebrow">Portfolio in progress</p>
        <h1>{title}</h1>
        <p className="coming-soon__message">
          This page is being built with the same care as the work it will hold.
        </p>
        <div className="coming-soon__actions">
          {externalLink && (
            <a href={externalLink.href} target="_blank" rel="noreferrer">
              {externalLink.label} <span aria-hidden="true">↗</span>
            </a>
          )}
          <Link to="/">Return home</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default ComingSoonPage
