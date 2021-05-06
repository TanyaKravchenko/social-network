import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';
import src4 from '../images/avatar1.png';
import src5 from '../images/avatar2.jpg';

export type PostType = {
    id: number
    message: string
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type FriendsBlockType = {
    id: number
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

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'HiHello', likes: 5},
            {id: 2, message: 'YoHello', likes: 15}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych', avatar: src1},
            {id: 2, name: 'Sveta', avatar: src2},
            {id: 3, name: 'Valera', avatar: src3},
            {id: 4, name: 'Ignat', avatar: src4},
            {id: 5, name: 'Victor', avatar: src5},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hello!'},
        ]
    },
    siteBar: {
        friendsBlock: [
            {id: 1, friendName: 'Kostya', avatar: src1},
            {id: 2, friendName: 'Masha', avatar: src2},
            {id: 3, friendName: 'Misha', avatar: src3}
        ]
    }
}

export default state;