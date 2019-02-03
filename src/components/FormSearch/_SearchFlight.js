import flights from "../../flights.json";
import Store from "../../redux/store";
import {
    setFlightSearchResult,
    setMinMaxFare,
    setFlightFilteredResult
} from "../../redux/actions";
import { HelperMath } from "../Common/_HelperMath";

//SEARCH FLIGHTS
const SearchFlights = searchParams => {
    //FILTER ONLY DESIRED FLIGHTS
    const result = flights.filter(flight => {
        return (
            flight.source_code === searchParams.origin &&
            flight.destination_code === searchParams.destination
            //DATES MATCHING IS SKIPPED, NEED TO MATCH
        );
    });

    //SORT FLIGHTS ASCENDING DEFAULT
    HelperMath.sortArray(result, "fare", "asc");

    //STORE HTTP RESULT REDUX STORE
    Store.dispatch(setFlightSearchResult(result));
    
    //STORE COPY OF RESULT FOR APPLYING FILTERS
    Store.dispatch(setFlightFilteredResult(result));

    //GET MIN, MAX FARES TO SET TO SLIDER
    findMaxFare(result);
};


const findMaxFare = flights => {
    if(flights.length < 1) return;
    //LET'S CONSIDER FIRST FLIGHT FARE IS MINIMUM
    let minFare = parseInt(flights[0].fare);
    let maxFare = 0;

    flights.forEach(flight => {
        //THOUGH JS PARSES STRING TO INTEGER, BEFORE COMPARISON, BETTER TO PARSE VALUES
        const fare = parseInt(flight.fare);

        //COMPARE CONSIDERED MIN FARE WITH ALL FARES
        minFare = minFare > fare ? fare : minFare;

        //COMPARE MAX FARE WITH ALL FARES
        maxFare = fare > maxFare ? fare : maxFare;
    });

    //DISPATCH VALUES IN STORE, TO UPDATE FILTER COMPONENT
    Store.dispatch(setMinMaxFare({ min: minFare, max: maxFare }));
};

/**
 * 
 * @param {INTEGER} maxFare flights with less fare than maxFare will be presented
 */
const applyFilter = maxFare => {
    //GET SEARCHED FLIGHTS FROM STORE
    const flights = Store.getState().flightSearchResult;

    //FILTER FLIGHTS WITH LESS FARE THAN GIVEN MAX LIMIT
    const filteredFlights = flights.filter(
        flight => parseInt(flight.fare) <= maxFare
    );

    //STORE IN DISPATCH
    Store.dispatch(setFlightFilteredResult(filteredFlights));
};

const _SearchFlight = {
    SearchFlights,
    applyFilter
};

export default _SearchFlight;
