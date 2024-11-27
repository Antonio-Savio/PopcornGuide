"use client"

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

export function Pagination(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10) //10 = decimal number system

    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        router.push(`?page=${page}`)
    }, [page, router])

    function handleLeftClick(){
        if (currentPage > 1){
            setPage(currentPage - 1)
        }
    }

    function handleRightClick(){
        setPage(currentPage + 1)
    }

    return(
        <div className="mb-4 flex justify-center gap-2 text-red-800">
            <button 
                onClick={handleLeftClick}
                className={`${currentPage === 1 ? 'opacity-40 cursor-default' : 'opacity-100'}`}    
            >
                <IoIosArrowBack size={20} />
            </button>
            <span className="font-bold">{currentPage}</span>
            <button
                onClick={handleRightClick}
            >
                <IoIosArrowForward size={20} />
            </button>
        </div>
    )
}