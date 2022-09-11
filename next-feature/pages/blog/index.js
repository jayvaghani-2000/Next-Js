import Link from 'next/link';
import React from 'react'
import NavBar from '../../Components/Navbar/NavBar'

export const getStaticProps = async() => {
    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json()
    return {
        props: {
            data:data
        }
    }
}

const blog = ({data}) => {
    return (
        <>
            <NavBar />
            <div>blog</div>
            {
                data.map(i => (<p  key={i.id}><Link href={`/blog/${i.id}`}>{`${i.id}. ${i.title}`}</Link></p>))
            }
        </>
    )
}

export default blog