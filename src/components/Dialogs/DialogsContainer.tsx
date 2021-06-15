import {
    ActionType,
    addNewMessageActionCreator,
    updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        onMessageChange: (newMessageText: string) => {
            dispatch(updateNewMessageActionCreator(newMessageText));
        }
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

