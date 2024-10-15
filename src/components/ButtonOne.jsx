import React from "react";
import PropTypes from 'prop-types';

const ButtonOne = ( { onClick } ) => {
    return ( 
        <button onClick={onClick} type="button" className="primary-button">
            Get Started
        </button>
     );
};

ButtonOne.propTypes = {
    onClick: PropTypes.func.isRequired,
};

 
export default ButtonOne;