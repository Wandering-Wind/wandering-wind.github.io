import '../../styles/components/SiteChrome.css'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Set in Fraunces &amp; IBM Plex Sans. Built in React.</p>
      <nav aria-label="Social links">
        <a
          href="https://github.com/Wandering-Wind"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <span aria-hidden="true">&middot;</span>
        <a
          href="https://www.linkedin.com/in/amina-moosa-567a643b3/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <span aria-hidden="true">&middot;</span>
        <a
          href="https://wandering-wind.itch.io/"
          target="_blank"
          rel="noreferrer"
        >
          itch.io
        </a>
      </nav>
    </footer>
  )
}

export default SiteFooter
