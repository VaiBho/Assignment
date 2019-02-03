import React from "react";
import Asterisk from "../Common/Asterisk";
import PropTypes from 'prop-types';

const DatePicker = ({
    htmlId,
    placeholder,
    label,
    value,
    changeHandler,
    isRequired
}) => (
    <div className="form-group">
        <label htmlFor={htmlId}>
            {label}
            {isRequired && Asterisk}
        </label>
        <input
            type="date"
            value={value}
            className="form-control"
            onChange={changeHandler}
            placeholder={placeholder}
            required
        />
    </div>
);

DatePicker.propTypes = {
    htmlId: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    isRequired: PropTypes.bool
}

export default DatePicker;
