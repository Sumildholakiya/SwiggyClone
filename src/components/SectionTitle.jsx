import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const SectionTitle = ({ text, onRightClick, onLeftClick}) => {

    const roundedIcons = [
        {
            icon: <FaArrowLeft />,
            name: 'left'
        },
        {
            icon: <FaArrowRight />,
            name: 'right'
        },

    ]

    return (
        <div>   
            <div className='my-3 flex items-center justify-between'>
                <div className="text-[25px] font-bold">{text}</div>
                <div className="flex items-center">
                    {roundedIcons.map((icon, idx) => {
                        return (
                            <div
                                key={idx}
                                className="w-[30px] h-[30px] cursor-pointer bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center"
                                onClick={icon.name == 'left' ? onLeftClick : onRightClick}
                            > {icon.icon} </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SectionTitle
