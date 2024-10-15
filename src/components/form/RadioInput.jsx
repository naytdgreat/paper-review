import React from "react";

const RadioInput = (props) => {
    return (  
        <div className="radio">
            <input type="radio" name="type" /> 
            <span>{props.label}</span>
        </div>
    );
}
 
export default RadioInput;