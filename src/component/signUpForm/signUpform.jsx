import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Field is Required"),
    lastName: yup.string().required("Field is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    phone: yup
      .string()
      .required("Phone is Required")
      .matches(/^\d{10}$/, "Phone must be 10 digits"),
    hobbies: yup.array(),
    DOB: yup.string().required("Date of Birth is Required"),
    password: yup.string().required("Password is Required"),
    gender: yup.string().required("Please select your gender"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is Required"),
    profileImage: yup.mixed().required("Profile Image is Required"),
    TermsAndCondition: yup.string().required("Required"),
  });

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    hobbies: [],
    password: "",
    confirmPassword: "",
    DOB: null,
    gender: "",
    profileImage: null,
    TermsAndCondition: "",
  };

  const hobbiesOption = [
    "Driving",
    "Cooking",
    "Exploring",
    "Reading",
    "Cricket",
    "Painting",
  ];

  const handleSubmit = (values) => {
    console.log("submitted", values);
  };

  return (
    <>
      <h1>SignUp Form</h1>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className="d-grid">
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>
          <div>
            <label htmlFor="DOB">Date of Birth:</label>
            <Field type="date" name="DOB" />
            <ErrorMessage name="DOB" component="div" />
          </div>
          <div>
            <label htmlFor="hobbies">Hobbies:</label>

            <Field as="select" name="hobbies" multiple>
              {hobbiesOption.map((hobby) => (
                <option key={hobby} value={hobby}>
                  {hobby}
                </option>
              ))}
            </Field>
            <ErrorMessage name="hobbies" component="div" />
          </div>
          <div>
            <div role="group" aria-labelledby="gender-label">
              <legend id="gender-label">Gender:</legend>
              <label>
                <Field type="radio" name="gender" value="Male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="Female" />
                Female
              </label>
            </div>
            <ErrorMessage name="gender" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <div>
            <label htmlFor="profileImage">Profile Image:</label>
            <Field type="file" name="profileImage" accept="image/*" />
            <ErrorMessage name="profileImage" component="div" />
          </div>
          <div>
            <Field type="checkbox" name="TermsAndCondition" />
            <label htmlFor="TermsAndCondition">Accept Terms & Condition</label>
            <ErrorMessage name="TermsAndCondition" component="div" />
          </div>
          <div>
            <Link to="/loginForm">Already Have an Account?</Link>
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Register Yourself
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
