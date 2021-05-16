const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {

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

    newMessageText: "",
}

export const dialogReducer = (state = initialState,action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText,
            }
        case SEND_MESSAGE:
            let text = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id:2, message: text}],
                newMessageText: "",
            }
        default: return state
    }
}

export const updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: message
    }
}

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});

