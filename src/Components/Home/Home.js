import React, { useState } from 'react'
import PurchaseAvailable from '../Purchase/PurchaseAvailable'
import Banner from './Banner'
import Card from './Card'
import Contact from './Contact'
import Footer from './Footer'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  const [date,setDate]=useState(new Date());
  return (
    <div>
        <Banner/>
        <Card/>
        <PurchaseAvailable date={date}/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home