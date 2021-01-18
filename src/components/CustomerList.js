import React from "react";
import PropTypes from "prop-types";

const CustomerList = ({ customer, urlPath}) => {
  return (
    <div className="customer-list">
      {customer.map((c) => (
        <CustomerListItem
          key={c.dni}
          name={c.name}
          editAction={"Editar"} //TODO: usar constantes
          deleteAction={"Eliminar"} //TODO: usar constantes
          key={urlPath}
        ></CustomerListItem>
      ))}
    </div>
  );
};

CustomerList.propTypes = {
    customer: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;
