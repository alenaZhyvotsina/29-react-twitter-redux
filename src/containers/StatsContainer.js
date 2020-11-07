import Stats from "../components/Stats";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changeStatsAction} from "../actions/StatsActions";

function mapStateToProps(state){
    return {
        user: {
            name: state.userReducer.user.name
        },
        stats: {
            followers: state.statsReducer.stats.followers,
            following: state.statsReducer.stats.following
        }
        /*
        user: {
            name: state.user.name
        },
         */
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        changeStats: changeStatsAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);