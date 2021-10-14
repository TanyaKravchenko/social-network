import {
    actions, ActionsType
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        addNewMessage: (nameMessageBody: string) => {
            dispatch(actions.addNewMessageActionCreator(nameMessageBody));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

