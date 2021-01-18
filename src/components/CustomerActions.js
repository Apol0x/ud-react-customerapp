import React from 'react';
import PropTypes from 'prop-types';

const CustomerActions = ({children}) => {
    return (
        <div className="customer-action">
            <div>{children}</div>
        </div>
    );
};

CustomerActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomerActions;