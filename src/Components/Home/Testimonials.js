import React from 'react'
import Review from './Review'

const Testimonials = () => {

    const reviews=[
        {
            id:1,
            name:'harry',
            review:'hello',
            location:'NewYork',
            img:'https://cdn-icons-png.flaticon.com/512/1164/1164000.png?w=740'
        },
        {
            id:2,
            name:'harry',
            review:'heelo',
            location:'NewYork',
            img:'https://cdn-icons-png.flaticon.com/512/1164/1164000.png?w=740'
        },
        {
            id:3,
            name:'harry',
            review:'henlo',
            location:'NewYork',
            img:'https://cdn-icons-png.flaticon.com/512/1164/1164000.png?w=740'
        }
    ]

  return (
    <section>
        <div>
            <div>
                <h4 className='text-xl text-primary font-bold text-center my-10'>Testimonials</h4>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews.map(review=><Review
                key={review.id}
                review={review}
                ></Review>)
            }
        </div>
    </section>
  )
}

export default Testimonials