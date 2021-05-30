import { contentActionTypes } from './actions';

const InitialState = {
    cars: [],
    city: 'Kiev',
    title: '',
    currPage: 1,
    queryObj: {},
    oldcars: [],
    pages: 1,
    loginInfo: null,
    registerInfo: null,
    person: {},
    isContentVisible: true
}


export const contentReducer = (state = InitialState, action) => {
    switch(action.type){
        case contentActionTypes.SET_CARS: 
            return {
                ...state,
                cars: action.payLoad
            }
        case contentActionTypes.SET_CITY: 
            return {
                ...state,
                city: action.payLoad
            }
        case contentActionTypes.SET_TITLE: 
            return {
                ...state,
                title: action.payLoad
            }
        case contentActionTypes.SET_CURRENT_PAGE: 
            return {
                ...state,
                currPage: action.payLoad
            }
        case contentActionTypes.SET_QUERY_OBJ: 
            return {
                ...state,
                queryObj: action.payLoad
            }
        case contentActionTypes.SET_OLD_CARS: 
            return {
                ...state,
                oldcars: action.payLoad
            }
        case contentActionTypes.SET_PAGES: 
            return {
                ...state,
                pages: action.payLoad
            }
        case contentActionTypes.SET_LOGIN_INFO: 
            return {
                ...state,
                loginInfo: action.payLoad
            }
        case contentActionTypes.SET_REGISTER_INFO: 
            return {
                ...state,
                registerInfo: action.payLoad
            }
        case contentActionTypes.SET_PERSON: 
            return {
                ...state,
                person: action.payLoad
            }
        case contentActionTypes.SET_IS_CONTENT_VISIBLE: 
            return {
                ...state,
                isContentVisible: action.payLoad
            }
        default:
            return state
    }
}