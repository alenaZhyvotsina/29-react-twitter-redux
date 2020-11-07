import {CHANGE_STATS} from "../actions/StatsActions";
import {initialStateStats} from "./initialState";

export default function statsReducer(state = initialStateStats, action){
    const stats = state.stats;
    switch (action.type){
        case CHANGE_STATS:
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            return {...state, stats};
        default:
            return state;
    }
}