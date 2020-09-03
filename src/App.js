import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { FormikForm, WrapperForm } from "./components/index";
import ContactForm from "../src/components/ReduxForm"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={WrapperForm} />
                <Route path='/redux_form' component={ContactForm}/>
                <Route path='/formik' component={FormikForm}/>
            </Switch>
        </Router>
    );
};

export default App;
