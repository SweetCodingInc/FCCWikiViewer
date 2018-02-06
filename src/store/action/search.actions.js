export const SEARCH_ACTION_CONSTANTS = {
    SEARCH_START: '[START] Search',
    SEARCH_SUCCESS: '[SUCCESS] Search',
    SEARCH_FAILURE: '[FAILURE] Search',
    SELECT_RESULT: '[SELECT] Result',
    UNSELECT_RESULT: '[UNSELECT] Result'
}

export const INITIAL_SEARCH_STATE = {
    query: '',
    active: false,
    results: [],
    error: undefined,
    selection: []
};

export const SearchStartAction = payload => {
    return {
        type: SEARCH_ACTION_CONSTANTS.SEARCH_START,
        payload
    }
}

export const SearchSuccessAction = payload => {
    return {
        type: SEARCH_ACTION_CONSTANTS.SEARCH_SUCCESS,
        payload
    }
}

export const SearchFailureAction = payload => {
    return {
        type: SEARCH_ACTION_CONSTANTS.SEARCH_FAILURE,
        payload
    }
}

export const SelectResultAction = payload => {
    return {
        type: SEARCH_ACTION_CONSTANTS.SELECT_RESULT,
        payload
    }
}

export const UnselectResultAction = payload => {
    return {
        type: SEARCH_ACTION_CONSTANTS.UNSELECT_RESULT,
        payload
    }
}