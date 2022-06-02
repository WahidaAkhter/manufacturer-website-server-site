import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchaseModal?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setItems(data));
        }
    }, [user])
  return (
    <div>
       <h2>MyItem:{items.length}</h2> 

       <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Purchase</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.customerName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.purchase}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default MyItem