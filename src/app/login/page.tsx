import { LoginButton } from "@/components/loginButton"
import { getServerSession } from "next-auth";
import Link from "next/link"
import { redirect } from "next/navigation";

export default async function Login(){
    const session = await getServerSession();

    if (session) redirect("/");

    return(
        <main className="flex flex-col gap-8 justify-center items-center h-screen">
            <Link href="/?page=1" title="Go to Home Page">
                <h1 className="font-bold text-2xl hover:scale-95 transition">
                    &#x1F37F;Popcorn<span className="text-red-500">Guide</span>
                </h1>
            </Link>
            
            <LoginButton/>
        </main>
    )
}