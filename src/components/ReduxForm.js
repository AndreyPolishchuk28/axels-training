import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button } from "react-bootstrap";

import { validate } from "../validate";
import country from "../country";
import Result from "./Result";
import { Error } from "../styled/redux";

const createRender = render => ({ input, label, type, meta, ...rest }) => (
    <div>
        {render(input, label, rest)}
        {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </div>
);

const RenderInput = createRender((input, label, type) =>
    <>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...input} placeholder={label} type={type}/>
    </>
);

const RenderSelect = createRender((input, label, { children }) =>
    <>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...input} as="select" >
            {children}
        </Form.Control>
    </>
);

let ContactForm = ({ handleSubmit, submitting }) => {
    return (
        <form style={{width: '400px', margin: '0 auto'}} onSubmit={handleSubmit(Result)}>
            <div>
                <Field name="firstName"
                       component={RenderInput}
                       type="text"
                       label='First Name'
                />
            </div>
            <div>
                <Field
                    name="lastName"
                    component={RenderInput}
                    type="text"
                    label="Last Name"
                />
            </div>
            <div>
                <Field name="email"
                       component={RenderInput}
                       type="email"
                       label="Email"
                />
            </div>
            <div>
                <Field name="country"
                       component={RenderSelect}
                       label="Country"
                >
                    <option />
                    {country.map(country =>
                        <option key={country} value={country}>
                            {country}
                        </option>
                    )}
                </Field>
            </div>
            <Button style={{marginTop: '20px'}} type="submit" disabled={submitting}>Submit</Button>
        </form>
    );
};

ContactForm = reduxForm({
    form: 'contact',
    destroyOnUnmount: false,
    validate
})(ContactForm);

export default ContactForm
