import React from 'react';
import LoginCss from '../assets/css/login.module.css'
import formImage from '../assets/image/bg.svg'
import googleIcon from '../assets/image/Google.svg'
import line from '../assets/image/line.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    // const [value, setValue] = useState()
  return (
    <div className={LoginCss.loginContainer}>
    
      <img src={formImage} alt="delivery-guy" />
      
      <div className={LoginCss.loginForm}>
        <div className={LoginCss.loginHeader}>
          <h1>Neighbourhood Help</h1>
          <h2>Welcome Back</h2>
          <button className={LoginCss.googleSearch}>
              <img src={googleIcon} alt="google-icon"  /> <span>Sign in with Google</span>
          </button>
          <div className={LoginCss.oR}>
            <img src={line} alt="line" className={LoginCss.lineImage} /> 
            <span>OR </span> 
            <img src={line} alt="line" className={LoginCss.lineImage}/>
            </div>
        </div>
       
        <div className={LoginCss.inputFields}>
          
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" />
          

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          
        </div>
        <button type="submit" className={LoginCss.loginbtn}>Sign Up</button>
        <p ><span className={LoginCss.paragraph}>Don't have an account?</span> <Link to="/login">Sign In here</Link></p>
      </div>
    </div>
  );
};

export default Login;



