"use client"
import { signIn } from "next-auth/react"
import googleLogo from "../../../public/img.icons8.png"
import twitterLogo from "../../../public/twitter-logo.png"
import Image from "next/image"

export function LoginButton(){
    return(
        <div className="flex flex-col gap-8 justify-center items-center">
            <button
                onClick={ () => signIn("google", { callbackUrl: "/profile" }) }
                className="bg-red-800 hover:bg-red-700 active:bg-red-600 transition text-lg text-white rounded-lg p-4 flex items-center gap-2 shadow-lg"
            >
                <Image src={googleLogo} alt="Google logo" width={24} height={24} />
                Sign in with Google 
            </button>

            <button
                onClick={ () => signIn("twitter", { callbackUrl: "/profile" }) }
                className="bg-red-800 hover:bg-red-700 active:bg-red-600 transition text-lg text-white rounded-lg p-4 flex items-center gap-2 shadow-lg"
            >
                <Image src={twitterLogo} alt="Twitter logo" width={24} height={24} />
                Sign in with Twitter 
            </button>
        </div>
    )
}