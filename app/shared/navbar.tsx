import Link from 'next/link'
import styles from './navbar.module.css'

const routes: {
    name: string;
    path: string;
}[] = [
    { name: "Server", path: "/server" },
    { name: "Client", path: "/client" },
    { name: "Staticprop", path: "/staticprops" }
]

export default function Navbar() {
    return (
        <>
            {routes.map((r: any) => 
                <Link className={ styles.navlinks } key={r.index} href={r.path}>{r.name}</Link>
            )}
        </>
    )
}