import axios from 'axios'
import React, { use, usev } from 'react'
// fetch data dummy from api with axios
const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
}

const page = () => {
  let posts = use(getData())
  console.log(posts)
  return (

    // map data from api
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
  )
}

export default page