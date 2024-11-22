import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const login = () => {
    return (
        <div className=" ">

            <div className="flex justify-center m-10">
                <h1 className='text-4xl' >Login</h1>
            </div>



            <div className="flex justify-center gap-10">
                <Link href="/" className="underline ">
                    <Button>
                        Home
                    </Button>
                </Link>
                <Link href="/signup" className="underline ">
                    <Button>
                        Signup
                    </Button>

                </Link>


            </div>

        </div >
    )
}

export default login