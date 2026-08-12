import { Link } from 'react-router-dom'
import '../styles/pages/ComingSoonPage.css'

function ComingSoonPage({ title }) {
  return (
    <main className="coming-soon">
      <p className="coming-soon__eyebrow">Portfolio in progress</p>
      <h1>{title}</h1>
      <p className="coming-soon__message">
        This page is being built with the same care as the work it will hold.
      </p>
      <Link to="/">Return home</Link>
    </main>
  )
}

export default ComingSoonPage
