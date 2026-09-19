import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import PageTransition from './PageTransition'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">Hoppa till innehållet</a>
      <ScrollToTop />
      <Header />
      <PageTransition>
        <main id="main-content">
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}
