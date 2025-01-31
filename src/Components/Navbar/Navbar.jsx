import React from 'react'
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='container mx-auto flex align-middle  justify-between py-5 items-center'>
            <h2 className='font-bold text-2xl  py-2'>Exclusive</h2>

            <ul className='flex gap-10 align-middle py-2'>
                <li className='hover:border-b '><Link to='/'>Home</Link> </li>
                <li className='hover:border-b '>Contact</li>
                <li className='hover:border-b '><Link to='/about'>About</Link> </li>
                <li className='hover:border-b '>Sign Up</li>

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
