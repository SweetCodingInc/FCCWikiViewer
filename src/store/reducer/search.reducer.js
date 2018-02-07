import { SEARCH_ACTION_CONSTANTS, INITIAL_SEARCH_STATE } from '../action/search.actions';

export function SearchReducer(
    state = INITIAL_SEARCH_STATE,
    action
) {
    switch (action.type) {
        case SEARCH_ACTION_CONSTANTS.SEARCH_START:
            return { ...state, query: action.payload, active: true, results: [], error: undefined };
        case SEARCH_ACTION_CONSTANTS.SEARCH_SUCCESS:
            return { ...state, active: false, error: undefined, results: action.payload };
        case SEARCH_ACTION_CONSTANTS.SEARCH_FAILURE:
            return { ...state, active: false, results: [], error: action.payload };
        case SEARCH_ACTION_CONSTANTS.SELECT_RESULT:
            return { ...state, selection: state.selection.includes(action.payload) ? state.selection : state.selection.concat(action.payload) };
        case SEARCH_ACTION_CONSTANTS.UNSELECT_RESULT:
            return { ...state, selection: state.selection.filter(s => s.pageid !== action.payload.pageid)};
        default:
            return { ...state };
    }
}