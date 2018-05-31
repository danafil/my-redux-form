import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import { bindActionCreators } from 'redux';
import { addUser } from '../store/ducks/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  submit = (values) => {
    console.log(values);
    //this.setState({users: this.state.users.concat(values)})
    this.props.addUser(values)
    console.log(this.state.users);
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
            {this.props.users.map((u, i) => (
              <li key={i}>{`Name: ${u.username}, Age: ${u.age}, About: ${u.about}, Country: ${u.country}, Gender: ${u.gender} `}</li>
            ))}
          </ol>  
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {users: state.users.users};
};
const mapDispatchToProps = dispatch => bindActionCreators({
  addUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
