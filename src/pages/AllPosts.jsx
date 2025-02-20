import service from "../appwrite/config"
import React from 'react'
import { PostCard } from "../components"
import { useState, useEffect } from "react"
import { Container } from "postcss";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        service.getPosts([])
        .then((posts) => {
            if(posts){
                setPosts(posts.documents);
            }
        })
        .catch((err) => console.log(err))
    },[])

  return (
    <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap">
            {posts.map((post) => (
                <div key={post.id} className="p-2 w-1/4">
                    <PostCard  post={post} />
                </div>
            ))}
            </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
