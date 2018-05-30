import React, { Component } from 'react';
import logo from './logo.svg';
import RegistrationForm from './reduxForm';
import { link } from 'fs';
import User from './user';

class App extends Component {

  submit (values) {
    console.log(values);
  }

  render() {
    return (
      <div className="App">
        <h1>
          Registration form
        </h1>
        <RegistrationForm onSubmit={this.submit} />
        <div>
          <h2>
            Users
          </h2>
          <ol>
            <User />
          </ol>  
        </div>
      </div>
    );
  }
}

export default App;
