import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionType} from './redux/store';
import Friends from './components/Friends/Friends';
import {AppStateType} from './redux/redux-store';

type AppType = {
    state: AppStateType
    dispatch: (action: ActionType) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Friends sidebar={props.state.sidebarReducer}/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() =>
                    <Profile profilePage={props.state.profileReducer}
                             dispatch={props.dispatch}/>}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs dialogsPage={props.state.dialogsReducer}
                             dispatch={props.dispatch}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
