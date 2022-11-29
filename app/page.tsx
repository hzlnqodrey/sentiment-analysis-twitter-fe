// import { Suspense } from "react";

// interface SentimentResult {
//   text_raw: string,
//   text_clean: string,
//   text_clean_english: string,
//   nlp_classification: string,
//   bayes_classification: string,
//   polarity: number
// }

// // {/* @ts-expect-error Server Component */}
// async function getAnalysis() {
//   const res = await fetch("https://sentimen-analisis-twitter-api.herokuapp.com/predict")
  
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json()
// }

export default function Page() {
  // // Initiate requests
  // const analysisData = await getAnalysis()
  // // console.log(analysisData)
  
  // // Promises to resolve
  // const [ analysis ] = await Promise.all([analysisData])
  // // console.log(analysis)
  
  return (
    <>
      <div className="font-plus-jakarta container mx-auto mt-20 mb-20 text-center">
        <h1>Selamat datang di Website Hasil Analisis Sentiment pada Media Sosial Twitter dengan menggunakan Algoritma NLP dan Naive Bayes</h1>
        <h2 className="font-bold mt-5">Kelompok 2 | Praktikum Data Science </h2>
        <h2 className="font-bold mt-5">Anggota Kelompok</h2>
        <ul className="mt-10">
          <li>Hazlan Muhammad Qodri | 123190080 </li>
          <li>Elisia Dwi Rahayu | 123190062 </li>
          <li>Shania Septika Inayasari | 123190055 </li>
        </ul>
      </div>
    </>
  )
}


