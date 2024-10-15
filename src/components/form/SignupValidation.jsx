import * as Yup from 'yup';

// Define validation schema for each field
export const validationSchema = {
    firstName: Yup.string().required("First name is required").max(20, 'Too long'),
    lastName: Yup.string().required("Last Name is required").max(20, 'Too long'),
    email: Yup.string().required("Email is required").email("Email Incorrect"),
    dob: Yup.date("Date incorrect").required("Date is required"),
    matric_no: Yup.string().required("Matric Number Required").matches(/^\d{2}\/\d{4}$/, 'Invalid Matric Number'),
    department: Yup.string().required("Department is Required"),
    type: Yup.string().required("Student Type is required"),
    agree: Yup.string().required("Tick Agree to Continue")
};

// Define validation functions for each field
export const validationFunctions = {
  firstName: async (value) => {
    try {
      await validationSchema.firstName.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  lastName: async (value) => {
    try {
      await validationSchema.lastName.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  email: async (value) => {
    try {
      await validationSchema.email.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  dob: async (value) => {
    try {
      await validationSchema.dob.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  matric_no: async (value) => {
    try {
      await validationSchema.matric_no.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  department: async (value) => {
    try {
      await validationSchema.department.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  type: async (value) => {
    try {
      await validationSchema.type.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  agree: async (value) => {
    try {
      await validationSchema.agree.validate(value);
    } catch (error) {
      return error.errors[0];
    }
  },
  
  // Define validation functions for other fields here
};
