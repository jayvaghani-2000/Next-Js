import React from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../Components/Navbar/NavBar'

export const getStaticPaths = async() => {
    // const res = await  fetch(`https://jsonplaceholder.typicode.com/posts`);
    // const data = await res.json()
    // const paths = data.map((i) => {
    //     return {
    //         params: { blog_no : i.id.toString() }
    //     }
    // })
    // return {
    //     paths: [{params :{ blog_no : "1"}},{params:{ blog_no : "2"}},{params:{ blog_no : "3"}}], 
    //     fallback: true
    // }
    const res = await  fetch(`http://localhost:4000/posts`);
    const data = await res.json()
    const paths =  data.map(a => ({params:{blog_no:a.id.toString()}}))
    return {
            paths,
            fallback: "blocking"
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.blog_no
    // const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const res = await  fetch(`http://localhost:4000/posts/${id}`);
    const data = await res.json()
    return {
        props: {
            data:data,
        },
        revalidate: 10
    }
}


const Blog = ({data}) => {
    
  return (
    <>
        <NavBar />
        <div>{data.author}</div>
    </>
  )
}

export default Blog