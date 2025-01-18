import { Container } from "@/components/container";
import { MovieProps } from "@/utils/types/movie";
import { Input } from "@/components/input";
import { MovieCard } from "@/components/MovieCard";
import { Pagination } from "@/components/pagination";

async function getMovies(page: string){
  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/discover/movie?api_key=${process.env.NEXT_API_KEY}&include_adult=false&include_video=true&page=${page}&sort_by=popularity.desc`, { next: { revalidate: 320 } })
    const list = await res.json();
    return list.results;
  } catch{
    throw new Error("Failed to fetch data")
  }
}

export default async function Home(
  props: { 
    searchParams: Promise<{ page: string }>
  }
) {
  const { page } = await props.searchParams
  const movieList: MovieProps[] = await getMovies(page || "1");

  return (
      <main>
        <Container>
          <Input />
          <h1 className="font-bold text-lg">Highlighted movies</h1>      

          <div className="w-full my-4 grid gap-7 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <Pagination />
        </Container>
      </main>  
  );
}
