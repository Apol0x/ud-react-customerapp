import React from 'react';
import PropTypes from 'prop-types';

const AppCustomerActions = props => {
    return (
        <div className="customer-action">
            <div>{children}</div>
        </div>
    );
};

AppCustomerActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppCustomerActions;