let state = {
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
}

let rerenderEntireTree = () => {
     
}

export const addPost = () => {
    let newPost = {
        id:2,
        message: state.profilePage.newPostText,
        likesCount: 7
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = "";
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;