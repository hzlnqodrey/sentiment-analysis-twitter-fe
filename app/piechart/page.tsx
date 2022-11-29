import Image from "next/image";
import Link from "next/link";
import styles from "piechart.module.css"
import nlp_piechart from '../../public/static/images/nlp_piechart.png'
import bayes_piechart from '../../public/static/images/bayes_piechart.png'

export default function WordcloudPage() {

    return (
        <>
            <h1 className="text-center font-bold">Hasil Pie Chart Sentimen Analisis</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative object-fill">
                    <Image
                        src={nlp_piechart}
                        alt="Picture of the sentiment analysis result with NLP of english wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        quality={100}
                        />
                    <h2 className="text-center">Piechart: Hasil Sentimen Analisis NLP</h2>
                </div>
                <div className="relative object-fill">  
                    <Image
                        src={bayes_piechart}
                        alt="Picture of the sentiment analysis result with NLP of indonesia wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        quality={100}
                        />
                    <h2 className="text-center">Piechart: Hasil Sentimen Analisis Naive Bayes</h2>
                </div>
            </div>
        </>
    )
}