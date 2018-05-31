// Initial state
const initialState = {
    users: [],
    loading: false
}

// Actions
const ADD_USER = 'users/ADD_USER';


//Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case  ADD_USER:
        const users = state.users.concat(action.user);
            return {...state, users};

        default: return state;
    }

}


//Action creators
export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}


