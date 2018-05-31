import React from 'react';

export const Textarea = ({ input, label, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} placeholder={label}/>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div> 
)