import React from "react";
import Icon from "./Icons";
import { HelperMath } from "./_HelperMath";
import PropTypes from 'prop-types';

const Rupee = ({ amount }) => {

    const FormattedAmount = HelperMath.commalize(amount);

    return (
        <React.Fragment>
            <Icon icon="fa-rupee-sign" />{' '}
            {FormattedAmount}
        </React.Fragment>
    );
};
Rupee.propTypes = {
    amount: PropTypes.string.isRequired
}
export default Rupee;