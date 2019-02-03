import {
    SET_FLIGHT_SEARCH_RESULT,
    SET_MIN_MAX_FARE,
    SET_FLIGHT_FILTERED_RESULT,
    SET_FLIGHT_FILTER_ORDER
} from "../constants";

const initialState = {
    flightSearchResult: [], //result of http request

    /**
     * when min filter is applied flights with max fares will be missing from result
     * instead of making new http request, following array is used
     */
    filteredSearchResult: [], //filter applied result,

    showFlightsOrder: "asc", //SORT ORDER

    fares: {
        //FOR SLIDER MIN MAX VALUES
        min: 0,
        max: 0
    },
    searchPerformed: false //WHETHER FORM SUBMITTED OR NOT
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHT_SEARCH_RESULT:
            return {
                ...state,
                searchPerformed: true,//when first fetched result saved to store, it means form submitted
                flightSearchResult: action.payload
            };

        case SET_FLIGHT_FILTERED_RESULT:
            return { ...state, filteredSearchResult: action.payload };

        case SET_MIN_MAX_FARE:
            return { ...state, fares: action.payload };

        case SET_FLIGHT_FILTER_ORDER:
            return { ...state, showFlightsOrder: action.payload };

        default:
            return state;
    }
};
export default rootReducer;
