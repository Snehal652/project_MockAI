"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        console.log(path)
    }, [path]);

    if (!isSignedIn) {
        return null; // Don't render anything if the user is not signed in
    }

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <div className='flex items-center'>
                <span role="img" aria-label="squid" className='text-4xl'>
                    🦑
                </span>
                <div className='flex-1 text-center'>
                    <h1 className='text-2xl md:text-4xl font-extrabold text-b tracking-widest'>
                        MockAI
                    </h1>
                </div>
            </div>
            <div className='flex items-center '>
                {user && (
                    <Link href={"/dashboard"}>
                        <li className={`list-none hover:text-primary mr-5 hover:font-bold transition-all cursor-pointer ml-6 ${path == '/dashboard' && 'text-primary font-bold'}`}>
                            Dashboard
                        </li>
                        {/* <li className={`list-none hover:text-primary hover:font-bold transition-all cursor-pointer ml-6 ${path == '/dashboard' && 'text-primary font-bold'}`}>
                            Hello,{user.firstName}
                        </li> */}
                    </Link>
                )}
                <span className='text-primary font-bold'> Hello, {user.firstName}!</span>
                <UserButton />
            </div>
        </div>
    )
}

export default Header



