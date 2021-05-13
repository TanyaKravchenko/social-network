import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar2.jpg';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';



export const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type PostType = {
    id: string
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type MessageType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type FriendsBlockType = {
    id: string
    friendName: string
    avatar: string
}

export type SidebarType = {
    friendsBlock: Array<FriendsBlockType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionType =
    AddPostType |
    UpdateNewPostTextType |
    AddNewMessageTextType |
    UpdateNewMessageTextType

export type AddPostType = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type AddNewMessageTextType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    newMessageText: string
}

export type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    updateNewMessageText: string
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'HiHello', likes: 5},
                {id: v1(), message: 'YoHello', likes: 15}
            ],
            newPostText: 'YoYo'
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych', avatar: src1},
                {id: v1(), name: 'Sveta', avatar: src2},
                {id: v1(), name: 'Valera', avatar: src3},
                {id: v1(), name: 'Ignat', avatar: src4},
                {id: v1(), name: 'Victor', avatar: src5},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Yo'},
                {id: v1(), message: 'Hello!'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friendsBlock: [
                {id: v1(), friendName: 'Kostya', avatar: src1},
                {id: v1(), friendName: 'Masha', avatar: src2},
                {id: v1(), friendName: 'Misha', avatar: src3}
            ]
        }
    },
    _callSubscriber() {
        console.log('State')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}


export default store;