"use client"
import { signOut } from "next-auth/react"
import { GiExitDoor } from "react-icons/gi";


export function LogoutButton(){
    return(
        <button
            className="bg-red-800 hover:bg-red-700 active:bg-red-600 transition text-white rounded-lg p-2 flex items-center gap-2 shadow-lg"
            onClick={() => signOut()}
        >
            <GiExitDoor size={20}/>
            Logout
        </button>
    )
}