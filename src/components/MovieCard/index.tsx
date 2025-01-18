import Image from "next/image";
import Link from "next/link";
import { Favorite } from "@/components/favorite";
import { MovieProps } from "@/utils/types/movie";

interface MovieCardProps{
    movie: MovieProps;
}

export function MovieCard({ movie }: MovieCardProps){
    return(
        movie.poster_path && (
            <section 
                key={movie.id}
                className="group"
            >
                <div className="h-72 relative rounded-md">
                    <div className="w-full absolute z-10 p-2 flex justify-between items-center bottom-0 opacity-0 group-hover:opacity-100 transition">
                        <p className="font-bold text-sm text-white mr-2 truncate">{movie.title}</p>
                        <Favorite movie={movie} />
                    </div>
                    
                    <Link href={`/movie/${movie.id}`}>
                        <div className="relative h-full w-full">
                            <Image
                                src={`${process.env.NEXT_IMAGE_URL}${movie.poster_path}`}
                                alt={movie.title}
                                quality={40}
                                priority
                                fill={true}
                                className="object-cover rounded-md group-hover:brightness-50 transition"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                            />
                        </div>
                    </Link>
                </div>
            </section>
        )
    )
}