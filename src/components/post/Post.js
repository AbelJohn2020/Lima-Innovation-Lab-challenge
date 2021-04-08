import React, {useState, useEffect} from 'react'
import CommentItem from '../comments/CommentItem';
import {getComments} from '../../utils/index';
import './posts.css';

const Post = ({postId, text, image, likes, tags, publishDate, owner}) => {
    const {firstName, lastName, title} = owner;
    const [loadingComments, setLoadingComments] = useState(false);
    const [comments, setComments] = useState(null);
 
    // useEffect(() => {
    //     setLoadingComments(true);
    //     getComments()
    //         .then(({ data }) => setComments(data.data))
    //         .catch(console.error)
    //         .finally(() => setLoadingComments(false));
    // }, [])

    const handleCommets = (id) => {
        setLoadingComments(true);
        getComments(id)
            // .then(({ data }) => setComments(data.data))
            // .catch(console.error)
            // .finally(() => setLoadingComments(false));
    };

    return (
        <div>
            <div className="NamePost">{text}</div>
            <div className="BoxImage">
                <div className="CardImage">
                    <img src={image} alt='post image' className="PostImage"/>
                </div>
                <div className="PostInformation">
                    <div>{likes}</div>
                    <div>Author: {`${firstName} ${lastName}`}</div>
                    <div>Title: {title}</div>
                    <div>{publishDate}</div>
                </div>
            </div>
            <button onClick={() => handleCommets(postId)}>
                Show Comments
            </button>
            <div style={{backgroundColor: 'red'}}>
                {loadingComments && <h1>Loading Comments ...</h1>}
                {comments && comments.map(comment => (
                    <CommentItem 
                        key={comment.id}
                        message={comment.message}
                        publishDate={comment.publishDate}
                        owner={comment.owner}
                    />
                ))}
            </div>
        </div>
    )
}

export default Post
