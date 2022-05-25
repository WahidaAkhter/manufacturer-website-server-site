import React from 'react'
import Service from './Service'

const Services = () => {

    const services=[
        {
            id:1,
            name:'flouryd',
            description:'this is the place to your favourite things',
            img:"https://cdn-icons-png.flaticon.com/512/1257/1257529.png?w=740"
        },
        {
            id:2,
            name:'gfds',
            description:'going creative ,this is your place',
            img:"https://cdn-icons-png.flaticon.com/512/1257/1257311.png?w=740&t=st=1653454591~exp=1653455191~hmac=3a8c26f30d5e85f2f3a9d018fdd63ede1e2d2be97724e140fb14efe2434c3ebf"
        },
        {
            id:3,
            name:'jhjh',
            description:'we are always available for your creativity',
            img:"https://cdn-icons-png.flaticon.com/512/1067/1067000.png?w=740"
        }
    ]

  return (
    <div className='my-28'>
        
       <div className='text-center '>
       <h2 className='text-4xl font-bold'>Services we provide:</h2>
       </div>

       <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8'>
        {
            services.map(service=><Service
            key={service.id}
            service={service}
            ></Service>)
        }
    </div>

    </div>
  )
}

export default Services