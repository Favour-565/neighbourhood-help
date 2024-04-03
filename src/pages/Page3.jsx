import React from 'react';
import PageCss from '../assets/css/page3.module.css'
import Group3 from '../assets/image/Group3.svg';
import BackArrow from '../assets/image/arrow.svg';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const Page3 = () => {
    const [value, setValue] = React.useState('');
  
    return (
      <div>
        <div className="backarrow">
          <img src={BackArrow} alt="back-arrow" />
          <a href="/page1">Back</a>
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
                  <img src={Group3} alt="group-img" />
                </div>
                <div>
                  <h1>Where is the package being delivered to?</h1>
                  <p>“Please provide the delivery address and any special instructions for a <br /> smooth delivery. Thanks!”</p>
                </div>
              </div>
  
              <div className="form-step form-step-active">
                <div className="input-group">
                  <label htmlFor="time">Delivery Time</label>
                  <input type="time" id="time" name="time" placeholder='Height of Inches' />
                </div>
                <div className="input-group">
                <label htmlFor="date">Delivery Date</label>
                  <input type="date" id="date" name="date" placeholder='Width of Inches'/>
                </div>
              </div>
  
              <div className="form-step2">
                <div className="input-group">
                  <label htmlFor="address">Street Address</label>
                  <input type="text" id="address" name="address" />
                </div>
                <div className="input-group">
                  <label htmlFor="city">City/Town</label>
                  <input type="city" id="city" name="city"/>
                </div>
              </div>
  
              <div className="form-step3">
                <div className="form-item">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" />
                </div>
                <div className="form-item">
                  <label htmlFor="postal-Code">Postal Code</label>
                  <input type="text" id="postal-Code" name="postal-Code"  />
                </div>
              </div>
            </form>
            <div className="prev">
              <a href="/page2" className="btn btn-prev">Previous</a>
              <a href="/page0" className="btn btn-next">Next</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Page3;
