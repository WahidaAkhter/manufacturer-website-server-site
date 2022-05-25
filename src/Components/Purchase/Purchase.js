import React, { useState } from 'react'
import Footer from '../Home/Footer'
import PurchaseAvailable from './PurchaseAvailable'
import PurchaseBanner from './PurchaseBanner'

const Purchase = () => {
  const [date,setDate]=useState(new Date());
  return (
    <div>
      <PurchaseBanner date={date} setDate={setDate}/>
      <PurchaseAvailable date={date}/>
        <Footer/>
    </div>
  )
}

export default Purchase