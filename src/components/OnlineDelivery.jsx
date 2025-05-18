import React, { useEffect, useState } from 'react'
import Card from './Card'

const OnlineDelivery = () => {
    const [topRestData, setTopRestData] = useState([])

    const fetchData = async () => {
        const fetchedData = await fetch('data/restaurantChains.json')
        const categoryData = await fetchedData.json()
        setTopRestData(categoryData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='max-w-[1200px] mx-auto  '>
            <div className='my-3 flex items-center justify-between'>
                <div className="text-[25px] font-bold">Restaurants With Online Food Delivery In Jodhpur</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {topRestData.map((card, idx)=> {
                    return <Card key={idx} {...card}/>
                })}
            </div>
        </div>
    )
}

export default OnlineDelivery
