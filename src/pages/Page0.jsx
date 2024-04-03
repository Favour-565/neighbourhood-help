import React from 'react';
import PageCss from '../assets/css/page0.module.css'
import Group0 from '../assets/image/Group0.svg';
import BackArrow from '../assets/image/arrow.svg';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const Page0 = () => {
    const [value, setValue] = React.useState('');
  
    return (
      <div>
        <div className="backarrow">
          <img src={BackArrow} alt="back-arrow" />
          <a href="/page3">Back</a>
        </div>
        <div className="header">
          <h1>Receive a Package?</h1>
          <p>Get your packages delivered effortlessly. Just request, and our reliable agents <br /> will take care of the rest. Fast, secure, and hassle-free</p>
        </div>
  
        <div className="central-container">
          <div className="form-container">
            <form action="#" className="form">
              <div className="progressbar">
                <div className="progress" id="progress"></div>
  
                <div className="progress-step progress-step-active" data-title=""></div>
                <div className="progress-step" data-title=""></div>
                <div className="progress-step" data-title=""></div>
                <div className="progress-step" data-title=""></div>
              </div>
              <hr />
  
              <div className="package-header">
                <div>
                  <img src={Group0} alt="group-img" />
                </div>
                <div>
                  <h1>Payment Method</h1>
                  <p>"Choose a secure and convenient payment method for seamless <br /> transactions with peace of mind."</p>
                </div>
              </div>
  
              <div className="active">
                <div className="activegroup">
                  <label htmlFor="number">Card Number</label>
                  <input type="number" id="number" name="number" />
                </div>
                <div className="group">
                <label htmlFor="date">Expiry Date</label>
                  <input type="date" id="date" name="date" />
                </div>
              </div>
  
              <div className="active">
                <div className="activegroup">
                  <label htmlFor="name">Name of Card Owner</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="group">
                  <label htmlFor="number">CVC</label>
                  <input type="nmber" id="number" name="number"/>
                </div>
              </div>
            </form>
            <div className="prev">
              <a href="/page3" className="btn btn-prev">Previous</a>
              <a href="/page5" className="btn btn-next">Next</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Page0;
