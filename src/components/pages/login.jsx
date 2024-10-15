import React, { Fragment } from "react";
import Header from "../header";
import TextInput from "../form/TextInput";
import { Formik, Form } from "formik";
import * as Yup from 'yup';

const Login = () => {

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    return (
        <Fragment>
            <Header buttonDisplay={false} />
            <div className="row formarea">
                <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4 ">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 2000);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="g-form">
                                <a href="jade"><i className="fa fa-arrow-left"></i></a>
                                <h4>Login</h4>
                                <span>Get right back into the world of writing and reviewing</span>
                                <div className="content">
                                    <div className="login-form">
                                        <TextInput inwidth="full" label="Email Address" name="email" type="email" placeholder="email@domain.com" />
                                        <TextInput inwidth="full" label="Password" name="password" type="password" placeholder="********" />
                                    </div>
                                </div>
                                <div className="submit-area login">
                                    <div>
                                        <button type="submit" disabled={isSubmitting}>Login</button>
                                    </div>
                                    <div className="agree">
                                        <span>Don't have an account? </span><a href="student-signup">Signup</a>
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

export default Login;
