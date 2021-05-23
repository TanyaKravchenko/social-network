import {
    ActionType,
    addNewMessageActionCreator,
    updateNewMessageActionCreator
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';


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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

