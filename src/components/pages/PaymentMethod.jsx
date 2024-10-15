import React, { Fragment } from "react";
import Header from "../header";
import TextInput from "../form/TextInput";
import { Formik, Form} from "formik";
import * as Yup from 'yup';

const PaymentMethod = () => {

    const isValidCreditCardNumber = (value) => {
        // Remove all non-digit characters
        const cleanedValue = value.replace(/\D/g, '');
    
        // Perform Luhn algorithm validation
        let sum = 0;
        let doubleUp = false;
        // Iterate through each digit in reverse order
        for (let i = cleanedValue.length - 1; i >= 0; i--) {
            let digit = parseInt(cleanedValue.charAt(i));
    
            if (doubleUp) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
    
            sum += digit;
            doubleUp = !doubleUp;
        }
    
        return sum % 10 === 0;
    }


    const validationSchema = Yup.object().shape({
        card_number: Yup.string().test('valid-credit-card', 'Invalid credit card number', (value) => {
            // Remove all non-digit characters
            const cleanedValue = value.replace(/\D/g, '');
        
            // Check if it passes Luhn algorithm and if it's of a valid length for common credit card types
            return isValidCreditCardNumber(cleanedValue) && cleanedValue.length >= 12 && cleanedValue.length <= 19;
        }).required("Card Number is required"),
        expiration: Yup.string().required("Card expiry is required").matches(/^\d{2}\/\d{4}$/, 'Invalid Expiration Date'),
        cvv: Yup.string().required("CVV is required").max(3, 'CVV length invalid'),
        card_holder: Yup.string().required("Cardholder's name is required"),
        password: Yup.string().required("Password is required"),
      });
      

    return (
        <Fragment>
            <Header buttonDisplay={false} />
            <div className="row formarea">
                <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4 ">
                    <Formik
                        initialValues={{
                            card_number: '',
                            expiration: '',
                            cvv: '',
                            card_holder: '',
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
                                <h4>Add Payment Method</h4>
                                <span>Add your payment method so you can add pages with one click</span>
                                <div className="content">
                                    <div className="login-form">
                                        <TextInput inwidth="full" label="Card Number" name="card_number" type="text" placeholder="0000 0000 0000 0000" />
                                        <TextInput inwidth="half" label="Expiration" name="expiration" type="text" placeholder="00/0000" />
                                        <TextInput inwidth="half" label="CVV" name="cvv" type="text" placeholder="000" max="3" />
                                        <TextInput inwidth="full" label="Cardholder Name" name="card_holder" type="text" placeholder="eg. Charles Baker" />
                                        <TextInput inwidth="full" label="Password" name="password" type="password" placeholder="********" />
                                    </div>
                                </div>
                                <div className="submit-area login">
                                    <div>
                                        <button type="submit" disabled={isSubmitting}>Get Started</button>
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

export default PaymentMethod;
