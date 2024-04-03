import React from 'react'
import Styles from '../assets/css/confirm.module.css'
import formImage from '../assets/image/bg.svg'
import googleIcon from '../assets/image/Google.svg'
import line from '../assets/image/line.svg'
import { Link } from 'react-router-dom';

const Confirm = () => {
  return (
    <div className={Styles.confirmContainer}>
    
      <img src={formImage} alt="delivery-guy" />
      
      <div className={Styles.confirmForm}>
        <div className={Styles.confirmHeader}>
          <h1>Neighbourhood Help</h1>
          <h2>RESET YOUR PASSWORD</h2>
          {/* <p className={Styles.confirmParagraph}>Enter your email below and we'll send you <br /> instructions on how to reset your password.</p> */}
         
        </div>
       
        <div className={Styles.inputFields}>
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="password">Confirm Password:</label>
          <input type="password" id="password" name="password" />
         </div>
        <button type="submit" className={Styles.confirmbtn}>Reset Password</button>
        {/* <p ><span className={Styles.paragraph}>Don't have an account?</span> <Link to="/login">Sign In here</Link></p> */}
      </div>
    </div>
  )
}

export default Confirm