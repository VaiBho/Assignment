import React from "react";
import { connect } from "react-redux";
import _SearchFlight from "./_SearchFlight";
import styled from "styled-components";
import Store from '../../redux/store';
import { setFlightFilterOrder } from '../../redux/actions';

const Select = styled.select`
    font-size: 14px;
    margin-top: 14px;
`;
const ValueWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
`;

class FilterResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            minVal: 0,
            maxVal: 0,
            order: "asc",
        };
    }

    //HANDLES SLIDER CHANGE
    handleChange = name => event => {
        const val = event.target.value;

        _SearchFlight.applyFilter(val);

        this.setState({
            [name]: val
        });
    };

    //HANDLES ORDER CHANGE (ASC/DESC)
    handleOrderChange = name => event => {
        const order = event.target.value;
        
        this.setState({
            [name]: order
        });

        //SAVE ORDER IN STORE
        Store.dispatch(setFlightFilterOrder(order));
    };

    //FOLLOWING METHOD NEEDS TO BE USED, INSTEAD OF componentWillReceiveProps()
    static getDerivedStateFromProps(nextProps, currState) {
        //check for value changed or not
        if (
            nextProps.minVal !== currState.minVal ||
            nextProps.maxVal !== currState.maxVal
        ) {
            //IF VALUES CHANGED, UPDATE PROPS WITH NEW VALUES
            return {
                value: nextProps.maxVal,
                minVal: nextProps.minVal,
                maxVal: nextProps.maxVal,
            };
        }

        //IF UPDATE, NOT REQUIRED, JUST RETURN NULL
        return null;
    }

    render() {
        const { value, minVal, maxVal, selectFilterValue } = this.state;
        
        return (
            <div className="row" style={{borderBottom: '1px solid #ccc'}}>
                <div className="col-9">
                    <ValueWrapper>
                        <div>Min: {minVal} </div>
                        <div>Selected: {value} </div>
                        <div>Max: {maxVal} </div>
                    </ValueWrapper>
                    <input
                        type="range"
                        className="custom-range"
                        min={minVal}
                        max={maxVal}
                        onChange={this.handleChange("value")}
                        value={value}
                        step="100"
                        disabled={maxVal < 1}
                    />
                </div>
                <div className="col-2">
                    <Select
                        value={selectFilterValue}
                        onChange={this.handleOrderChange(
                            "order"
                        )}
                        disabled={maxVal < 1}
                    >
                        <option value="asc">Fare: low-high</option>
                        <option value="desc">Fare: high-low</option>
                    </Select>
                </div>
            </div>
        );
    }
}

//...
const mapStateToProps = state => {
    return {
        minVal: state.fares.min,
        maxVal: state.fares.max,
        value: state.fares.max,
    };
};

export default connect(mapStateToProps)(FilterResult);
