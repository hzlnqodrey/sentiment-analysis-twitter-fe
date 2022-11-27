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
      <div className="container mx-auto mt-20 mb-20 text-center border-2 border-solid border-sky-400">
        <h1>Haloo</h1>
      </div>
    </>
  )
}


