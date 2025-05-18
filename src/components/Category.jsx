import React, { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle';


const Category = () => {

  const [category, setCategory] = useState([])
  const [slide, setSlide] = useState(0)
  const itemRef = useRef()



  const fetchData = async () => {
    const fetchedData = await fetch('data/category.json')
    const categoryData = await fetchedData.json()
    setCategory(categoryData)

  }

  useEffect(() => {
    fetchData()
  }, [])


  function leftHandler() {
    if (slide == 0) return
    setSlide(slide - 2)

  }

  function rightHandler() {
    if (slide == 14) return
    setSlide(slide + 2)
    console.log('right');
  } 

  return (
    <div className='max-w-[1200px] mx-auto  '>
      <SectionTitle text="What's On Your Mind" onRightClick={rightHandler} onLeftClick={leftHandler} />
      <div className='flex overflow-hidden'  >
        {category.map((item, idx) => {
          return (
            <div ref={itemRef} key={idx} className='w-[200px] shrink-0 duration-500' style={{
              transform: `translateX(-${slide * 100}%)`
            }}>
              <img src={`/images/${item.image}`}
                alt={item.name || "category"} />
            </div>
          )
        })}
      </div>
      <hr className='text-[#E2E2E7] my-6 border-[1px]' />
    </div>

  )
}

export default Category
