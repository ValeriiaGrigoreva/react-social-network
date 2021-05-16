import { profileReducer } from "./profile-reducer";
import { dialogReducer } from "./dialog-reducer";
import { usersReducer } from "./users-reducer";

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    messagesPage: dialogReducer, 
    profilePage: profileReducer,
    usersPage: usersReducer,
});
let store = createStore(reducers);

export default store;
