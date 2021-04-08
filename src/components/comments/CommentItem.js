import React, {useState} from 'react';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from '../../app/config';
import './commentItem.css';

const APP_ID = `${process.env.REACT_APP_API_ID}`;

const CommentItem = ({owner, publishDate, message}) => {
    const history = useHistory();
    const {firstName, lastName, picture, id} = owner;
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleGetProfile = (userId) => {
        try {
            setIsLoading(true);
            axios.get(`${BASE_URL}/post/${id}/comment`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => {
                console.log(data);
                setIsLoading(false);
                history.push(`/user/${userId}`);
            })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {isLoading ? (
                <h1>Getting Profile ...</h1>
            ) : (
                <React.Fragment>
                <div className="Comments">
                    <div className="AuthorComments">
                        <div onClick={() => handleGetProfile(id)} className="AuthorCommentsProfile">
                            <img src={picture} alt='user image' className="AuthorCommentsProfilePhoto"/>
                        </div>
                        <div>
                            <p className="AuthorCommentsProfileName">{`${firstName} ${lastName}`}</p>
                            <p className="AuthorCommentsProfileComment">{message}</p>
                            <p className="Date">{moment(publishDate).format('LLL')}</p>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default CommentItem;