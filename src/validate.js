import isValidEmail from "sane-email-validation";

export const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "Required"
    }
    if (!values.lastName) {
        errors.lastName = "Required"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (!isValidEmail(values.email)) {
        errors.email = 'Invalid Email'
    }

    return errors;
};
