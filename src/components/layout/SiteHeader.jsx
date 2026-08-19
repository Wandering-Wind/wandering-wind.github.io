import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/SiteChrome.css'

const wordmark = 'Amina Moosa'

function SiteHeader({ workHref = '/work/product-ux', workIsCurrent = false }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [characterCount, setCharacterCount] = useState(() =>
    prefersReducedMotion ? wordmark.length : 0,
  )
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const updateMotionPreference = (event) => {
      setPrefersReducedMotion(event.matches)
      setCharacterCount(event.matches ? wordmark.length : 0)
      setIsDeleting(false)
    }

    motionPreference.addEventListener('change', updateMotionPreference)
    return () =>
      motionPreference.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    let delay = isDeleting ? 65 : 110

    if (!isDeleting && characterCount === wordmark.length) delay = 10000
    if (isDeleting && characterCount === 0) delay = 100

    const timer = window.setTimeout(() => {
      if (!isDeleting && characterCount === wordmark.length) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && characterCount === 0) {
        setIsDeleting(false)
        return
      }

      setCharacterCount((currentCount) =>
        currentCount + (isDeleting ? -1 : 1),
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [characterCount, isDeleting, prefersReducedMotion])

  const workLink = workHref.startsWith('#') ? (
    <a href={workHref}>Work</a>
  ) : (
    <Link to={workHref} aria-current={workIsCurrent ? 'page' : undefined}>
      Work
    </Link>
  )

  return (
    <header className="site-header">
      <Link className="site-header__wordmark" to="/" aria-label={wordmark}>
        <span className="site-header__wordmark-measure" aria-hidden="true">
          {wordmark}
        </span>
        <span className="site-header__wordmark-text" aria-hidden="true">
          {wordmark.slice(0, characterCount)}
          {!prefersReducedMotion && (
            <span className="site-header__wordmark-cursor" />
          )}
        </span>
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
