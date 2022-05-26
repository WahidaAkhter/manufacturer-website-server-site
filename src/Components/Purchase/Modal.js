import React from 'react'
import { format } from 'date-fns'

const Modal = ({date,purchase,setPurchase}) => {
    const{name,slots}=purchase;

   const handlePurchase=event=>{
     event.preventdefault();
     console.log(name);
     setPurchase(null);
   }

  return (
    <div><input type="checkbox" id="purchase-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
            <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg">Purchase {name}</h3>
              <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center' >
                    <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='name' placeholder="your name" class="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' placeholder="your email address" class="input input-bordered w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="your phone number" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='order' placeholder="order amount" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" placeholder="submit" class="btn btn-primary w-full max-w-xs" />
              </form>
             <div class="modal-action">
                <label for="purchase-modal" class="btn">Done!</label>
             </div>
      </div>
    </div>
    </div>
  )
}

export default Modal