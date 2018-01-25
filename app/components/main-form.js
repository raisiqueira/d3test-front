import React from 'react';
import Forms from './forms';

const MainForm = ({ formError, submitFormError }) =>
    <main className="container main">
        <Forms submitErr={formError} submitFormError={submitFormError} />
    </main>;

export default MainForm;
