const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, message: "Hi", likesCount: 3}  
    ],

    newPostText: ""
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST: 
            let newPost = {
                id:2,
                message: state.newPostText,
                likesCount: 7
            };

            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        default: return state;
    }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export const addPostActionCreator = () => ({type:ADD_POST});

