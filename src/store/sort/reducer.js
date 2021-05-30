import { sortActionTypes } from './actions';

const InitialState = {
    nameAsc: true,
    priceAsc: true,
    capacityAsc: true
}


export const sortReducer = (state = InitialState, action) => {
    switch(action.type){
        case sortActionTypes.SET_NAME_ASC: 
            return {
                ...state,
                nameAsc: action.payLoad
            }
        case sortActionTypes.SET_PRICE_ASC: 
            return {
                ...state,
                priceAsc: action.payLoad
            }
        case sortActionTypes.SET_CAPACITY_ASC: 
            return {
                ...state,
                capacityAsc: action.payLoad
            }
        default:
            return state
    }
}