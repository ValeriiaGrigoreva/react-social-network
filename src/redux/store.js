import {profileReducer} from './profile-reducer';
import {dialogReducer} from './dialog-reducer';

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this.rerenderEntireTree(this._state);
    }
}



export default store;