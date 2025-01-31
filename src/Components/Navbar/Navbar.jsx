import React from 'react'
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Navbar = () => {
    return (
        <div className='container mx-auto flex align-middle  justify-between py-5'>
            <h2 className='font-bold text-2xl  py-2'>Exclusive</h2>

            <ul className='flex gap-10 align-middle py-2'>
                <li className='hover:underline '>Home</li>
                <li className='hover:underline '>Contact</li>
                <li className='hover:underline '>About</li>
                <li className='hover:underline '>Sign Up</li>

            </ul>
            <div className="flex text-center gap-4">
                <div className="flex px-1 rounded-sm w-[230px] py-2 justify-between bg-[#F5F5F5] ">
                    <input className='outline-none w-[200px]  ' type="search" placeholder='What are you looking for?' />
                    <p className=' text-[22px] '><FiSearch /></p>

                </div>
                <div className="flex py-2 gap-5 text-[22px] ">
                    <p><AiOutlineHeart /></p>
                    <p><AiOutlineShoppingCart /></p>

                </div>

            </div>
        </div>
    )
}

export default Navbar
