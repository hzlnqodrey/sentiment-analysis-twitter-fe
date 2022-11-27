import { use } from "react"
import style from './result.module.css'

async function getData() {
    return await (await fetch("https://sentimen-analisis-twitter-api.herokuapp.com/predict", { cache: "no-store" })).json()
}

export default function ResultPage() {

    // const analysisResults = use(getData())

    return (
        <>
            <h1 className="text-center mb-10">Result</h1>
            <table className={ style.tablestyle }>
                <thead>
                    <tr className="text-center">
                    <th>x</th>
                    <th>Text_Asli</th>
                    <th>Text_Clean</th>
                    <th>Text_Clean_English</th>
                    <th>Klasifikasi_NLP</th>
                    <th>Klasifikasi_NaiveBayes</th>
                    <th>Polaritas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <th>0</th>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}