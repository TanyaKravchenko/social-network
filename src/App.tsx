import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import store, {AppStateType, RootStateType} from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppType = {
    state: AppStateType
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Friends sidebar={props.state.sidebarReducer}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile profilePage={props.state.profileReducer}/>}/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
