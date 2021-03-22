import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialog-reducer';


const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} photo={dialog.photo} />);

    let messagesElements = state.messages.map( message => <Message id={message.id} message={message.message} />);

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let message = newMessageElement.current.value
        props.updateMessage(message)
    }

    let sendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}></textarea>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;