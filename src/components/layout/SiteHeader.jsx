import { Link } from 'react-router-dom'
import '../../styles/components/SiteChrome.css'

function SiteHeader({ workHref = '/work/product-ux', workIsCurrent = false }) {
  const workLink = workHref.startsWith('#') ? (
    <a href={workHref}>Work</a>
  ) : (
    <Link to={workHref} aria-current={workIsCurrent ? 'page' : undefined}>
      Work
    </Link>
  )

  return (
    <header className="site-header">
      <Link className="site-header__wordmark" to="/">
        Amina Moosa
      </Link>

      <nav aria-label="Primary navigation">
        {workLink}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default SiteHeader
