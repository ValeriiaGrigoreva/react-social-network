import React from 'react';
import s from"./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} /> 
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
    )
}

export default MyPosts;