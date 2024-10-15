import React, { Fragment } from "react";
import Header from "../header";
import TextInput from "../form/TextInput";
import Select from "../form/Select";
import StudentType from "../form/StudentType";
import AgreeCheckBox from "../form/Checkbox";
import { Formik, Form } from "formik";
import * as Yup from 'yup';

const StuSignup = () => {

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("First name is required").max(20, 'Too long'),
        last_name: Yup.string().required("Last Name is required").max(20, 'Too long'),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        dob: Yup.date().required("Date of birth is required"),
        matric_no: Yup.string().required("Matric Number Required").matches(/^\d{2}\/\d{4}$/, 'Invalid Matric Number'),
        department: Yup.string().required("Department is required"),
        type: Yup.string().required("Student type is required"),
        agree: Yup.boolean().oneOf([true], "Please agree to terms and conditions"),
    });

    return (
        <Fragment>
            <Header buttonDisplay={false} />
            <div className="row formarea">
                <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3 ">
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            dob: undefined,
                            matric_no: '',
                            department: '',
                            type: '',
                            agree: false,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 4000);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="g-form">
                                <a href="jade"><i className="fa fa-arrow-left"></i></a>
                                <h4>Signup</h4>
                                <span>Let's enter your student data to continue to use the reviewer</span>
                                <div className="content">
                                    <div>
                                        <TextInput inwidth="half" label="Firstname" name="first_name" type="text" placeholder="Firstname" />
                                        <TextInput inwidth="half" label="Lastname" name="last_name" type="text" placeholder="Lastname" />
                                        <TextInput inwidth="full" label="Email Address" name="email" type="email" placeholder="Email" />
                                        <TextInput inwidth="half" label="Date of Birth" name="dob" type="date" placeholder="Date of Birth" />
                                        <TextInput inwidth="half" label="Matric No." name="matric_no" type="text" placeholder="00/0000" />                                        
                                        <Select inwidth="full" label="Select Department" name="department" options={[{ name: 'jade', id: 1 }, { name: 'Judea', id: 2 }]} />
                                    </div>
                                    <div className="divider"></div>
                                    <div>
                                        <StudentType label="Student Type" minwidth="full" name="type" />
                                        
                                    </div>
                                </div>
                                <div className="submit-area">
                                    <AgreeCheckBox name="agree" type="checkbox" />
                                    
                                    <div>
                                        <button type="submit" disabled={isSubmitting}>Sign Up</button>
                                    </div>
                                    <div className="agree">
                                        <span>Already have an account? </span><a href="login">Log in</a>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Fragment>
    );
}

export default StuSignup;
