import React from "react";
import FlightDetails from "./FlightDetails";
import { connect } from "react-redux";
import FilterResult from "./FormSearch/FilterResult";
import { HelperMath } from "./Common/_HelperMath";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Common/Icons";

const ResultPlaceholder = styled.div`
    padding: 40px;
    padding-left: 80px;
    height: 100%;
    width: 100%;
    opacity: 0.1;
`;

const ShowFlights = ({ flights, sortOrder, searchPerformed }) => {
    const sortedFlights = HelperMath.sortArray(flights, "fare", sortOrder);

    return (
        <div>
            {/* CONTROLS FOR FILTERING RESULTS */}
            <FilterResult />

            {!searchPerformed && (
                <ResultPlaceholder>
                    <Icon icon="fa-search" size={380} />
                </ResultPlaceholder>
            )}

            {/* SEARCH RESULT CONTAINER */}
            {sortedFlights.length > 0 && (
                <div style={{ height: "65vh", overflow: "auto" }}>
                    {sortedFlights.map((flight, index) => (
                        <FlightDetails key={index} details={flight} />
                    ))}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        flights: state.filteredSearchResult,
        sortOrder: state.showFlightsOrder,
        searchPerformed: state.searchPerformed
    };
};

ShowFlights.propTypes = {
    flights: PropTypes.array.isRequired,
    sortOrder: PropTypes.string
};

export default connect(mapStateToProps)(ShowFlights);
