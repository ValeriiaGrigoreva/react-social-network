import React from "react";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState()
    debugger

    let updateMessage = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (<Dialogs updateMessage={updateMessage} sendMessage={sendMessage} dialogsPage={state.messagesPage} newMessageText={state.newMessageText}/>)
}

export default DialogsContainer;