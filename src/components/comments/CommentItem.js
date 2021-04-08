import React from 'react';

const CommentItem = ({message, owner, publishDate}) => {
    const {firstName, lastName, picture} = owner;
    return (
        <div>
            <div style={{width: '50px', height: '50px', borderRadius: '100%'}}>
                <img src={picture} alt='user image' style={{width: '100%'}} />
            </div>
            <div>Author: {`${firstName} ${lastName}`}</div>
          <div>{message}</div>
          <div>{publishDate}</div>
        </div>
    );
};

export default CommentItem;