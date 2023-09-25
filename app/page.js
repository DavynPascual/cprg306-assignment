import Link from "next/link";
import Myinfo from "./studentinfo";

export default function Home() {
    return(
        <main>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <Myinfo />
            <Link href="http://localhost:3001/week2">Week 2</Link>
        </main>
    )
}