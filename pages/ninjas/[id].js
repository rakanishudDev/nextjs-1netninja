import React from 'react'

export const getStaticPaths = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (pageContext) => {
    const pageID = pageContext.params.id
    const data = await fetch('https://jsonplaceholder.typicode.com/users/' + pageID)
    .then(res => res.json())

    return {
        props: {
            data
        }
    }
}


const Details = ({data}) => {
  return (
    <div>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.website}</p>
        <p>{data.address.city}</p>
    </div>
  )
}

export default Details