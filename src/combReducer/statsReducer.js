import {CHANGE_STATS} from "../actions/StatsActions";
import {initialStateStats} from "./initialState";

export default function statsReducer(state = initialStateStats, action){
    //console.log('statsReducer ', state.stats, '++', state.followers, action.type);
    const stats = state.stats;
    switch (action.type){
        case CHANGE_STATS:
            const res = stats[action.fieldType] + action.increment;
            stats[action.fieldType] = res < 0 ? 0 : res;
            return {...state, stats};
        default:
            return state;
    }
     /*
    switch (action.type){
        case CHANGE_STATS:
            const res = state[action.fieldType] + action.increment;
            state[action.fieldType] = res < 0 ? 0 : res;
            return state;
        default:
            return state;
    }

      */
}