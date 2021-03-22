import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
       let action = addPostActionCreator()
       props.store.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (<MyPosts 
                updateNewPostText={onPostChange} 
                addPost={addPost} 
                posts={state.profilePage.posts} 
                newPostText={state.profilePage.newPostText} 
            />)
}

export default MyPostsContainer;