import React, { useState } from 'react';
import '../assets/css/page2.css';
import Group2 from '../assets/image/Group2.svg';
import BackArrow from '../assets/image/arrow.svg';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Page2 = () => {
    const [phone, setPhone] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

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
                                <img src={Group2} alt="group-img" />
                            </div>
                            <div>
                                <h1>Provide the Pickup Location and Time</h1>
                                <p>Enter your pickup location to get started. Our agents are ready to <br /> assist you. It's fast and easy!</p>
                            </div>
                        </div>

                        <div className="form-step form-step-active">
                            <div className="input-group">
                                <label htmlFor="name">Name of Sender</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            
                                <div>
                                    <label htmlFor="phone">Phone Number</label>
                                    <PhoneInput 
                                        defaultCountry="NG"
                                        value={phone}
                                        onChange={(phone) => setPhone(phone)}
                                    />
                                </div>
                            
                        </div>

                        <div className="form-step2">
                            <div className="input-group">
                                <label htmlFor="address">Street Address</label>
                                <input type="text" id="address" name="address" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="city">City/Town</label>
                                <input type="text" id="city" name="city" />
                            </div>
                        </div>

                        <div className="form-step3">
                            <div className="form-item">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="postal-Code">Postal Code</label>
                                <input type="text" id="postal-Code" name="postal-Code" />
                            </div>
                        </div>
                    </form>
                    <div className="prev">
                        <a href="/page1" className="btn btn-prev">Previous</a>
                        <a href="/page3" className="btn btn-next">Next</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page2;
