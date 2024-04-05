import React, {useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import service from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'
function EditPost() {
    const navigate = useNavigate();
    const [post, setPost] = useState();
    const { id } = useParams();
    if(id){
        service.getPost(id)
       .then((post) => {
        if(post){
            setPost(post);
        }
       })
       
    }
    else{
        navigate('/');
    }

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
