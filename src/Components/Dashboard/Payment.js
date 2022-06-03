import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L6SEHF4qdXzE71Fe7yMSTGulnHNnNGGR1tWxMdpnL9Y2Vugrzqj3EpVZKHRxMEOcbOTuiQHUGLz8onoBC52tvNw00oagBfr93');
const Payment = () => {
    const { id } = useParams();
    const url = `https://murmuring-spire-36449.herokuapp.com/purchaseModal/${id}`;
    
    const { data: item, isLoading } = useQuery(['purchaseModal', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

  return (
    <div>
    <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
            <p className="text-success font-bold">Hello, {item.customerName}</p>
            <h2 class="card-title">Please Pay for {item.purchase}</h2>
            <p>Please pay: ${item.price}</p>
        </div>
    </div>
    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
            <Elements stripe={stripePromise}>
                <CheckoutForm item={item} />
            </Elements>
        </div>
    </div>
</div>
  )
}

export default Payment