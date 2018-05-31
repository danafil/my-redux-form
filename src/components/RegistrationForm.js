import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Select } from './select';
import { Checkbox } from './checkbox';
import { Textarea } from './textarea';
import { RadioBtn } from './radio';
import { TextInput } from './textInput'; 

const validate =  values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = "Please enter the number!"
    }
    if (!values.about) {
        errors.about = 'Required'
    }
    if (!values.country) {
        errors.country = 'PLease select a country'
    }
    if (!values.terms) {
        errors.terms = 'Required'
    }
    if (!values.gender) {
        errors.gender = 'Required'
    }
    return errors

}

class RegistrationForm extends Component {

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field name="username" type="text" component={TextInput} label="Name"/>
                <Field name="age" type="number" component={TextInput} label="Age"/>
                <Field name="about" component={Textarea}  label="About me" />
                <Field name="country" component={Select} label="Country"/>
                <Field name="terms" component={Checkbox} type="checkbox" label="Terms"/>    
                <Field name="gender" component={RadioBtn} label="Gender" type="radio"/>
                <div>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'RegistrationForm',
    validate
})(RegistrationForm);
