import { render } from '@testing-library/react';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
      event.preventDefault();

    }
    handleOnChange=(event)=>{
   const {name,value}=event.target;
   this.setState({[name]:value})
    }

    render(){
        return(
            <div class='input-wrapper'>
            <p>I am already a member</p>
            <span>Enter your email and Password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' value={this.state.email} handleChange={this.handleOnChange} label='email'/>
                <FormInput name='password' value={this.state.password} handleChange={this.handleOnChange} label='password'/>
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
               
            </form>
            </div>
        );
    }
}

export default SignIn;