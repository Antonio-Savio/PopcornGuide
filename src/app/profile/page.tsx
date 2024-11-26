import { getServerSession } from "next-auth";
import { Container } from "@/components/container";
import { LogoutButton } from "@/components/logoutButton"; 
import { redirect } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { GiFilmProjector } from "react-icons/gi";
import { Input } from "@/components/input";

export const metadata: Metadata= {
    title: 'Profile | PopcornGuide - Your Ultimate Movie Guide',
    description: 'User profile'
}

export default async function Profile(){
    const session = await getServerSession();

    if(!session) redirect("/login")
    
    return(
        <div>
            <Container>
                <Input/>
                <section className="my-8 flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4">
                    <div className="flex items-center gap-2">
                        {session.user?.image && (
                            <div className="rounded-full overflow-hidden border-4 border-red-800">
                                <Image 
                                    src={session?.user?.image}
                                    alt="User avatar"
                                    width={120}
                                    height={120}
                                    quality={100}
                                    className="rounded-full hover:scale-105 transition"
                                />
                            </div>
                        )}
                        <div className="font-bold text-lg">
                            {session?.user?.name}
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/favorites" className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-300 transition text-white rounded-lg p-2 flex items-center gap-2 shadow-lg">
                            <GiFilmProjector size={20}/>
                            Favorite Movies
                        </Link>
                        <LogoutButton/>
                    </div>
                </section>
            </Container>
        </div>
    )
}