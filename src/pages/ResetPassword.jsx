import React from 'react'
import ResetPasswordCss from '../assets/css/resetpassword.module.css'
import formImage from '../assets/image/bg.svg'
import googleIcon from '../assets/image/Google.svg'
import line from '../assets/image/line.svg'
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className={ResetPasswordCss.resetpasswordContainer}>
    
      <img src={formImage} alt="delivery-guy" />
      
      <div className={ResetPasswordCss.resetpasswordForm}>
        <div className={ResetPasswordCss.resetpasswordHeader}>
          <h1>Neighbourhood Help</h1>
          <h2>RESET YOUR PASSWORD</h2>
          <p className={ResetPasswordCss.resetpasswordParagraph}>Enter your email below and we'll send you <br /> instructions on how to reset your password.</p>
         
        </div>
       
        <div className={ResetPasswordCss.inputFields}>
          
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" />
          

          
          
        </div>
        <button type="submit" className={ResetPasswordCss.resetpasswordbtn}>Send reset instructions</button>
        <p ><span className={ResetPasswordCss.paragraph}>Don't have an account?</span> <Link to="/login">Sign In here</Link></p>
      </div>
    </div>
  )
}

export default ResetPassword