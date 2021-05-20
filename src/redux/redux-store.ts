import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type RootStateType = typeof rootReducer
export type AppStateType = ReturnType<RootStateType>

let rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer,
})

let store = createStore(rootReducer);

export default store;