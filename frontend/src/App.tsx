import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import AccessibilityPage from './pages/AccessibilityPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import ServicesPage from './pages/ServicesPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-oss" element={<AboutPage />} />
        <Route path="/tjanster" element={<ServicesPage />} />
        <Route path="/tjanster/:slug" element={<ServicePage />} />
        <Route path="/orter/:slug" element={<LocationPage />} />
        <Route path="/projekt" element={<ProjectsPage />} />
        <Route path="/projekt/:slug" element={<ProjectPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/integritet" element={<PrivacyPage />} />
        <Route path="/tillganglighet" element={<AccessibilityPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}


