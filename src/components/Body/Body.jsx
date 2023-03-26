import React from 'react'
import classes from '../../assets/classes.png'
import pc from '../../assets/pc.png'
import kid from '../../assets/kid.png'
import frame22 from '../../assets/frame22.png'
import enrolled2 from '../../assets/enrolled2.png'

export const Body = () => {
  return (
    <>
      <div className="main-body lg:flex">
        <div className="body-text text-center px-3 lg:text-left lg:pl-20 lg:pt-20">
            <h1 className='font-bold text-black text-5xl pt-7 lg:w-[520px]'>High quality video, audio & live classes</h1>
            <p className='text-sm pt-3 text-[#A2A2A2] leading-relaxed lg:w-[400px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

            <button className='button1 rounded text-xs text-white mt-4 bg-[#004DB3] h-8 w-24 font-bold'>View Courses</button>

            <img className='pt-6 xs:mx-auto' src={classes} alt="" />
        </div>

        <div className="body-image">
          {/* <img className='left-[100px]' src={enrolled2} alt="" /> */}
          <img className='pt-6 w-[85%] mx-auto  lg:mt-4' src={pc} alt="" />
        </div>
      </div>

      <div className='main_body-2 xs:block lg:flex'>
        <div className="body_text-2">
            <h1 className='font-bold text-black text-5xl xs:px-2 xs:text-center md:pl-[38px] pt-7 lg:pl-20 lg:pt-20 lg:w-[600px] lg:text-left'>This is why we are best from others</h1>
            <p className='xs:text-[12px] xs:text-center text-[#A2A2A2] xs:px-6 xs:pt-3 leading-relaxed lg:text-left lg:pl-20 lg:w-[500px] '>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

            <img className='xs:px-5 xs:mt-5 lg:text-left lg:ml-14 lg:w-[80%] ' src={kid} alt="" />
        </div>
        <div className="body_image-2">
        <img className='xs:mx-auto lg:pt-20 ' src={frame22} alt="" />
        </div>
      </div>
    </>
  )
}