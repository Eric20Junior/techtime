import { React, useState } from 'react'
import data from '../data'

export const Card = () => {

  const [items, setItems] = useState(data)


  const handleCategory = (e) => {
    let category = e.target.value;

    if (category === 'all') {
      setItems(data)
    }
  }

  const fliterItem = (categItem) => {
    const updatedItems = data.filter((currElem) => {
      return currElem.category === categItem
    })

    setItems(updatedItems)
  }

  return (
    <div>
      <div className="main_card" id='courses'>
        <div className="card-text xs:pt-16">
          <h1 className='xs:font-bold xs:capitalize xs:text-center xs:text-4xl '>browse our popular courses</h1>

          <p className='xs:font-medium xs:text-xs xs:text-center xs:px-2 xs:pt-8 lg:w-[400px] lg:mx-auto xs:text-[#A1A1A1]'>High-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        </div>

            {/* category section */}
        <div className="card_category xs:space-x-4 xs:font-bold xs:text-xs xs:text-center xs:pb-4 xs:pt-12  lg:space-x-20 ">
          <button className='category xs:bg-white xs:text-[#004DB3] xs:h-6 xs:w-20' value='all' onClick={handleCategory} >All Category</button>
          <button className='xs:visited:bg-white' onClick={() => fliterItem('Design')}>Design</button>
          <button onClick={() => fliterItem('Development')} >Development</button>
          <button onClick={() => fliterItem('Marketing')} >Marketing</button>
        </div>
        

        {/* card section */}
        <div className="card_courses xs:w-[100%] xs:grid xs:grid-rows-2 xs:grid-cols-2 lg:grid lg:grid-cols-3 xs:justify-items-center xs:px-4 xs:space-x-3 lg:px-[180px] lg:py-[50px] xs:gap-y-6">
        {items?.map((obj) => (
          <div key={obj.id} className="main_sub-card xs:bg-white shadow xs:rounded xs:h-[310px] lg:h-[350px]">
            <img className='xs:pt-4 xs:px-3 xs:rounded xs:w-[260px]' src={obj.img} alt="" />
            <div className='xs:flex xs:justify-between  xs:text-xs xs:px-3 xs:pt-3'>
              <span className='xs:bg-[#1E5DCE33] xs:rounded-full xs:text-[10px] xs:w-[80px] xs:h-5 xs:text-center xs:pt-0.5 xs:text-[#004DB3]'>{obj.category}</span>
              <div className="card_stats xs:text-[#A1A1A1] xs:text-xs">
                <span>{obj.stats.rating} </span>
                <span>({obj.stats.reviewCount}K)</span>
              </div>
            </div>
            <h1 className='xs:text-sm xs:w-[200px] xs:pt-3 xs:px-3 xs:font-bold '>{obj.title}</h1>

            <div className='xs:flex xs:justify-between  xs:text-xs xs:pt-4 xs:px-3 xs:text-[#A1A1A1]'>
              <span>{obj.course.duration}</span>
              <span>{obj.course.totalLessons} Lessons</span>
            </div>
            

                {/* instructor section */}
            <div className='xs:flex xs:justify-between xs:text-xs xs:pt-5 xs:px-1'>
              <div className='xs:flex xs:space-x-1'>
                <img src={obj.instructor.img} alt="" />
                <span className='xs:font-semibold'>{obj.instructor.name}</span>
              </div>
              <span className='xs:text-[#004DB3] xs:font-bold'>${obj.price}</span>
            </div>
          </div>

          ))}

            
        </div>
      <div className='xs:text-center xs:mb-8'>
      <button className='rounded text-xs xs:mx-auto text-white mt-4 bg-[#004DB3] h-8 w-32 font-bold xs:text-center xs:mb-4'>Explore All Courses</button>
      </div>
      </div>

    </div>
  )
}
