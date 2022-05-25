import React from 'react'
import CardDetails from './CardDetails'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Card = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
        <CardDetails cardTittle="Opening Hours" cardDescription="9am-10pm" img={clock}/>
        <CardDetails cardTittle="Our Locations" cardDescription="67/A Jhigatola,road,Dhaka" img={marker}/>
        <CardDetails cardTittle="Contact Us" cardDescription="warbitor@gmail.com" img={phone}/>
    </div>
  )
}

export default Card