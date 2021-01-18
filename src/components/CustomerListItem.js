import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({name, deleteAction, editAction, urlPath, dni}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}/${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}/${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}/${dni}/del`}>{deleteAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    deleteAction: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;