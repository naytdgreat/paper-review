import React from "react";
import { useField } from "formik";

const AgreeCheckBox = (props) => {
    const [field, meta, helpers] = useField(props.name);
    const { value } = meta;
    const { setValue } = helpers;

    return ( 
        <div className="agree">
            <input onChange={() => setValue(value === "on" ? "off" : "on")} {...field} {...props} /> <span>By signing up, you agree to all our </span><a href="jade">Terms & Conditions</a>
            {meta.touched && meta.error && <em className="input-error">{meta.error}</em>}
        </div>
     );
}
 
export default AgreeCheckBox;