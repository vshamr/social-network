const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Nikita', id: '1'},
        {name: 'Maks', id: '2'},
        {name: 'Neta', id: '3'},
        {name: 'Kiril', id: '4'}
    ],
    messages: [
        {id: '1', message: "Hi"},
        {id: '2', message: "How are you"},
        {id: '3', message: "Good day"}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: '4', message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_POST_BODY, body: body})