import React from 'react'
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Modal = ({date,purchase,setPurchase}) => {
    const{name,slots}=purchase;
    const formattedDate=format(date,'PP');
    const [user, loading, error] = useAuthState(auth);

   const handlePurchase=event=>{
     event.preventdefault();
     console.log(name);
     const purchase = {
                        purchase: name,
                        date:formattedDate,
                        customer:user.email,
                        customerName:user.displayName,
                        phone:event.target.phone.value
                      }

                      fetch('http://localhost:5000/purchase',{
                        method:'POST',
                        headers:{
                          'content-type':'application/json'
                        },
                        body:JSON.stringify(purchase)
                      })
                      .then(res => res.json())
                      .then(data =>{
                        setPurchase(null);
                      })
   
   }

  return (
    <div><input type="checkbox" id="purchase-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
            <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">Purchase {name}</h3>
              <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center' >
                    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='name' disabled value={user?.displayName} placeholder="your name" className="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email'  disabled value={user?.email} placeholder="your email address" className="input input-bordered w-full max-w-xs" />
                    <input type="number" name='phone' placeholder="your phone number" className="input input-bordered w-full max-w-xs" />
                    <input type="text" name='order' placeholder="order amount" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" placeholder="submit" className="btn btn-primary w-full max-w-xs" />
              </form>
             <div className="modal-action">
                <label htmlFor="purchase-modal" className="btn">Done!</label>
             </div>
      </div>
    </div>
    </div>
  )
}

export default Modal