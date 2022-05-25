import React from 'react'
import Banner from './Banner'
import Card from './Card'
import Contact from './Contact'
import Footer from './Footer'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Card/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home