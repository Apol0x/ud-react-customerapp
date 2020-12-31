import React from "react";
import PropTypes from "prop-types";

const AppHeader = (props) => {
  const { title } = this.props;
  return (
    <div>
      <h1 className="app-header">{title}</h1>
    </div>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeader;
