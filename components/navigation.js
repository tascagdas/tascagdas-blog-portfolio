import React from 'react'
import Link from "next/link";
import styles from "./navigation.module.css"



const Navigation = () => {
    return (
        <nav className='font-mono'>
            <ul className="flex md:space-x-4 flex-col md:flex-row">

                <li>
                    <Link className={styles.link} href="/about">Hakkımda</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/about/projects">Projeler</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/photos">Fotoğraflar</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Navigation