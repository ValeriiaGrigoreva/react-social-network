const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogReducer = (state,action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.newText;
            return state;

        case SEND_MESSAGE: 
            let newMessage = {
                id:2,
                message: state.newMessageText
            }
            
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        default: return state;
    }
}

export const updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newText: message
    }
}

export const sendMessageActionCreator = () => ({type:SEND_MESSAGE});

