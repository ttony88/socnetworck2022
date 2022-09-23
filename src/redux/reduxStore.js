import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import massagesReducer from './messagesReducer'
import navbarReducer from './navbarReducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    massagesPage: massagesReducer,
    navBar: navbarReducer
})

let store = createStore(reducers)

export default store

window.state = store.getState()