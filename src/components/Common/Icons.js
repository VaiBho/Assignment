import React from "react";
import PropTypes from 'prop-types';

const Icon = ({icon, size = 16}) => {
    return (
        <React.Fragment>
            <i className={"fas " + icon} style={{fontSize: size}}/>
            {' '}
        </React.Fragment>
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number
}

export default Icon;

