import React from "react";
import { useField } from "formik";

const Select = ( {label, ...props}) => {
    const [field, meta] = useField(props);
    const inputClass = "inputs "+props.inwidth;

    return (  
        <div className={inputClass}>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} name={props.name}>
                <option value="">-Select one-</option>
                {
                    props.options.map((option) => {
                        return <option key={option.id} value={option.id}>{option.name}</option>
                    })
                }
            </select>
            {meta.touched && meta.error && <em className="input-error">{meta.error}</em>}
        </div>
        
    );
}
 
export default Select;