import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';


export type PostType = {
    id: number
    likeCounts: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type ProfilePageType = {
    posts: PostType[]
}

export type FriendType = {
    id: number
    name:string
    avatar: string
}

export type SidebarType = {
    friends: FriendType[]
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sidebar: SidebarType
}

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<Profile state={props.state.profilePage.posts}/>}/>
                        <Route path={'/profile'} element={<Profile state={props.state.profilePage.posts}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs state={props.state.dialogsPage} />}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/music'} element={<Music />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                    </Routes >
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
