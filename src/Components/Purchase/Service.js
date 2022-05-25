import React from 'react'

const Service = ({service,setPurchase}) => {
    const{name,slots,img,description,order,available,price}=service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
                <h2 class="card-title">{name}!</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No products available</span>
                    }
                </p>
                <p>description:{description}</p>
                <p>order:{order}</p>
                <p>available:{available}</p>
                <p>price:{price}</p>
            <div class="card-actions">
                <label 
                    for="purchase-modal" 
                    onClick={()=>setPurchase(service)}
                    class="btn modal-button btn btn-primary">Purchase Now
                    
                </label>

            </div>
        </div>
  </div>
  )
}

export default Service;