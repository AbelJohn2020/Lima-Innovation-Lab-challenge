import React, { useState, useEffect } from 'react'
import './posts.css';
import axios from 'axios';
import { BASE_URL } from '../../app/config';
import PostItem from './PostItem';

const APP_ID = `${process.env.REACT_APP_API_ID}`;

const Posts = () => {
    const [loadingPosts, setLoadingPosts] = useState(false);
    const [posts, setPosts] = useState();

    useEffect(() => {
        setLoadingPosts(true);
        axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setPosts(data.data))
            .catch(console.error)
            .finally(() => setLoadingPosts(false));
    }, []);

    return (
        <div className="Posts">
            {loadingPosts && <h1>Loading Posts ...</h1>}
            {posts && posts.map(post => (
                <PostItem 
                    key={post.id}
                    postId={post.id}
                    text={post.text}
                    image={post.image}
                    likes={post.likes}
                    tags={post.tags}
                    publishDate={post.publishDate}
                    owner={post.owner}
                />
            ))}
        </div>
    )
}

export default Posts
