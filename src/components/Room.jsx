import React from 'react';
import a1 from '../images/a1.jpeg';
import a4 from '../images/a4.jpeg';
import a3 from '../images/a3.jpeg';

const Room = () => {
  return (
    <div className='max-w-[1400px] h-[400px] bg-blue-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms and Poolside Oasis</h3>
        <p className='pt-4'>
          Experience the epitome of comfort in our meticulously designed rooms. From plush furnishings to thoughtful touches,
          each room offers a retreat of relaxation. Outside, our pool beckons. Nestled amidst lush surroundings, it's a serene escape.
          Whether you're swimming or lounging, our poolside oasis promises tranquility.
        </p>
      </div>

      <div className='grid grid-cols-3 col-span-2 gap-3'>
        <div className='relative overflow-hidden'>
          <img
            className='object-cover w-full h-full transition-transform duration-300 transform hover:scale-105'
            src={a1}
            alt='/'
          />
        </div>
        <div className='relative overflow-hidden'>
          <img
            className='object-cover w-full h-full transition-transform duration-300 transform hover:scale-105'
            src={a3}
            alt='/'
          />
        </div>
        <div className='relative overflow-hidden'>
          <img
            className='object-cover w-full h-full transition-transform duration-300 transform hover:scale-105'
            src={a4}
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default Room;
