import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} photo={dialog.photo} />);

    let messagesElements = props.state.messages.map( message => <Message id={message.id} message={message.message} />);

    let newMessageElement = React.createRef();

    let getMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={getMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;