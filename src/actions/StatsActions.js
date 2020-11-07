export const CHANGE_STATS = 'CHANGE_STATS';
export const changeStatsAction = (fieldType, increment) => (
    {   type: CHANGE_STATS,
        //payload: {
            fieldType,
            increment
        //}
    }
)
