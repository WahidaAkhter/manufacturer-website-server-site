import React from 'react'

const Service = ({service,setPurchase}) => {
    const{name,slots,img,description,order,available,price}=service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slots available</span>
                    }
                </p>
                <p>description:{description}</p>
                <p>order:{order}</p>
                <p>available:{available}</p>
                <p>price:{price}</p>
            <div className="card-actions">
                <label 
                    htmlFor="purchase-modal" 
                    onClick={()=>setPurchase(service)}
                    className="btn modal-button btn btn-primary">Purchase Now
                    
                </label>

            </div>
        </div>
  </div>
  )
}

export default Service;