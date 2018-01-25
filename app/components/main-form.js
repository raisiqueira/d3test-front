import React from 'react';
import Forms from './forms';
import CheckoutInfo from './checkout-info';

const MainForm = ({ formError, submitFormError }) =>
    <main className="container main">
        <Forms submitErr={formError} submitFormError={submitFormError} />
        <CheckoutInfo />
    </main>;

export default MainForm;
