import React, {useState} from 'react'
import moment from 'moment';
import axios from 'axios';
import { BASE_URL } from '../../app/config';
import CommentItem from '../comments/CommentItem';
import './posts.css';
import { BiLike } from 'react-icons/bi';


const APP_ID = `${process.env.REACT_APP_API_ID}`;

const Post = ({postId, text, image, likes, tags, publishDate, owner}) => {
    const {firstName, lastName, title} = owner;
    const [loadingComments, setLoadingComments] = useState(false);
    const [comments, setComments] = useState(null);
    console.log(tags);

    const handleCommets = (id) => {
        try {
            setLoadingComments(true);
            axios.get(`${BASE_URL}/post/${id}/comment`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => {
                setComments(data.data);
                setLoadingComments(false);
            })
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="ContainerPost">
            <div className="NamePost">
                <p>{text}</p>
                <div className="Tags">
                    {tags.map((tag) => (
                        <p key={tag} className="TagName">#{tag}</p>
                        ))}
                </div>
            </div>
            <div className="BoxImage">
                <div className="CardImage">
                    <img src={image} alt='post image' className="PostImage"/>
                </div>
                <div className="PosInformation--Likes">
                    <BiLike className="PosInformation--Likes__icon"/>
                    <p>{likes}</p>
                </div>
                <div className="PostInformation">
                    <div>Author: {`${firstName} ${lastName}`}</div>
                    <div>Title: {title}</div>
                    <div>{moment(publishDate).format('LLL')}</div>
                    <button onClick={() => {
                        handleCommets(postId);
                        console.log('postId', postId)
                    }} className="ButtonPost">
                        Show Comments
                    </button>
                </div>
            </div>
            <div>
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
