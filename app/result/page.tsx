import { Suspense, use } from "react"
import style from './result.module.css'
Suspense

// Props
// interface analysisResults {

// }

async function getData() {
    return await (await fetch("https://sentimen-analisis-twitter-api.herokuapp.com/predict", { cache: "no-store" })).json()
}

export default function ResultPage() {

    const analysisResults = use(getData())

    return (
        <>
            <Suspense fallback={<> Loading... </>}>
                <h1 className="text-center mb-20">Result</h1>
                <table className={ style.tablestyle }>
                    <thead>
                        <tr className="text-center">
                        <th>Nomor</th>
                        <th>Text Asli</th>
                        <th>Klasifikasi NLP</th>
                        <th>Klasifikasi Naive Bayes</th>
                        <th>Polaritas</th>
                        </tr>
                    </thead>
                    <tbody>
                            {analysisResults?.data?.map((result: any, index: number) => {
                                return (
                                <tr key={result.id} className="text-center">
                                    <th key={result.id}> {index++} </th>
                                    <td key={result.id}> {result.Text_Asli} </td>
                                    <td key={result.id}> {result.Klasifikasi_NLP} </td>
                                    <td key={result.id}> {result.Klasifikasi_NaiveBayes} </td>
                                    <td key={result.id}> {result.Polaritas} </td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
            </Suspense>
        </>
    )
}