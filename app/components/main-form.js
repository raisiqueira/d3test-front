import React from 'react';
import Forms from './forms';
import CheckoutInfo from './checkout-info';

const MainForm = ({ submitErr, submitFormError }) =>
    <main className="container main">
        <Forms submitErr={submitErr} submitFormError={submitFormError} />
        <CheckoutInfo />
    </main>;

export default MainForm;
