import React, { Component } from 'react';
import Input from './input';

class LoginForm extends Component {

    state = {
        account : {username : '' , password : ''},
        errors : {

        }
    }

    validate = () => {
        const errors = {};
        const{account} =this.state;
        if(this.state.account.username.trim() ==='')
            errors.username="Usernam required.";
        if(this.state.account.password.trim() ==='')
            errors.password="Password required.";
        
        return Object.keys(errors).length === 0 ? null : errors;
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors : errors || {}});
        if(errors) return;
    }

    validateProperty = input => {
        if(input.name === 'username') {
            if(input.value.trim() === '') return 'Username is required';
            // ..
        }

        if(input.name === 'password') {
            if(input.value.trim() === '') return 'Password is required';
            // ..
        }
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    }
    
    render() { 
        const{account, errors} = this.state;
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" 
                           value={account.username} 
                           label="username"
                           onChange={this.handleChange}
                           error={errors.username}
                    />
                    <Input name="password" 
                           value={account.password} 
                           label="password"
                           onChange={this.handleChange}
                           error={errors.password}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
          );
    }
}
 
export default LoginForm;