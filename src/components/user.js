import { connect } from 'react-redux';
import React from 'react';
import { getFormValues, isValid } from 'redux-form';



let User = ({values}) => {
    if (!values) return null;
    return (
        <li>{Object.values(values)}</li>
    )
}

export default User = connect(
    state => ({
        values: getFormValues('RegistrationForm')(state)
    })
)(User)

