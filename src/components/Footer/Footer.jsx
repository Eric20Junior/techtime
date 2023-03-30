import React from 'react'
import logo from '../../assets/techtime.png'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsDiscord } from 'react-icons/bs'

export const Footer = () => {
  return (
    // main footer
    <div className='main-footer xs:block lg:flex xs:justify-evenly xs:bg-[#000F24] xs:text-white xs:h-[700px] lg:h-[400px] xs:pt-16 xs:pl-4'>
      <div className="socials">
        <img className='xs:w-16 xs:pb-3' src={logo} alt="" />
        <p className='xs:w-[240px] xs:text-xs'>Reach out to us on any of our social media networks</p>
        <div className="social-icons xs:flex xs:space-x-10 xs:text-[#2A2A2B] xs:pt-4">
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsInstagram />
        <BsDiscord /> 
        </div>
      </div>

      <div className="links xs:space-y-3 xs:pt-8">
        <p className='xs:font-bold'>Useful Links</p>
        <div className='xs:text-sm xs:space-y-3'>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Courses</p>
          <p>Testimonials</p>
          <p>Our Community</p>
        </div>
      </div>

      <div className='xs:space-y-3 xs:pt-8'>
        <p className='xs:font-bold'>Community</p>
        <div className='xs:text-sm xs:space-y-3'>
        <p>Help Centers</p>
        <p>Partners</p>
        <p>Suggestion</p>
        <p>Blog</p>
        <p>Newsletter</p>
        </div>
      </div>

      <div className="newsletter xs:pt-8">
        <p className='xs:font-bold'>Subscribe Us</p>

        <div>
          <form className='xs:rounded' action="">
          <input className='xs:h-8 xs:w-44 xs:border-[#004DB3] xs:bg-[#2A2A2B] xs:text-xs xs:mt-4' type="text" placeholder='Nh123@gmail.com' />

          <button className='xs:h-8 xs:w-20 xs:bg-[#054FB3] xs:text-[8px]' type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
