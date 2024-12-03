import { redirect } from "next/navigation";
import { MovieDetailProps } from "@/utils/types/movie";
import Image from "next/image";
import { Container } from "@/components/container";
import { minToHourFormat } from "@/utils/time/minutestohours";
import { formatCurrency } from "@/utils/currency/formatcurrency";
import { Favorite } from "@/components/favorite";
import { FaStar } from "react-icons/fa6";
import { Metadata } from "next";
import { Input } from "@/components/input";

interface PropsParams{
    params: Promise<{ id: string }>
    
}

export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
    const { id } = await params

    try {
        const response: MovieDetailProps = await fetch(`${process.env.NEXT_API_URL}/movie/${id}?api_key=${process.env.NEXT_API_KEY}`, { next: { revalidate: 320 } })
        .then((res) => res.json())
        .catch(() => {
            return {
                title: "PopcornGuide - Your Ultimate Movie Guide"
            }
        })

        return {
            title: `${response.title} - PopcornGuide`,
            description: `${response.overview.slice(0, 100)}...`,
            openGraph: {
                title: response.title,
                images: [`${process.env.NEXT_IMAGE_URL}${response.poster_path}`]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true,
                }
            }
        }

    } catch(err){
        return{
            title: "PopcornGuide - Your Ultimate Movie Guide"
        }
    }
}

async function getData(id: string){
    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/movie/${id}?api_key=${process.env.NEXT_API_KEY}`, { next: { revalidate: 320 } })
        return await res.json();
    } catch(err){
        throw new Error("Failed to fetch data")
    }
}

export default async function Movie({
    params
}: {
    params: Promise<{ id: string }>
}){
    try {
        const { id } = await params
        const data: MovieDetailProps = await getData(id);
    
        if(data.success === false){
            redirect("/")
        }
    
        return(
            <main className="w-full">
                <Container>
                    <Input/>
                    <h1 className="my-3 font-bold text-2xl">{data.title}</h1>
                    <div className="flex items-center gap-3">
                        <span>{data.release_date.slice(0, 4)}</span>
                        •
                        <span>{minToHourFormat(data.runtime)}</span>
                        •
                        <Favorite movie={data} />
                    </div>
    
                    <section className="flex flex-col items-center sm:flex-row gap-4 my-3">
                        <div className="relative shrink-0 h-80 xs:h-96 w-60 overflow-hidden rounded-md">
                            <Image
                                src={`${process.env.NEXT_IMAGE_URL}${data.poster_path}`}
                                alt={data.title}
                                quality={100}
                                priority={true}
                                fill={true}
                                className="object-cover rounded-md hover:scale-105 transition"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                            />
                        </div>
                        <div className="grow sm:max-h-96 overflow-auto">
                            <p className="my-3 italic">{data.tagline}</p>
    
                            <h3 className="font-bold">Genres:</h3>
                            <div className="flex flex-wrap">
                                {data.genres.map(genre => (
                                    <div key={genre.name} className="flex-grow sm:flex-grow-0 text-center my-1 mr-2 py-1 px-3 rounded-full text-white bg-red-800">
                                        {genre.name}
                                    </div>
                                ))}
                            </div>
    
                            <p className="my-3">{data.overview}</p>
    
                            <div className="my-3 flex items-center gap-2">
                                <FaStar color="#fe0"/>
                                {data.vote_average.toFixed(1).replace('.',',')}/10
                            </div>
    
                        </div>
    
                    </section>
    
                    <section>
                        <h3 className="font-bold">Production Contries:</h3>
                        {data.production_countries.map( (country, ind) => (
                            <div key={country.name} className="my-1 mr-2 inline-block">
                                {country.name} 
                                {ind !== data.production_countries.length - 1 && <span> •</span>}
                            </div>
                        ))}
                        <div className="my-3">
                            <h3 className="font-bold">Budget:</h3>
                            <div>{formatCurrency(data.budget)}</div>
                        </div>
                        <div className="my-3">
                            <h3 className="font-bold">Revenue:</h3>
                            <div>{formatCurrency(data.revenue)}</div>
                        </div>
                    </section>
                </Container>
            </main>
        )
    } catch(error) {
        console.log('Failed to load movie detail', error)
    }
}