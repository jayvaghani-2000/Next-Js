import React from 'react'

const Index = (props) => {
    const { articles } = props
    console.log('articles', articles)
    return (
        articles.map(i => (<div>{i.author} {i.title}</div>))
    )
}

export default Index

export const getServerSideProps = async () => {
    const res = await fetch(`http://localhost:4000/news`)
    const data = await res.json()
    // console.log('data', data)
    return {
        props: {
            articles: data
        }
    }
} 