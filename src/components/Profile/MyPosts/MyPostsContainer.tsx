import MyPosts from './MyPosts';
import {
    ActionType,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from '../../../redux/profile-reducer';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => {
                dispatch(addPostActionCreator());
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

// const MyPostsContainer: React.FC = (props) => {
//     debugger
//     let addPost = () => {
//         if (props.profilePage.newPostText.trim() !== '') {
//             props.dispatch(addPostActionCreator(props.profilePage.newPostText.trim()));
//             props.profilePage.newPostText = '';
//         } else {
//             alert('Error. Нужно доделать')
//         }
//     }
//
//     let onPostChange = (text: string) => {
//         props.dispatch(updateNewPostTextActionCreator(text));
//     }
//
//     return (
//         <div>
//             <MyPosts
//                 addPost={addPost}
//                 updateNewPostText={onPostChange}
//                 profilePage={props.profilePage}/>
//         </div>
//     );
// }
