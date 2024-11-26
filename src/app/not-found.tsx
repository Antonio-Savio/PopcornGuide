import Link from "next/link"

export default function NotFound(){
    return(
        <main className="loading-height flex items-center justify-center flex-col gap-4">
            <h1 className="font-bold text-xl">This page does not exist</h1>

            <Link href="/" className="bg-red-800 hover:bg-red-700 active:bg-red-600 transition text-white rounded-lg p-2 shadow-lg">
                Go to Home 🍿
            </Link>
        </main>
    )
}