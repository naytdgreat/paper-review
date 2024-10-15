import React, { useRef, useState } from "react";
import plus from '../../../src/images/plus.png';
import { useField, useFormikContext } from "formik";

const UploadInput = ({ label, ...props }) => {
    const fileInputRef = useRef(null);
    const [field, meta] = useField(props.name);
    const [ fileName, setFileName ] = useState('');
    const { setFieldValue } = useFormikContext();

    const inputClass = "inputs " + props.inwidth;

    const handleClick = () => {
        fileInputRef.current.click(); // Trigger input click when div is clicked
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        let reader = new FileReader();
        reader.onloadend = () => {
            if(reader.readyState === 2){
                setFieldValue('cv', reader.result);
            }
        }
        reader.readAsDataURL(file);
        
    };

    return (
        <div className={inputClass}>
            <label >{label}</label>
            <input
                className="upload"
                type="file"
                {...field}
                {...props}
                ref={fileInputRef}
                onChange={handleFileChange}
                value="" // Ensure input value is empty to allow reselection of the same file
            />
            <div htmlFor={props.name} className="upload-div" style={{ cursor: 'pointer' }} onClick={handleClick}>
                <img src={plus} alt="upload icon" />
                <span className="bold">{fileName ? 'Selected file' : 'Upload'}</span>
                <span>{fileName ? fileName : 'click to upload your curriculum vitae'}</span>
            </div>
            {meta.touched && meta.error && <em className="input-error">{meta.error}</em>}
        </div>
    );
}

export default UploadInput;
