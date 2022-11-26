async function getCharacters() {
    return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

export async function generateStaticParams() {
    
    // load data
    const characters = await getCharacters()

    return characters?.results.map((result: any) => ({
        slug: result?.name.replace(/\s+/g, "-").toLowerCase()
    }))
}

export default function StaticPage({ params }: any | string) {
    return (
        <>
            <h1>The character name is: {params.slug} </h1>
        </>
    )
}