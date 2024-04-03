import React from 'react';
import SignUpCss from '../assets/css/signup.module.css'
import formImage from '../assets/image/bg.svg'
import googleIcon from '../assets/image/Google.svg'
import line from '../assets/image/line.svg'
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';


const SignUp = () => {
  const [value, setValue] = useState()

  return (
    <div className={SignUpCss.signupContainer}>
    
      <img src={formImage} alt="delivery-guy" />
      
      <div className={SignUpCss.signupForm}>
        <div className={SignUpCss.signupHeader}>
          <h1>Neighbourhood Help</h1>
          <h2>Create Your Account</h2>
          <button className={SignUpCss.googleSearch}>
              <img src={googleIcon} alt="google-icon"  /> <span>Sign in with Google</span>
          </button>
          <div className={SignUpCss.oR}>
            <img src={line} alt="line" className={SignUpCss.lineImage} /> 
            <span>OR </span> 
            <img src={line} alt="line" className={SignUpCss.lineImage}/>
            </div>
        </div>
       
        <div className={SignUpCss.inputFields}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phone">Phone Number:</label>
          {/* <input type="tel" id="phone" name="phone" /> */}
          <PhoneInput
          
             defaultCountry="NG"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit" className={SignUpCss.signupbtn}>Sign Up</button>
        <p ><span className={SignUpCss.paragraph}>Don't have an account?</span> <Link to="/login">Sign In here</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
