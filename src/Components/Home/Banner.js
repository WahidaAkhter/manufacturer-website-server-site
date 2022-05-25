import React from 'react'

const Banner = () => {
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://img.freepik.com/free-photo/top-view-photographer-s-workplace-camera-photography-equipment-notepad-with-pen-white-table-background_358320-3037.jpg?w=360" className="max-w-sm rounded-lg shadow-2xl" />
      <div className='pr-12'>
        <h1 className="text-5xl font-bold ">Digital Experience with</h1>
        <h1 className="text-5xl font-bold "> Warbitor!</h1>
        <p className="py-6 ">Get the help you need,every step of the way.</p>
       <div className=''>
       <button className="btn btn-primary">Get Started</button>
       </div>
      </div>
    </div>
  </div>
  )
}

export default Banner