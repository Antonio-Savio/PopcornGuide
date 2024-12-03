import { MovieProps } from "@/utils/types/movie";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { MovieCard } from "@/components/MovieCard";

async function getData(title: string){
    try{
        const decodeTitle = decodeURI(title)

        const res = await fetch(`${process.env.NEXT_API_URL}/search/movie?api_key=${process.env.NEXT_API_KEY}&query=${decodeTitle}&page=1`)
        const list = await res.json()
        return list.results;
    } catch(err){
        return [];
    }
}

export default async function Search(
    props: {
        params: Promise<{title: string}> 
    }
){
    const { title } = await props.params
    const movies: MovieProps[] = await getData(title);

    return(
        <main className="w-full text-black">
            <Container>
                <Input />
                <h2 className="font-bold text-lg my-5">
                    Search results for <span className="text-red-500 capitalize">{decodeURI(title)}</span>
                </h2>

                {movies.length === 0 && (
                    <p className="font-bold text-red-500">Oops... Movie not found!</p>
                )}

                <div className="w-full my-4 grid gap-7 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {movies && movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </Container>
        </main>
    )
}