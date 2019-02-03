import React from "react";
import flights from "../flights.json";
import SearchForm from './FormSearch/FormSearch';
import ShowFlights from "./ShowFlights.jsx";

const searchPanelStyle = {
  border: '1px solid #ccc',
  borderRadius: 4
}

const FlightSearch = () => (
  <div className="row">
    <div className="col-sm-12 col-md-4 col-lg-3">
      <SearchForm />
    </div>
    <div className="col-sm-12 col-md-6" style={searchPanelStyle}>
      
      <ShowFlights flights={flights} />
    </div>
  </div>
);

export default FlightSearch;

