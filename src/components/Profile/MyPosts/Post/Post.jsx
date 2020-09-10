import React from 'react';
import s from"./Post.module.css";

const Post = (props) => {
    return (
            <div>
                {props.message}<br/>
                likes: {props.likesCount}
            </div>          
    )
}

export default Post;