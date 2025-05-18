import React from 'react'
import { MdStars } from "react-icons/md";
const Card = (props) => {
    return (
        <div className='w-[273px] mb-10 shrink-0 overflow-hidden grow '>
            <div className='group h-[182px] cursor-pointer rounded-xl [15px overflow-hidden border-1 relative border-black]'>
                <img className='group-hover:scale-110 duration-150  object-cover w-full h-full' src={`images/${props.image}`} alt="" />
                <div className="image-overlay absolute w-full flex items-end tracking-tighter text-white font-bold p-2 text-[25px] h-full top-0"> {props.offer}</div>
            </div>
            <div className='mt-3 text-xl font-bold'>
                {props.title}
            </div>
            <div className="flex items-center gap-2">
                <MdStars className='text-green-500' />
                <span>
                    {props.rating} ●
                </span>
                <span>
                {props.minTime}-{props.maxTime} mins
                </span>
            </div>
            <div>
                {props.name}
                <br />
                {props.place}
            </div>
        </div>
    )
}

export default Card
