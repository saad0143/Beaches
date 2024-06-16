import React from 'react';
import back from '../images/back.jpg'

const Hero = () => {
  return (
    <div className=''>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={back}
        alt='/'
      />
      <div className='bg-black/50 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4  text-white'>

          <h1 className='font-bold text-5xl md:text-5xl flex justify-center drop-shadow-2xl '>
            Private Beaches
          </h1>
          <p className='drop-shadow-2xl py-2 text-xl flex justify-center'>
          Unwind at Our Exclusive Escapes 
          </p>
          <button className='mt-2 mr-10'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;