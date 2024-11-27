"use client"
import { FormEvent, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter } from "next/navigation" 

export function Input(){
    const [input, setInput] = useState("")
    const router = useRouter();

    function handleSearch(event: FormEvent){
        event.preventDefault();
        if (input === "") return

        router.push(`/movie/search/${input}`)
    }

    return(
        <form 
            onSubmit={handleSearch}
            className="w-full text-white bg-red-800 my-5 flex gap-2 rounded-md p-3"    
        >
            <input
                type="text" 
                placeholder="Find the best movies"
                className="grow bg-red-800 outline-none placeholder:text-slate-300"
                value={input}
                onChange={ (e) => setInput(e.target.value) }
            />

            <button type="submit" className="hover:brightness-75 transition">
                <FaSearch size={20} />
            </button>
        </form>
    )
}