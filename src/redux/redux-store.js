import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers =  combineReducers({
    feedData : profileReducer,
    chatData : dialogsReducer
});



let store = createStore(reducers);

export default store;