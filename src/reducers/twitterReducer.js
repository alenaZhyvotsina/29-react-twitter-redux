import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions";
import {CHANGE_STATS} from "../actions/StatsActions";

export default function twitterReducer(state, action) {
    const user = {...state.user};
    const stats = {...state.stats};
    switch (action.type) {
        case CHANGE_AVATAR:
            user.avatar = action.payload || user.avatar;
            return {...state, user};
        case CHANGE_NAME:
            user.name = action.payload || user.name;
            return {...state, user};

        case CHANGE_STATS:
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            return {...state, stats};

        default:
            return state;
    }
}