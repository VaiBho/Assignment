import {
    SET_FLIGHT_SEARCH_RESULT,
    SET_MIN_MAX_FARE,
    SET_FLIGHT_FILTERED_RESULT,
    SET_FLIGHT_FILTER_ORDER
} from '../constants';

export const setFlightSearchResult = result => ({
    type: SET_FLIGHT_SEARCH_RESULT,
    payload: result
});

export const setFlightFilteredResult = result => ({
    type: SET_FLIGHT_FILTERED_RESULT,
    payload: result
});

//REQUIRED FOR SLIDER
export const setMinMaxFare = fares => ({
        type: SET_MIN_MAX_FARE,
        payload: fares
})

//REQUIRED FOR SORTING RESULT
export const setFlightFilterOrder = order => ({
    type: SET_FLIGHT_FILTER_ORDER,
    payload: order
})