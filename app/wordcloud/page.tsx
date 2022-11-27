import Image from "next/image";
import Link from "next/link";
import styles from "wordcloud.module.css"
import eng_wordcloud from '../../public/static/images/english_wordcloud.png'
import indo_wordcloud from '../../public/static/images/indo_wordcloud.png'

export default function WordcloudPage() {

    return (
        <>
            <h1 className="text-center font-bold">Hasil Word Cloud</h1>
            <div className="grid grid-cols-2 gap-4 border-solid border-2 border-sky-400 mt-20 mb-20">
                <div className="">
                    <Image
                        src={eng_wordcloud}
                        alt="Picture of the sentiment analysis result with NLP of english wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        />
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</h2>
                </div>
                <div className="">
                    <Image
                        src={indo_wordcloud}
                        alt="Picture of the sentiment analysis result with NLP of indonesia wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        />
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et.</h2>
                </div>
            </div>
        </>
    )
}