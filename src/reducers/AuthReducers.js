import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

const INITIAL_STATE={ 
    email:'',
    password:'',
    user: null,
    error: '',
    loading: false
};

export default (state=INITIAL_STATE, actions)=> {
    console.log(actions);
    switch(actions.type){
        case EMAIL_CHANGED:
            return {...state, email: actions.payload};
        case PASSWORD_CHANGED:
            return {...state, password: actions.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};       
        case LOGIN_USER_SUCCESS: 
            return {...state,user: actions.payload,... INITIAL_STATE };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication failed !!',
                password: '',
                loading: false
            };  
        default:
            return state;
    }
};