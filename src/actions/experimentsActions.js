import * as types from '../constants/actionTypes';

function requestData() {
    return {
        type: types.EXPERIMENTS_REQUEST,
        isLoading: true,
        error: false
    };
}

function receiveData(json) {
    return{
        type: types.EXPERIMENTS_SUCCESS,
        data: json,
        isLoading: false,
        error: false
    };
}

function receiveError(json) {
    return {
        type: types.EXPERIMENTS_FAILURE,
        data: json,
        isLoading: false,
        error: true
    };
}

export function getExperiments() {
    const url = 'http://596136068492d90011f12ce8.mockapi.io/experiments';

    return (dispatch) => {
        dispatch(requestData());
        fetch(url)
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(receiveData(items)))
        .catch((error) => dispatch(receiveError(error)));
    };
}
