import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch,  } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { FaUser , FaShoppingCart, FaHandsHelping } from "react-icons/fa";


import "../App.css"

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const showSideMenu = () => {
        setToggle(true)
    }
    const hideSideMenu = () => {
        setToggle(false)
    }

    const links = [
        {
            icon: <IoMdSearch />,
            name: 'Search'
        },
        {
            icon: <BiSolidOffer />,
            name: 'Offer',
            sup: 'new'
        },
        {
            icon: <FaHandsHelping />,
            name: 'Help'
        },
        {
            icon: <FaUser />,
            name: 'Sign In'
        },
        {
            icon: <FaShoppingCart />,
            name: 'Cart',
        },
    ]
    return (
        <>

            <div onClick={hideSideMenu} className='black-overlay w-full h-full fixed duration-500' style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
            }}>
                <div onClick={(e) => e.stopPropagation()} className=' w-[500px] h-full bg-white absolute duration-[500ms]' style={{
                    left: toggle ? "0%" : '-100%'
                }}>
                </div>
            </div>
            <header className="py-3 shadow-xl text-[#686b78] bg-white sticky top-0 z-[999]" >
                <div className="max-w-[1200px] flex justify-between items-center mx-auto ">
                    <div className='flex items-center'>
                        <div className='w-[100px]'>
                            <img src="images\logo.png" alt="haha" />
                        </div>
                        <div className="">
                            <span className="font-bold border-b-[3px] ">Ratanada </span>
                            Jodhpur, Rajasthan, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline cursor-pointer text-[#fc8019] font-bold' />
                        </div>
                    </div>
                    <nav className='flex items-center gap-13 list-none font-semibold text-[18px]]'>
                        {
                            links.map(((link, idx) => {
                                return <li key={idx} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                                    {link.icon}
                                    {link.name}
                                    {link.sup && <sup>{link.sup}</sup>}
                                </li>
                            }))
                        }

                    </nav>
                </div>
            </header >
        </>

    )
}

export default Header
