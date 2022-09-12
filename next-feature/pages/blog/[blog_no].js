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
    return {
        paths: [{params :{ blog_no : "1"}},{params:{ blog_no : "2"}},{params:{ blog_no : "3"}}], 
        fallback: true
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.blog_no
    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
    return {
        props: {
            data:data
        }
    }
}


const Blog = ({data}) => {
  const router = useRouter()
    if(router.isFallback){
        return <h1>Loading ...</h1>
    }

  return (
    <>
        <NavBar />
        <div>{data.title}</div>
    </>
  )
}

export default Blog