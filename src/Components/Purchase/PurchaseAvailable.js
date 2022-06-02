import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import Service from './Service';

    const PurchaseAvailable = ( {date}) => {

    const [services,setServices]=useState([]);
    const [purchase,setPurchase]=useState(null);
    const formattedDate = format(date, 'PP');
        useEffect(()=>{
            fetch(`http://localhost:5000/available?date=${formattedDate} `)
            .then(res=>res.json())
            .then(data=>setServices(data))
        },[formattedDate])

  return (
    <div >
        <h4 className='text-center text-xl font-bold text-primary my-10'>
        Products available on  {format(date, 'PP')}
        </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                setPurchase={setPurchase}
                ></Service>)
            }
        </div>
        {purchase && <Modal 
        date={date} 
        purchase={purchase}
        setPurchase={setPurchase}
        ></Modal>}
    </div>
  )
}

export default PurchaseAvailable