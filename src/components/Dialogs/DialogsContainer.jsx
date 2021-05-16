import React from "react";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagesPage,
        newMessageText: state.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return { 
        updateMessage: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },

        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;