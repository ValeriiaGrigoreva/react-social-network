const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
            ],

            newMessageText: ""
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

    rerenderEntireTree() {
        
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id:2,
                message: this._state.profilePage.newPostText,
                likesCount: 7
            };
    
            this._state.profilePage.posts.push(newPost);
            this.rerenderEntireTree(this._state);
            this._state.profilePage.newPostText = "";
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id:2,
                message: this._state.messagesPage.newMessageText
            }
            
            this._state.messagesPage.newMessageText = '';
            this._state.messagesPage.messages.push(newMessage);
            this.rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type:ADD_POST});
export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});

export const updateNewPostTextActionCreator = (text) => {
   return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export const updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: message
    }
}

export default store;