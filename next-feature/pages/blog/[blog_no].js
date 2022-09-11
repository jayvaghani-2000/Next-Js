import React from 'react'
import { useRouter } from 'next/router'
import NavBar from '../../Components/Navbar/NavBar'

export const getStaticPaths = async() => {
    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json()
    const paths = data.map((i) => {
        return {
            params: { blog_no : i.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
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


const blog = ({data}) => {
  const router = useRouter()
  const page = router.query.blog_no

  return (
    <>
        <NavBar />
        <div>{data.title}</div>
    </>
  )
}

export default blog