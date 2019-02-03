/**
 * VALIDATES AFTER FORM SUBMISSION
 * @param {Object} state
 */
const validator = state => {
    if (!state.originCity) {
        return "Origin city";
    } else if (!state.destinationCity) {
        return "Destination city";

    } else if (state.originCity === state.destinationCity) {
        return "Destination must be different from source.";
    } else if (!state.departureDate) {
        return "Departure date";
    } 
    //RETURN DATE IS NOT COMPULSORY
    else if (state.passengers < 1) {
        return "atleast one passenger";
    }

    return "";
};

export default validator;
