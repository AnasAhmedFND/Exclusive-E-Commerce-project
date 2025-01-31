import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='border-t container mx-auto flex justify-between'>
            <div className="w-[29%] border-r pt-5">
                <ul className='flex flex-col gap-4'>
                    <li>
                        <select name="Wom" id="Wom">
                            <option value="woman">Woman’s Fashion</option>
                            <option value="woman">Pent Items</option>
                            <option value="woman">Lushon Items</option>
                        </select>

                    </li>
                    <li>
                        <select name="mens" id="mens">
                            <option value="woman">Men’s Fashion</option>
                            <option value="woman">Pent Items</option>
                            <option value="woman">Shart Items</option>
                        </select>
                    </li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>

            <div className="w-[68%] mt-5 bg-black text-white pl-8 ">
                <div className="">
                    <div className="mt-8">
                    <p>iPhone 14 Series</p>
                    </div>

                    <h1 className='text-5xl font-bold mt-5'>Up to 10% <br />off voucher</h1>
                    <div className="flex gap-2 items-center mt-10">
                    <button className='border-b pb-1'>Shop Now</button>
                    <p><FaArrowRight /></p>
                    </div>
                

                </div>

            </div>
        </div>
    )
}

export default Hero
