import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.menuBar}>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/news">Pricing</Link>
                </li>
            </ul>
            {/* <style jsx>
                {`
                    .menuBar {
                        color:red
                    }
                `}
            </style> */}
        </nav>
    )
}

export default NavBar