import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';

export type FriendsBlockType = {
    id: string
    friendName: string
    avatar: string
}

const ADD_FRIENDS = 'ADD_FRIENDS'

export type InitialStateType = typeof initialState
export type ActionType = ReturnType<typeof addFriends>

let initialState = {
    friendsBlock: [
        {id: v1(), friendName: 'Kostya', avatar: src1},
        {id: v1(), friendName: 'Masha', avatar: src2},
        {id: v1(), friendName: 'Misha', avatar: src3}
    ]
}

const sidebarReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_FRIENDS:
            return {
                ...state,
                friendsBlock: action.friendsBlock
            };
        default:
            return state;
    }
}

export const addFriends = (friendsBlock: Array<FriendsBlockType>) => ({
    type: ADD_FRIENDS,
    friendsBlock
} as const)

export default sidebarReducer;

