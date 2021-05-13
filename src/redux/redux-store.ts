import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>

let rootReducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer,
})

let store = createStore(rootReducers);

export default store;