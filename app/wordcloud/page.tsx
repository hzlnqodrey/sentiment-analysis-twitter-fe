import Image from "next/image";
import Link from "next/link";
import styles from "wordcloud.module.css"
import eng_wordcloud from '../../public/static/images/english_wordcloud.png'
import indo_wordcloud from '../../public/static/images/indo_wordcloud.png'

export default function WordcloudPage() {

    return (
        <>
            <h1 className="text-center font-bold">Hasil Word Cloud</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 mb-20">
                <div className="relative object-fill">
                    <Image
                        src={eng_wordcloud}
                        alt="Picture of the sentiment analysis result with NLP of english wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        quality={100}
                        />
                    <h2 className="text-center">Wordcloud English dari 8000 data twitter</h2>
                </div>
                <div className="relative object-fill">  
                    <Image
                        src={indo_wordcloud}
                        alt="Picture of the sentiment analysis result with NLP of indonesia wordcloud"
                        placeholder="blur"
                        width={3000}
                        height={2000}
                        quality={100}
                        />
                    <h2 className="text-center">Wordcloud Indonesia dari 8000 data twitter</h2>
                </div>
            </div>
        </>
    )
}