import { React, useState } from 'react'
import techtime from '../../assets/techtime.png'
import '../Navbar/Navbar.css'

export const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)
  
  return (

    // Navbar section
    <div>
      <div className="main-nav flex justify-between sm:flex sm:justify-between px-4 lg:px-16 py-8">
        <img className='h-full lg:w-18 sm:w-18' src={techtime} alt="" />

      
        <div className={`${navOpen ? 'block' : 'hidden'} nav-links lg:space-x-4 lg:flex text-sm text-gray-400 font-bold`}>
            <div href='#' className='text-white'>Home</div>
            <div href='#'>About Us</div>
            <div href='#'>Courses</div>
            <div href='#'>Testimonial</div>
            <div href='#'>Community</div>

            <button>Enroll Now</button>
        </div>

        <div class="block lg:hidden cursor-pointer" onClick={() => setNavOpen((prev) => !prev)}>
          <div class="space-y-2">
            <span class="block w-6 lg:w-8 h-0.5 bg-white pulse"></span>
            <span class="block w-6 lg:w-8 h-0.5 bg-white pulse"></span>
            <span class="block w-6 lg:w-8 h-0.5 bg-white pulse"></span>
          </div>
      </div>

      </div>
    </div>
  )
}
