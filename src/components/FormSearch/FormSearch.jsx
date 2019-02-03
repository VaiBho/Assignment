import React from "react";
import CustomInput from "./CustomInput";
import DatePicker from "./DatePicker";
import styled from 'styled-components';
import ElementWrapper from '../Common/ElementWrapper';
import validator from './_ValidationHelper';
import cities from '../../cities.json';
import _SearchFlight from "./_SearchFlight";

const Form = styled.form`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 4px;
`;

class SearchForm extends React.Component {
    //PROPS ARE NOT REQUIRED, NO NEED OF CONSTRUCTOR
    state = {
        originCity: '',
        destinationCity: '',
        departureDate: '',
        returnDate: '',
        passengers: 1,
        validationError: ' '
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    submitForm = e => {
        
        e.preventDefault();

        //EXECUTE VALIDATOR & GET ERROR MESSAGE IF ANY
        const formError = validator(this.state);
        
        if(formError){
            //IF ERROR, SHOW IN THE FORM
            this.setState({
                validationError: "Required: " + formError
            });

            //STOP FURTHER PROPOGATION
            return;
        } else {
            //IF FORM IS VALID, REMOVE PREVIOUSLY SHOWN MESSAGE
            this.setState({
                validationError: ''
            })
        }
        
        const params = {
            origin: this.state.originCity,
            destination: this.state.destinationCity,
        }

        //SEARCH FLIGHTS
        _SearchFlight.SearchFlights(params);
        
    }

    render() {
        const {
            originCity,
            destinationCity,
            departureDate,
            returnDate,
            passengers,
            validationError
        } = this.state;

        return (
            <Form onSubmit={this.submitForm} noValidate>
                {/* ORIGIN CITY INPUT */}
                <div className="form-row">
                    <ElementWrapper>
                        <CustomInput
                            htmlId="originCity"
                            label="Origin city"
                            value={originCity}
                            options={cities}
                            changeHandler={() =>
                                this.handleChange("originCity")
                            }
                        />
                    </ElementWrapper>

                    {/* DESTINATION CITY INPUT*/}
                    <ElementWrapper>
                        <CustomInput
                            htmlId="destinationCity"
                            label="Destination city"
                            value={destinationCity}
                            options={cities}
                            changeHandler={() =>
                                this.handleChange("destinationCity")
                            }
                        />
                    </ElementWrapper>
                </div>

                <div className="form-row">
                    {/* DEPARTURE DATE */}
                    <ElementWrapper>
                        <DatePicker
                            htmlId="departure-date"
                            value={departureDate}
                            label="Departure date"
                            changeHandler={this.handleChange("departureDate")}
                            placeholder="Departure date"
                            isRequired={true}
                        />
                    </ElementWrapper>

                    {/* RETURN DATE */}
                    <ElementWrapper>
                        <DatePicker
                            htmlId="return-date"
                            value={returnDate}
                            label="Return date"
                            changeHandler={this.handleChange("returnDate")}
                            placeholder="Return date"
                        />
                    </ElementWrapper>
                </div>

                <div className="form-row">
                    <ElementWrapper>
                        <div className="form-group">
                            <label htmlFor="passengers">Total passangers</label>
                            <input
                                id="passengers"
                                className="form-control"
                                type="number"
                                max="10"
                                min="0"
                                placeholder="Total Passangers"
                                value={passengers}
                                onChange={this.handleChange("passengers")}
                            />
                        </div>
                    </ElementWrapper>
                    <ElementWrapper>
                        <p style={{margin:5,fontSize: 14, color: '#f00'}}>{validationError} &nbsp;</p>
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Search
                        </button>
                    </ElementWrapper>
                </div>
            </Form>
        );
    }
}

export default SearchForm;
