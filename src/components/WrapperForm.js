import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import { WrapperButton } from "../styled/wrapperButton";

export const WrapperForm = () => {
    const history = useHistory();

    return (
        <WrapperButton>
            <Button className="btn" onClick={() => history.push("/redux_form")} type="button">Redux Form</Button>
            <Button onClick={() => history.push("/formik")} type="button">Formik</Button>
        </WrapperButton>
    );
};
