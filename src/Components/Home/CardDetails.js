import React from 'react'

const CardDetails = ({img,cardTittle,cardDescription}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl bg-primary">

    <figure className='pl-5'>
        <img src={img} alt="Album"/>
    </figure>

    <div className="card-body">
      <h2 className="card-title">{cardTittle}!</h2>
      <p>{cardDescription}</p>
     
    </div>
  </div>
  )
}

export default CardDetails