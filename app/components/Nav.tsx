"use client"

import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function Nav({user}: Session) {
    return (
        <nav className="flex justify-between items-center py-8">
            <Link href={'/'}>
                <h1 className="text-xl font-light text-teal-700">your<span className="font-bold">Store</span></h1>
            </Link>
            <ul className="flex items-center gap-12">
                {/* <li>Products</li> */}
                {!user && (
                    <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
                        <button onClick={()=>{signIn()}}>Sign in</button>
                    </li>
                )}
                {user && (
                    <>
                        {/* <li>Dashboard</li> */}
                        <li>
                            <Image src={user?.image as string} alt={user?.name as string} width={48} height={48} className="rounded-full" />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}