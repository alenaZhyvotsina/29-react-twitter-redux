import {createStore} from "redux";
//import twitterReducer from "../reducers/twitterReducer";
import rootReducer from "../combReducer/rootReducer";

/*
const initialState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}
*/
//export const store = createStore(twitterReducer, initialState);

export const store = createStore(rootReducer);
