import React, {useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import { BASE_URL } from '../../app/config';
import './commentItem.css';
import UserProfile from '../users/UserProfile';

const APP_ID = `${process.env.REACT_APP_API_ID}`;

const CommentItem = ({owner, publishDate, message, profile, setProfile}) => {
    const {firstName, lastName, picture, id} = owner;
    const [isLoading, setIsLoading] = useState(false);
    // const [userData, setUserData] = useState(null);

    const handleGetProfile = (userId) => {
        try {
            setIsLoading(true);
            axios.get(`${BASE_URL}/post/${id}/comment`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => {
                console.log(data);
                setIsLoading(false);
            })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {isLoading ? (
                <p className="AuthorCommentsProfileComment">Getting Profile ...</p>
            ) : (
                <React.Fragment>
                {profile && 
                    <UserProfile 
                        key={id}
                        firstName={firstName}
                        lastName={lastName} 
                        picture={picture} 
                    />
                }
                <div className="Comments">
                    <div className="AuthorComments">
                        <div 
                            onClick={() => {
                                handleGetProfile(id)
                                setProfile(!profile)
                            }} 
                            className="AuthorCommentsProfile"
                        >
                            <img src={picture} alt={firstName} className="AuthorCommentsProfilePhoto"/>
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