import { Suspense } from "react";

interface SentimentResult {
  text_raw: string,
  text_clean: string,
  text_clean_english: string,
  nlp_classification: string,
  bayes_classification: string,
  polarity: number
}

// {/* @ts-expect-error Server Component */}
async function getAnalysis() {
  const res = await fetch("https://sentimen-analisis-twitter-api.herokuapp.com/predict")
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json()
}

export default async function Page() {
  // Initiate requests
  const analysisData = await getAnalysis()
  // console.log(analysisData)
  
  // Promises to resolve
  const [ analysis ] = await Promise.all([analysisData])
  // console.log(analysis)
  
  return (
    <>
      <div className="container mx-auto mt-20 mb-20 text-center">
        <h1>Haloo</h1>
        {/* <h1 className="text-3xl font-bold underline text-red-500">Coba fetch hasil analisis sentiment</h1>
        
        <Suspense fallback={<div>Loading...</div>}>
          <table border={1}>
            <thead>
              <tr className="text-center">
                <th>Nomor</th>
                <th>Text Asli</th>
                <th>Text Clean</th>
                <th>Klasifikasi NLP</th>
                <th>Klasifikasi Bayes</th>
                <th>Polaritas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {analysis.data.map((data: any, index: number) => (
                  <div key={data.id}>
                    <td>{index+1}</td>
                    <td>{data.Text_Asli}</td>
                    <td>{data.Text_Clean}</td>
                    <td>{data.Klasifikasi_NLP}</td>
                    <td>{data.Klasifikasi_Bayes}</td>
                    <td>{data.Polaritas}</td>
                  </div>
                ))}
              </tr>
            </tbody>
          </table>
        </Suspense> */}
      </div>
    </>
  )
}

// {/* @ts-expect-error Server Component */}
// // Analysis List Component
// async function AnalysisList({ analysis }): Promise<any> {

//   return (
//     <>
//       <ul>

//       </ul>
//     </>
//   )
// }


