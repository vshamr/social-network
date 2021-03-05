const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: '1', message: 'Hi, everybody', likeCount: '15'},
        {id: '2', message: "It's my first posts", likeCount: '16'}
    ],
    newPostText: 'Kyky'
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let copyState = {...state};
            copyState.posts = [...state.posts];
            copyState.posts.push(newPost);
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            copyState.posts = [...state.posts];
            copyState.newPostText = action.newText;
            return copyState;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})