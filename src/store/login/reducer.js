import { loginActionTypes } from './actions';

const InitialState = {
    loginInfo: null,
    registerInfo: null,
}


export const loginReducer = (state = InitialState, action) => {
    switch(action.type){
        case loginActionTypes.SET_LOGIN_INFO: 
            return {
                ...state,
                loginInfo: action.payLoad
            }
        case loginActionTypes.SET_REGISTER_INFO: 
            return {
                ...state,
                registerInfo: action.payLoad
            }
        default:
            return state
    }
}