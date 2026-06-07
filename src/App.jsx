import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import DockNav from './components/DockNav'
import Footer from './components/Footer'
import AhimsaLoader from './components/ui/AhimsaLoader'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import ProductDetail from './pages/ProductDetail'
import Sustainability from './pages/Sustainability'
import TechnicalDetails from './pages/TechnicalDetails'
import Suggestions from './pages/Suggestions'
import Downloads from './pages/Downloads'
import Contact from './pages/Contact'

function Splash() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-husk-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <AhimsaLoader size={180} />
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pt-16"
    >
      {children}
    </motion.main>
  )
}

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>{loading && <Splash key="splash" />}</AnimatePresence>
      <ScrollToTop />
      <DockNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/products/category/:slug" element={<PageTransition><ProductCategory /></PageTransition>} />
          <Route path="/products/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="/about-us" element={<PageTransition><Sustainability /></PageTransition>} />
          <Route path="/technical-details" element={<PageTransition><TechnicalDetails /></PageTransition>} />
          <Route path="/suggestions" element={<PageTransition><Suggestions /></PageTransition>} />
          <Route path="/downloads" element={<PageTransition><Downloads /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
