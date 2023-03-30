import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import world from '../../assets/world.png'
import img1 from '../../assets/img1.png'

export const Community = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='xs:bg-[#F8F9FC] xs:h-[400px] xs:text-black xs:text-4xl' id='testimonial'>
      
      <div className="text xs:pt-4">
        <h1 className='xs:font-bold xs:capitalize xs:text-center '>what our clients are saying</h1>

        <p className='xs:text-xs xs:text-center lg:w-[500px] lg:mx-auto xs:pt-4 xs:px-2 xs:text-[#A1A1A1] '>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
      </div>

  
      {/* testimonail slider */}
        <div className="container xs:pt-6 xs:text-[#A1A1A1]">
          <Slider {...settings}>
            <div className='xs:text-xs xs:bg-white xs:shadow xs:px-3 xs:py-3 xs:pr-4  '>
              <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>

              <div className='xs:flex xs:space-x-2'>
                <img src={img1} alt="" />
                <div >
                  <p className='xs:text-black xs:font-bold'>Bella Moon</p>
                  <p>Product Manager</p>
                </div>
              </div>
              
            </div>

            <div className='xs:text-xs xs:bg-white xs:shadow xs:px-3 xs:py-3'>
              <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>

              <div className='xs:flex xs:space-x-2 '>
                <img src={img1} alt="" />
                <div >
                  <p className='xs:text-black xs:font-bold'>Jeffery Williams</p>
                  <p>Software Engineer</p>
                </div>
              </div>
              
            </div>

            <div className='xs:text-xs xs:bg-white xs:shadow xs:px-3 xs:py-3'>
              <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>

              <div className='xs:flex xs:space-x-2 '>
                <img src={img1} alt="" />
                <div >
                  <p className='xs:text-black xs:font-bold'>Claretta Mason</p>
                  <p>Designer</p>
                </div>
              </div>
              
            </div>

            <div className='xs:text-xs xs:bg-white xs:shadow xs:px-3 xs:py-3'>
              <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>

              <div className='xs:flex xs:space-x-2 '>
                <img src={img1} alt="" />
                <div >
                  <p className='xs:text-black xs:font-bold'>Samuel Jacobs</p>
                  <p>Web Developer</p>
                </div>
              </div>
              
            </div>

           
            
          </Slider>
        </div>

    </div>
    
      <div className="connect xs:bg-[#004DB3] xs:h-[450px] text-white xs:text-center xs:pt-4 xs:space-y-1" id='community' >
        <p className="text-1 xs:uppercase xs:text-sm">
          join our community
        </p>

        <h1 className='xs:text-3xl xs:font-bold xs:px-2'>Are you ready to connect with the future tealent of the tech world</h1>

        <p className="text2 xs:capitalize xs:text-xs xs:font-semibold">
          meet up with other techstars and grow together
        </p>

        <img className='xs:h-[45%] lg:h-[60%] xs:mx-auto xs:pb-4 ' src={world} alt="" />


        <button className='rounded text-xs text-[#004DB3] bg-white xs:h-8 xs:w-32 font-bold xs:text-center'>Join Our Community</button>
      </div>
    </>
  )
}
