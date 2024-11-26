import { Container } from "@/components/container"
import { GoDotFill } from "react-icons/go";

export default function Loading() {
    return(
        <main>
            <Container>
                <div className="loading-height text-red-800 flex justify-center items-center">
                    <GoDotFill size={25} className="animate-wave" />
                    <GoDotFill size={25} className="animate-wave delay-200ms" />
                    <GoDotFill size={25} className="animate-wave delay-400ms" />
                </div>
            </Container>
        </main>
    )
}