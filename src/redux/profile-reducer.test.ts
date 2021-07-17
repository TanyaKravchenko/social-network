import profileReducer, {addPostActionCreator, deletePost, ProfileType} from './profile-reducer';
import {v1} from 'uuid';
const id1 = v1()
const id2 = v1()

let state = {
    posts: [
        {id: id1, message: 'HiHello', likes: 5},
        {id: id2, message: 'YoHello', likes: 15},
    ],
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

test('new post should be added (length of posts should be incremented)', () => {
    let action = addPostActionCreator('it-kam');

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('it-kam');

    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('it-kam');
});

test('after deleting length shouldn/t be decrement if id is incorrect', () => {
    let action = deletePost('100');

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2);
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(id1);

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1);
});
