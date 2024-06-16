import React from 'react'
import p1 from '../images/1.jpeg'
import p2 from '../images/2.jpeg'
import p3 from '../images/3.jpeg'
import p4 from '../images/4.jpeg'
import p5 from '../images/5.jpeg'


function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-6 px-4 grid lg:grid-cols-2 gap-4'>
    
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover h-full w-full p-2 hover:scale-105 transform transition-transform duration-300'
                src={p2}
                alt="/"
                />
            <img
                className='row-span-2 object-cover h-full w-full p-2 hover:scale-105 transform transition-transform duration-300'
                src={p1}
                alt="/"
                />
            <img
                className='row-span-2 object-cover h-full w-full p-2 hover:scale-105 transform transition-transform duration-300'
                src={p4}
                alt="/"
                />
            <img
                className='row-span-3 object-cover h-full w-full p-2 hover:scale-105 transform transition-transform duration-300'
                src={p5}
                alt="/"
                />
            <img
                className='row-span-2 object-cover h-full w-full p-2 hover:scale-105 transform transition-transform duration-300'
                src={p3}
                alt="/"
                />

        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>
                "Welcome to Your Private Beach Escape: Where Luxury Meets Seclusion"
            </p>
            <p className='pb-6'>
                "Discover pure paradise on your next journey with our private beaches. Unwind on secluded sands, indulge in personalized luxury, and create unforgettable memories in exclusive tranquility."
            </p>
        <div>
            <button className='border-black mr-4'>
                Learn More
            </button>
             <button className='bg-black text-white border-black hover:shadow-4xl'>Book Your Trip</button>
        </div>
      </div>


    </div>
  )
}

export default Plan
