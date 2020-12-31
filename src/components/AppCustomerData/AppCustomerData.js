import React from "react";
import PropTypes from "prop-types";

const AppCustomerData = ({ nombre, dni, edad }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del clientes</h2>
        <div className="customer-data name">Nombre: {nombre}</div>
        <div className="customer-data documentnumber">DNI: {dni}</div>
		<div className="customer-data edad">EDAD: {edad}</div>
      </div>
    </div>
  );
};

AppCustomerData.propTypes = {
	nombre: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	edad: PropTypes.number.isRequired
};

export default AppCustomerData;
