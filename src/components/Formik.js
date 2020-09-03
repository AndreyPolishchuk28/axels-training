import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { WrapperInput } from "../styled/formik";

export const FormikForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        address: ""
    };

    const validation = Yup.object({
        firstName: Yup.string()
            .required("Required"),
        lastName: Yup.string()
            .required("Required"),
        email: Yup.string()
            .email('Invalid email address')
            .required("Required"),
        gender: Yup.string()
            .required("Required"),
        address: Yup.string()
            .required("Required"),
    });

    const handleSubmit = (values, { setSubmitting, setValues, setTouched }) => {
        console.log(values);
        setSubmitting(false);
        setValues(initialValues);
        setTouched({})
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={handleSubmit}
        >
            <Form>
                <WrapperInput>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />
                </WrapperInput>

                <WrapperInput>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />
                </WrapperInput>

                <WrapperInput>
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </WrapperInput>

                <WrapperInput>
                    <label>Gender</label>
                    <Field name="gender" as="select">
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Field>
                    <ErrorMessage name="gender" />

                </WrapperInput>

                <WrapperInput>
                    <label htmlFor="address">Address</label>
                    <Field name="address" type="text" />
                    <ErrorMessage name="address" />
                </WrapperInput>


                <WrapperInput>
                    <button type="submit">Submit</button>
                </WrapperInput>

            </Form>
        </Formik>
    );
};
