import Image from "next/image";
import Link from "next/link";
import styles from "piechart.module.css"
import nlp_piechart from '../../public/static/images/nlp_piechart.png'
import bayes_piechart from '../../public/static/images/bayes_piechart.png'

export default function WordcloudPage() {

    return (
        <>
            <h1 className="text-center font-bold">Hasil Pie Chart Sentimen Analisis</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-solid border-2 border-sky-400 mt-20 mb-20">
                <div className="relative object-fill">
                    <Image
                        src={nlp_piechart}
                        alt="Picture of the sentiment analysis result with NLP of english wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        quality={100}
                        />
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</h2>
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
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</h2>
                </div>
            </div>
        </>
    )
}