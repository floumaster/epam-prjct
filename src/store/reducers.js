import { combineReducers } from "redux";
import { contentReducer as content } from "./content"
import { loginReducer as login } from "./login"
import { sortReducer as sort } from "./sort"

export const reducers = combineReducers({
    content, login, sort
})

