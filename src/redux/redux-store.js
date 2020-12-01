import { profileReducer } from "./profile-reducer";
import { dialogReducer } from "./dialog-reducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    messagesPage: dialogReducer, 
    profilePage: profileReducer});
let store = createStore(reducers);

export default store;
