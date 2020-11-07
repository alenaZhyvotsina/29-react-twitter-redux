import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";
import {initialStateUser} from "./initialState";

export default function userReducer(state = initialStateUser, action){
    //console.log('userReducer ', state.user, action.type);
    const user = state.user;
    switch (action.type) {
        case CHANGE_AVATAR:
            user.avatar = action.payload || user.avatar;
            return {...state, user};
        case CHANGE_NAME:
            user.name = action.payload || user.name;
            return {...state, user};
        default:
            return state;
    }

}