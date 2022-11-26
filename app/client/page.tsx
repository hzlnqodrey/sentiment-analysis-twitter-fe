"use client"

import Link from "next/link"
import useSWR from "swr"

// fetch function
const fetcher = (path) => fetch(`https://rickandmortyapi.com/${path}`).then(res => res.json())

export default function ClientPage() {

    // load data from fetcher
    const characters = useSWR("api/character", fetcher)

    return (
        <div>
            <h2>Client Fetching</h2>
            {characters?.data?.results?.map((result: any, index: number) => (
                <ul className="list-disc" key={result.id}>
                    <Link href={`/staticprops/${result.name}`.replace(/\s+/g, "-").toLowerCase()}>
                        <li className="mt-4">{result.name} : {result.species} | {result.status}</li>
                    </Link>
                </ul>
            ))}
        </div>
    )
}
