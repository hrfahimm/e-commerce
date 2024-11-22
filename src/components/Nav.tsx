import Image from 'next/image'
import React from 'react'
import search from '../../public/search-icon-png-9985.png'

import logo from '../../public/logo.png'
import { Cloud, Heart, ShoppingCart, User } from 'lucide-react'

const Nav = () => {
    return (
        <div className='border-gray-200 '>
            <div className="container sm:flex justify-between items-center">
                <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-black ">
                    <Image

                        src={logo}
                        alt="Description"
                        width={100} // Specify width
                        height={100} // Specify height
                        className=" "
                    />
                </div>
                <div className=" flex items-center w-full sm:w-[300px] md:w-[70%] relative ">

                    <input className='border-gray-200 border p-2 px-4 rounded-lg w-full ' type="text" placeholder='Search Products ' />
                    <Image

                        src={search}
                        alt="Description"
                        width={20} // Specify width
                        height={20} // Specify height
                        className="flex justify-center absolute top-0 right-0"
                    />
                </div>

                <div className="hidden lg:flex gap-4 text-gray-500 text-[300px">

                    <User />
                    <Heart />
                    <ShoppingCart />
                    <p>
                        <Cloud />Cloud Storage
                    </p>



                </div>

            </div>

        </div>
    )
}

export default Nav