import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import AppFrame from "../components/AppFrame";
import CustomerActions from "./../components/CustomerActions";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              <p className="app-header-subtitle">Esto es la pantalla inicial</p>
              <CustomerActions>
                <Link to="/customers">Listado de clientes</Link>
              </CustomerActions>
            </div>
          }
          footer="Aplicación de ejemplo"
        ></AppFrame>
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;
