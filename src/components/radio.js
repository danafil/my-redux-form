import React from 'react';

export const RadioBtn = ({ input, label, type, meta: { touched, error } }) => (
    <div {...input}>
        <label htmlFor="gender">{label}</label>
        <label>
            <input name="gender" component="input" type={type} value="Male"/>
            Male
        </label>
        <label>
            <input name="gender" component="input" type={type} value="Female"/>
            Female
        </label>
        {touched && (error && <span>{error}</span>)}
    </div>
)