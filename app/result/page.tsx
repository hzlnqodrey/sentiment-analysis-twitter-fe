import { use } from "react"
import style from './result.module.css'

async function getData() {
    return await (await fetch("https://sentimen-analisis-twitter-api.herokuapp.com/predict", { cache: "no-store" })).json()
}

export default async function ResultPage() {

    const analysisResults = use(getData())

    return (
        <>
            <h1 className="text-center">Result</h1>
            <table className={ style.mystyle }>

            </table>
        </>
    )
}