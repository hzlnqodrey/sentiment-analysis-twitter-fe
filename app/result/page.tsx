import { Suspense, use } from "react"
import { useState, useEffect } from "react"
import style from './result.module.css'

async function getData() {
    return await (await fetch("https://sentimen-analisis-twitter-api.herokuapp.com/predict", { cache: "no-store" })).json()
}

export default function ResultPage() {

    const analysisResults = use(getData())

    let index: number = 1;

    return (
        <>
            <Suspense fallback={<> 
                <div className="text-center">
                    Loading...
                </div>     
            </>}>
                <h1 className="text-center mb-20">Hasil Sentiment Analisis menggunakan NLP dan Naive Bayes | Jumlah Data: 8000</h1>
                <table className={style.tablestyle}>
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
                        {analysisResults?.data?.map((result: any) => {
                            return (
                                <tr key={result.id} className="text-center">
                                    <th> {index++} </th>
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