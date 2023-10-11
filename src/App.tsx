import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {StateType, StoreType} from "./redux/state";


type AppPropsType = {
    state: StateType
    store: StoreType
}

function App(props: AppPropsType) {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<Profile state={props.state.profilePage} store={props.store}/>}/>
                        <Route path={'/profile'} element={<Profile state={props.state.profilePage} store={props.store}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs state={props.state.dialogsPage} />}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/music'} element={<Music />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                    </Routes >
                </div>
            </div>
    );
}

export default App;
