import { Container } from "@/components/container";
import { getServerSession } from "next-auth"; 
import { redirect } from "next/navigation";
import { db } from "@/services/firebaseConnection";
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { MovieCard } from "@/components/MovieCard";
import { Input } from "@/components/input";

interface DataProps{
    favorite: boolean;
    id: number;
    poster_path: string;
    title: string;
    user: string;
}

async function getFavorites(user: string){
    const q = query(
        collection(db, "favorites"),
        where("user", "==", user),
        orderBy("created", "desc"),
    )

    const snapshot = await getDocs(q)
    
    let list: DataProps[] = [];

    snapshot.forEach( doc => {
        list.push({
            favorite: doc.data().favorite,
            id: doc.data().id,
            poster_path: doc.data().poster,
            title: doc.data().title,
            user: doc.data().user,
        })
    })
    
    return list;
}

export default async function Favorites(){
    const session = await getServerSession()

    if(!session) redirect("/login")

    const userEmail = session.user?.email ?? "";
    const data: DataProps[] = await getFavorites(userEmail);

    return (
        <main>
            <Container>
                <Input />

                <h1 className="font-bold text-lg">My favorite list</h1>


                {data.length == 0 ? (
                    <p className="my-2 font-bold text-red-500">Your list is empty! Search for your most-liked movies.</p>
                ) : (
                    <div className="w-full my-4 grid gap-7 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {data.map( film => (
                            <MovieCard key={film.id} movie={film} />
                        ))}
                    </div>
                )}
            </Container>
        </main>
    )
}