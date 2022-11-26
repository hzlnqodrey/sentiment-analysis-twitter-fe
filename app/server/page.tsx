import { use } from "react"

async function getCharacters() {
    return await (await fetch("https://rickandmortyapi.com/api/character", { cache: "no-store" })).json()
}

export default function ServerPage() {
    
    // load data
    const characters = use(getCharacters())

    return (
        <div>
            <h2>Server Fetching (getServerSideProps)</h2>
            {characters?.results?.map((result: any) => {
                return (
                    <ul className="list-disc" key={result.id}>
                        <li className="mt-4">{result.name}</li>
                    </ul>
                )
            })}
        </div>
    )
}
