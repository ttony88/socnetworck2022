import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import massagesReducer from './messagesReducer'
import navbarReducer from './navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    massagesPage: massagesReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store

window.state = store.getState()