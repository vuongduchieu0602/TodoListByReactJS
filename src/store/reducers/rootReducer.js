const initialState = {
    users: [
        {id: 1, name: 'Hieu'},
        {id: 2, name: 'Nghia'}
    ],
    post: [

    ],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }

        case 'ADD_USER':
            let id = Math.floor(Math.random() * 10000);
            let user = {id:id, name: `random ${id}`}
            return {
                ...state,users:[...state.user,user]
            }

        default:
            return state;
    } 
}

export default rootReducer;