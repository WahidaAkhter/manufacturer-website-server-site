import { format } from 'date-fns'
import React from 'react'

const PurchaseAvailable = ( {date}) => {
  return (
    <div >
        <h4 className='text-center text-xl font-bold text-primary'>
        Products available on  {format(date, 'PP')}
        </h4>
    </div>
  )
}

export default PurchaseAvailable