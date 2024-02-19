import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {Navbar} from "./components/navbar/Navbar";
import UsersContainer from "./components/users/UsersContainer";
import {ProfileContainerWithRouter} from "./components/profile/ProfileContainerWithRouter";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";


type AppPropsType = {}

function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer />
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<ProfileContainerWithRouter/>}/>
                    <Route path={`/profile/:userID?`} element={<ProfileContainerWithRouter/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
