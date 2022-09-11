import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from '../Components/Navbar/NavBar'

const index = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        },5000)
    })
    return (
        <>
            <NavBar />
            <div style={{ textAlign: "center" }}>
                <h1 onClick={() => {
                    router.push("/")
                }}>404 Not Found</h1>
                <Link href="/">Back to home Page</Link>
            </div>
        </>
    )
}

export default index