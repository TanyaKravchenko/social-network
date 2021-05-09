import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar2.jpg';

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
    siteBar:SiteBarType
}

let rerenderEntireTree = () => {
    console.log('State')
}

let state: RootStateType = {
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
        newMessageText: "NewMessage"
    },
    siteBar: {
        friendsBlock: [
            {id: v1(), friendName: 'Kostya', avatar: src1},
            {id: v1(), friendName: 'Masha', avatar: src2},
            {id: v1(), friendName: 'Misha', avatar: src3}
        ]
    }
}

export const addPost = () => {
    let newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const addNewMessage = () => {
    let newMessage: MessageType = {
        id: v1(),
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
}

export const updateNewMessage = (updateNewMessageText: string) => {
    state.dialogsPage.newMessageText = updateNewMessageText;
    rerenderEntireTree();
}

export const subscribe = (observer:any) => {
    rerenderEntireTree = observer
}

export default state;