import React from "react";
import { useField } from "formik";

const StudentType = ({ label, ...props }) => {
  const inputClass = "inputs " + props.minwidth;
  const [field, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue, setTouched } = helpers;
  console.log(helpers)

return (
    
    <div className={inputClass}>
      <label htmlFor={props.name}>{label}</label>

        <div className="radio">
            <input onChange={() => setValue("undergraduate")} type="radio" name={props.name} /> 
            <span>Undergraduate (BSc, BA, etc)</span>
        </div>

        <div className="radio">
            <input onChange={() => setValue("post-graduate")} type="radio" name={props.name} /> 
            <span>Post-Graduate (PGD)</span>
        </div>

        <div className="radio">
            <input onChange={() => setValue("masters")} type="radio" name={props.name} /> 
            <span>Masters (M.Sc)</span>
        </div>

        <div className="radio">
            <input onChange={() => setValue("doctorate")} type="radio" name={props.name} /> 
            <span>Doctorate (PhD)</span>
        </div>

      {meta.touched && meta.error && <em className="input-error">{meta.error}</em>}
    </div>
  );
};

export default StudentType;
