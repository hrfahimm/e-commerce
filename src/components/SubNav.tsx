'use client'

import Link from 'next/link'
import React from 'react'



const SubNav = () => {

    return (
        <div className=' bg-gray-200 '>

            <div className="py-2 px-10">
                <div className=" flex justify-between items-center text-[10px] text-gray-700 ">

                    <div className=" flex gap-10 ">

                        <select aria-label="Filter options" className=' bg-gray-200 text-orange-500' name='language' id='language' >
                            <option value="English">Enlish</option>
                            <option value="Bangla">Bangla</option>
                        </select>

                        <p>Contact</p>
                        <p>Help Line +88073554774</p>
                    </div>

                    <div className="flex gap-10">
                        <p>Become a Seller</p>
                        <p>Order Track</p>

                        <Link href="/signup" className=" text-orange-500">
                            Sign Up / Login
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SubNav