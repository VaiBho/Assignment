import React from "react";
import Asterisk from "../Common/Asterisk";
import PropTypes from 'prop-types';

/**
 * THIS INPUT CAN BE FURTHER MODIFIED OR REPLACED TO SHOW AUTO SUGGESTIONS.
 */
const SelectInput = ({ htmlId, label, value, options, changeHandler }) => (
    <div className="form-group">
        <label htmlFor={htmlId}>
            {" "}
            {label}
            {Asterisk}{" "}
        </label>
        <select
            className="form-control"
            type="text"
            id={htmlId}
            value={value}
            
            onChange={changeHandler()}
            required
        >
            <option value="" hidden>--Select--</option>
            {options.map((city, index) => (
                <option key={index} value={city.city_code}>
                    {city.city} ({city.city_code})
                </option>
            ))}
        </select>
    </div>
);

SelectInput.propTypes = {
    htmlId: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired
}

export default SelectInput;
