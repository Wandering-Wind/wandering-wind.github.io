import { useEffect, useState } from 'react'

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 600)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const returnToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      className={`back-to-top${isVisible ? ' back-to-top--visible' : ''}`}
      type="button"
      onClick={returnToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      aria-label="Back to top"
    >
      <span>Back to top</span>
      <span aria-hidden="true">↑</span>
    </button>
  )
}

export default BackToTopButton
