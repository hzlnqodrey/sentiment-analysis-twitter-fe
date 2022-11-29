import Link from 'next/link'
import styles from './navbar.module.css'

const routes: {
    name: string;
    path: string;
}[] = [
    // { name: "Server", path: "/server" },
    // { name: "Client", path: "/client" },
    // { name: "Staticprop", path: "/staticprops" },
    { name: "Home", path: "/"},
    { name: "Analysis Result", path: "/result" },
    { name: "Piechart",path: "/piechart" },
    { name: "Wordcloud", path: "/wordcloud"}
]

export default function Navbar() {
    return (
        <>
            <div className='container mx-auto px-4 mt-8 mb-16 text-center'>
                {routes.map((r: any) => 
                    <Link className={ styles.navlinks } key={r.index} href={r.path}>{r.name}</Link>
                )}
            </div>
        </>
    )
}