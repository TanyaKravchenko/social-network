import {v1} from 'uuid';
import src1 from '../images/avatar3.jpg';
import src2 from '../images/avatar5.jpg';
import src3 from '../images/avatar4.jpeg';

type FriendsBlockType = {
    id: string
    friendName: string
    avatar: string
}

type InitialStateType = {
    friendsBlock: Array<FriendsBlockType>
}

let initialState: InitialStateType = {
    friendsBlock: [
        {id: v1(), friendName: 'Kostya', avatar: src1},
        {id: v1(), friendName: 'Masha', avatar: src2},
        {id: v1(), friendName: 'Misha', avatar: src3}
    ]
}

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
  return state;

}

export default sidebarReducer;

