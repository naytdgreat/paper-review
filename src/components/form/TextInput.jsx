import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const inputClass = "inputs " + props.inwidth;
  //console.log("Meta properties for", props.name, meta);

  return (
    <div className={inputClass}>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <em className="input-error">{meta.error}</em>}
    </div>
  );
};

export default TextInput;
