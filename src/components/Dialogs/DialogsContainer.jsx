import React from "react";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialog-reducer';
import StoreContext from "../../StoreContext";
import Dialogs from './Dialogs'


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {(store) => {
                let state = store.getState()

                let updateMessage = (message) => {
                    store.dispatch(updateNewMessageTextActionCreator(message));
                }

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                return <Dialogs 
                    updateMessage={updateMessage} 
                    sendMessage={sendMessage} 
                    dialogsPage={state.messagesPage} 
                    newMessageText={state.newMessageText}
                />
            }
            }
        </StoreContext.Consumer>)
}

export default DialogsContainer;