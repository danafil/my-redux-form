import React from 'react';

export const Select = ({ input, label, meta: { touched, error } }) => {
    const countries = ['Germany', 'Italy', 'USA', 'France', 'Spain'];
    return ( 
        <div>
            <label>{label}</label>
            <select {...input}>
                <option value="">Select a country...</option>
                {countries.map( c =>
                    <option value={c} key={c}>{c}</option>)
                }
            </select>
            {touched && (error && <span>{error}</span>)}
        </div>
    )
}