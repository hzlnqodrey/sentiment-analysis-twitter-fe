import Link from "next/link"
import { use } from "react"
import { resourceLimits } from "worker_threads"

// getStaticProps in NextJS13
async function getCharacters() {
    return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

export default function StaticPage() {

    // use the json data
    const allCharacters = use(getCharacters())

    return (
        <div>
            <h2>getStaticPaths and getStaticProps</h2>
            {allCharacters?.results.map((result: any, index: number) => (
                <ul className="list-disc" key={result.id}>
                    <Link href={`/staticprops/${result.name}`.replace(/\s+/g, "-").toLowerCase()}>
                        <li className="mt-4">{result.name} : {result.species} | {result.status}</li>
                    </Link>
                </ul>
            ))}
        </div>
    )
}
