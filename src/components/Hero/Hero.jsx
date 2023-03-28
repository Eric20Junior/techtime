import React from 'react'
import '../Hero/Hero.css'
import hero from '../../assets/hero.png'
import partners from '../../assets/partners.png'

export const Hero = () => {
  return (

    // hero section
    <>
      <div className=' main-hero lg:flex px-6 lg:px-28'>
        <div className="container hero-text">
            <h1 className='font-bold text-white text-center lg:text-left text-3xl lg:text-6xl lg:pt-14 xl:w-3/4 lg:leading-none'>Grow your skills to advance your career path </h1>
              <p className='font-medium pt-6 text-center w-full lg:w-3/4 lg:text-left capitalize'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                <div className="container hero-button flex space-x-4 sm:justify-center lg:justify-start mt-14">
                  <button className='button-left h-10 lg:h-12'>Get started now</button>
              
              <button className='button-right'>Enroll Now</button>
          </div>
        </div>

          <div className="hero-image">
            <img className='mx-auto mt-2 xs:h-[226px] xm:h-[262px] sm:h-[290px] sm:mt-4 md:h-72 md:mt-4 lg:w-[600px] lg:h-[400px] lg:mt-[90px]' src={hero} alt="" />
          </div>
    </div>

      <div className="hero-partners flex justify-center space-x-4 py-5 h-[70px] lg:space-x-10 lg:py-5 lg:h-[70px]">
      <img className='w-[350px] lg:w-[670px] h-[20px] mt-1 lg:h-[22px]' src={partners} alt="" />

      </div> 
      
    </>
  )
}
