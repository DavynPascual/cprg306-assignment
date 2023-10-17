import Link from "next/link";
import Myinfo from "./studentinfo";

export default function Home() {
    return(
        <main>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <Myinfo />
            
           <div> 
           <Link href="/week2">Week 2</Link>
           </div>
           <div>
            <Link href="/Week3">Week 3</Link>
            </div>
            <div>
            <Link href="/week4">Week 4</Link>
            </div>
            <div>
            <Link href="/week5">Week 5</Link>
            </div>


        </main>
    )
}