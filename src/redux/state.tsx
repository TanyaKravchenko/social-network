import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar2.jpg';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
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

export type SiteBarType = {
    friendsBlock: Array<FriendsBlockType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBar: SiteBarType
}

export type ActionType =
    AddPostType |
    UpdateNewPostTextType |
    AddNewMessageTextType |
    UpdateNewMessageTextType

type AddPostType = {
    type: 'ADD-POST'
    newPostText: string
}

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddNewMessageTextType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    newMessageText: string
}

type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    updateNewMessageText: string
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    _addNewMessage: () => void
    _updateNewMessage: (updateNewMessageText: string) => void
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
            newMessageText: 'NewMessage'
        },
        siteBar: {
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
    _addPost() {
        let newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    _addNewMessage() {
        let newMessage: MessageType = {
            id: v1(),
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },
    _updateNewMessage(updateNewMessageText: string) {
        this._state.dialogsPage.newMessageText = updateNewMessageText;
        this._callSubscriber();
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
            this._addNewMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessage(action.updateNewMessageText);
        }
    }
}

export const addPostActionCreator = (newPostText: string):AddPostType => {
    return {
        type: ADD_POST,
        newPostText: newPostText}
}
export const updateNewPostTextActionCreator = (newText: string):UpdateNewPostTextType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText}
}
export const addNewMessageActionCreator = (newMessageText: string):AddNewMessageTextType => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText}
}
export const updateNewMessageActionCreator = (updateNewMessageText: string):UpdateNewMessageTextType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateNewMessageText: updateNewMessageText}
}

export default store;