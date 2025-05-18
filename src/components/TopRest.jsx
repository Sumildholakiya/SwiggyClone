import React, { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import Card from './Card'


const TopRest = () => {

    // States...........
    const [topRestData, setTopRestData] = useState([])

    const fetchData = async () => {
        const fetchedData = await fetch('data/restaurantChains.json')
        const categoryData = await fetchedData.json()
        setTopRestData(categoryData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Handler.........
    function rightHandler() {
        console.log("top right");

    }
    function leftHandler() {
        console.log("top left");

    }



    return (
        <div className='max-w-[1200px] mx-auto  '>
            <SectionTitle text={"Top Resturent Chains In Jodhpur"} onRightClick={rightHandler} onLeftClick={leftHandler} />
            <div className="flex gap-5 overflow-hidden">
                {topRestData.map((item, idx) => <Card {...item} key={idx} />)}

            </div>
            <hr className='text-[#E2E2E7] my-[50px] border-[1px]' />
        </div>
    )
}

export default TopRest
