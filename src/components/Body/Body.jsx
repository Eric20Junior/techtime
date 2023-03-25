import React from 'react'
import '../Body/Body.css'

export const Body = () => {
  return (
    <>
      <div className="main-body">
        <div className="body-text text-center px-3 lg:text-left lg:pl-20">
            <h1 className='font-bold text-black text-2xl pt-7 lg:w-[270px]'>high quality video, audio & live classes</h1>
            <p className='text-xs pt-3 text-[#A2A2A2] leading-relaxed lg:w-[400px]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>

            <button className='button1 rounded text-xs text-white mt-4 bg-[#004DB3] h-8 w-24 font-bold'>View Courses</button>
        </div>
      </div>
    </>
  )
}
