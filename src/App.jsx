import { Route, Routes } from 'react-router-dom'
import ComingSoonPage from './pages/ComingSoonPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ProductUXPage from './pages/ProductUXPage.jsx'
import AbsaNextGenPage from './pages/case-studies/AbsaNextGenPage.jsx'
import SubscriptionTrackerPage from './pages/case-studies/SubscriptionTrackerPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/about"
        element={<ComingSoonPage title="About" />}
      />
      <Route
        path="/contact"
        element={<ComingSoonPage title="Contact" />}
      />
      <Route path="/work/product-ux" element={<ProductUXPage />} />
      <Route
        path="/work/product-ux/absa-nextgen"
        element={<AbsaNextGenPage />}
      />
      <Route
        path="/work/product-ux/subscription-tracker"
        element={<SubscriptionTrackerPage />}
      />
      <Route
        path="/work/product-ux/thawing-memory"
        element={<ComingSoonPage title="Thawing Memory" />}
      />
      <Route
        path="/work/game-design"
        element={
          <ComingSoonPage
            title="Game Design & Development"
            externalLink={{
              href: 'https://wandering-wind.itch.io/',
              label: 'View games on itch.io',
            }}
          />
        }
      />
      <Route path="*" element={<ComingSoonPage title="Page not found" />} />
    </Routes>
  )
}

export default App
