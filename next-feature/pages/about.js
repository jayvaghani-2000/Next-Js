import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <NavBar />
            <div>about</div>
            <div style={{display:'flex', justifyContent:"center"}}>
            <Image src="/cloth.jpg" width="500" height="300"/>
            </div>
        </>
    )
}

export default About