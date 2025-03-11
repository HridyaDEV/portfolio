import Aos from 'aos'
import React, { useEffect } from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

function Brief() {
  useEffect(() => {
            Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
          }, []);


  return (
    <section id='brief' className="bg-gradient-to-r from-purple-500 to-violet-600 text-white text-center py-40 mt-16 flex flex-col md:flex-row justify-space-between items-center transition-all duration-500 gap-10">
    <div className="max-w-md text-center md:text-left ml-80">
      <h2 className="text-4xl md:text-5xl font-bold animate-pulse" >Hi, I'm Hridya!</h2>
      <p className="mt-4 text-lg md:text-xl">
      A passionate Computer Science graduate and fresher, eager to explore new opportunities and contribute to impactful projects.
      </p>
      <button type='button'
      className='flex justify-center items-center'>
      <a
        href="#about"
        className="mt-6 px-6 py-3 bg-white text-purple-600 font-medium text-lg rounded shadow-md hover:bg-gray-200 transition inline-flex gap-3 "
      > 
        About Me
        <MdKeyboardDoubleArrowDown className='text-2xl animate-bounce mt-1' />
      </a>
     
      </button>
    </div>
   
  </section>
  )
}

export default Brief
