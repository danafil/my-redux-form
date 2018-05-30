import React from 'react';
import DOM from 'react-dom-factories';
import { Field, reduxForm } from 'redux-form';

const countries = ['Germany', 'Italy', 'USA', 'France', 'Spain'];
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
        errors.country = 'Required'
    }
    if (!values.terms) {
        errors.terms = 'Required'
    }
    if (!values.gender) {
        errors.gender = 'Required'
    }
    return errors

}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
)
const Textarea = ({ textarea, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...textarea} placeholder={label} type={type}/>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
)

const RegistrationForm = props => {
    console.log(DOM)
    const { handleSubmit, pristine, reset, submitting, values } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Name"/>
            <Field name="age" type="number" component={renderField} label="Age"/>
            <Field name="about" component={Textarea}  label="About me" />
            <div>
                <label htmlFor="country">Country</label>
                <Field name="country" component={country =>
                    <div>
                        <select {...country}>
                            <option value="">Select a country...</option>
                            {countries.map( c =>
                                <option value={c} key={c}>{c}</option>)
                            }
                        </select>
                            {country.touched && country.error && <span>{country.error}</span>}
                    </div>
                }/>
            </div>
            <label htmlFor="terms">Terms</label>
            <Field name="terms" component="input" type="checkbox" label="Terms"/>
            <div>
                <label htmlFor="gender">Gender</label>
                <label>
                    <Field name="gender" component="input" type="radio" value="Male"/>
                    Male
                </label>
                <label>
                    <Field name="gender" component="input" type="radio" value="Female"/>
                    Female
                </label>
                <Field name="gender" component={gender => gender.touched && gender.error ? <span>{gender.error}</span> : null}/>
            </div>
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
            <div>
                {values}
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'RegistrationForm',
    validate
})(RegistrationForm);
