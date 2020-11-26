const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {

    _state: {
        messagesPage: {

            dialogs: [
                {id: 2, name: "Katya"},
                {id: 3, name: "Petya"},
                {id: 1, name: "Dima", photo: "https://avatars.mds.yandex.net/get-zen_doc/195447/pub_5db5a3a45eb26800ad1ad90f_5db5a3e8fbe6e700adb0d948/scale_1200"}, 
            ],

            messages: [
                {id: 1, message: "Hi"}, 
                {id: 2, message: "How are you"},
                {id: 3, message: "Wat's up"}   
            ]
        },

        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 3}  
            ],

            newPostText: ""
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        rerenderEntireTree = observer;
    },

    rerenderEntireTree() {
        
    },

    addPost() {
        let newPost = {
            id:2,
            message: this._state.profilePage.newPostText,
            likesCount: 7
        };

        this._state.profilePage.posts.push(newPost);
        rerenderEntireTree(this._state);
        this._state.profilePage.newPostText = "";
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        rerenderEntireTree(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id:2,
                message: this._state.profilePage.newPostText,
                likesCount: 7
            };
    
            this._state.profilePage.posts.push(newPost);
            rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = "";
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updateNewPostTextActionCreator = (text) => (
   {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
)

export default store;