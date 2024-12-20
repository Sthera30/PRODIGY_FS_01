import React from 'react'
import HeroPage from './HeroPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import NewFoodPage from '../layouts/NewFoodPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'

function HomePage() {
  return (
    <div>

      <HeroPage />
      <AboutPage />
      <NewFoodPage />
      <ContactPage />

    </div>
  )
}

export default HomePage
