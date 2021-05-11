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
import {RootStateType, StoreType} from './redux/state';
import Friends from './components/Friends/Friends';

type AppType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addNewMessage: () => void
    updateNewMessage: (updateNewMessageText: string) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Friends siteBar={props.state.siteBar}/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() =>
                    <Profile ProfilePage={props.state.profilePage}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs state={props.state.dialogsPage}
                             addNewMessage={props.addNewMessage}
                             newMessageText={props.state.dialogsPage.newMessageText}
                             updateNewMessage={props.updateNewMessage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
