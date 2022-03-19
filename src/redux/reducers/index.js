import
{   SET_USER_EMAIL,
    SET_USER_PASSWORD,
    SET_POSTS,
    SET_IMAGE,
    SET_COMMENT,
    LOGIN_STATUS,
    IS_LOGIN } from '../actions';

const initialData={
    email: 'Some Email',
    password: 'Some Password',
};

const initialStatus={
    loggedIn: 0,
    login: 'LOGIN',
}

const initialEngage={
    post: [],
    image: [],
    comment: [],
}

function statusReducer(state=initialStatus,action){
    switch(action.type){
        case IS_LOGIN:
            return {...state,loggedIn:action.payload};
        case LOGIN_STATUS:
            return {...state,login:action.payload};
        default:
            return state;    
    }
}

function userReducer(state=initialData,action) {
    switch(action.type){
        case SET_USER_EMAIL:
            return {...state,email:action.payload};
        case SET_USER_PASSWORD:
            return {...state,password:action.payload};
        default:
            return state;        
    }
    
}

function engageReducer(state=initialEngage,action){
    switch(action.type){
        case SET_POSTS:
            return {...state,post: action.payload};
        case SET_IMAGE:
            return {...state,image:action.payload};
        case SET_COMMENT:
            return {...state,comment:action.payload};
        default:
            return state;            
    }
}

export {userReducer,statusReducer,engageReducer};
