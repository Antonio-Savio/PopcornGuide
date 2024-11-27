"use client"
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { db } from "@/services/firebaseConnection";
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { MovieProps } from "@/utils/types/movie";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface MovieCardProps{
    movie: MovieProps;
}

interface FavoriteListProps{
    id: string;
    favorite: boolean;
    filmId: number;
}

export function Favorite({ movie }: MovieCardProps){
const [favorite, setFavorite] = useState(false)
const [favoriteList, setFavoriteList] = useState<FavoriteListProps[]>()
const { data: session, status } = useSession();

useEffect(() => {
    function loadPosts() {
        if (session){
            const q = query(
                collection(db, "favorites"),
                where("user", "==", session?.user?.email)
            )
            const unsubscribe = onSnapshot(q, (snapshot) => {
                let list: FavoriteListProps[] = [];
                
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        filmId: doc.data().id,
                        favorite: doc.data().favorite,
                    })
                })
                
                setFavoriteList(list);
            })

            return () => unsubscribe();
        }
    }

    loadPosts()
}, [session])


useEffect(() => {
    if (favoriteList){
        
        favoriteList.map( (fav) => {
            if (movie.id === fav.filmId){
                setFavorite(!fav.favorite)
            }
        } )
    }
}, [favoriteList])
    
    
    async function handleFavorite(){
        if (!session) redirect("/login")

        setFavorite(!favorite)

        if (status === "authenticated"){

            if (!favorite){
                try{
                    await addDoc(collection(db, "favorites"), {
                        favorite: favorite,
                        created: new Date(),
                        user: session?.user?.email,
                        id: movie.id,
                        title: movie.title,
                        poster: movie.poster_path
                    })
                } catch (error){
                    throw new Error("Failed to add new Doc")
                }
            } else {
                let docId = ""

                if (favoriteList){
                    favoriteList.map( (fav) => {
                        if (movie.id === fav.filmId){
                            docId = fav.id
                        }
                    } )
                }

                await deleteDoc(doc(db, "favorites", docId))
            }
        }
    }

    return(
        <div onClick={handleFavorite}>
            <FaHeart
                className={`drop-shadow-md cursor-pointer transition ${favorite ? 'text-red-500 hover:text-red-600' : 'text-slate-200 hover:text-slate-300'}`}
                size={20}
                title={`${favorite ? "Remove from Favorites" : "Add to Favorites"}`}
            />
        </div>
    )
}