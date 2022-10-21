import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import massagesReducer from './messagesReducer'
import navbarReducer from './navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    massagesPage: massagesReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

window.state = store.getState()