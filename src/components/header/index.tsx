import Link from "next/link"
import { MdMovieFilter } from "react-icons/md"

export function Header(){
    return(
        <header className="w-full h-28 bg-red-800 text-white px-2">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-full sm:justify-between">
                <nav className="flex justify-center items-center gap-4">
                    <Link href="/?page=1">
                        <h1 className="font-bold text-lg hover:scale-95 transition">
                            &#x1F37F;Popcorn<span className="text-red-500">Guide</span>
                        </h1>
                    </Link>

                    <Link href="/favorites" className="hover:brightness-75 transition">
                        Favorites
                    </Link>
                    <Link href="/profile" className="hover:brightness-75 transition">
                        Profile
                    </Link>
                </nav>

                <div className="hidden sm:flex">
                    <Link href="/profile">
                        <MdMovieFilter size={34} className="hover:brightness-75 transition"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}