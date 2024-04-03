import React from 'react';
import PageCss from '../assets/css/page1.module.css'
import Group from '../assets/image/Group.svg';
import BackArrow from '../assets/image/arrow.svg';


const Page1 = () => {
  return (
    <div>
      <div className='backarrow'>
        <img src={BackArrow} alt="back-arrow" />
        <a href="/page1">Back</a>
      </div>
      <div className='header'>
        <h1>Receive a Package?</h1>
        <p>Get your packages delivered effortlessly. Just request, and our reliable agents <br /> will take care of the rest. Fast, secure, and hassle-free</p>
      </div>

      <div className="centralContainer">
        <div className="form-container">
          <form action="#" className="form">
            {/* <h1 className="text-center">Registration Form</h1> */}
            {/* Progress bar */}
            <div className="progressbar">
              <div className="progress" id="progress"></div>

              <div className="progress-step progress-step-active" data-title=""></div>
              <div className="progress-step" data-title=""></div>
              <div className="progress-step" data-title=""></div>
              <div className="progress-step" data-title=""></div>
            </div>
            <hr />

            {/* in a case where you want to use specific styling and cut across styling  */}
            <div className={`${PageCss.packageHeader} header`}>
              <div>
                <img src={Group} alt="group-img" />
              </div>
              <div>
                <h1>What is in the Package?</h1>
                <p>Package details offer essential insights for a personalized and efficient user experience.</p>
              </div>
            </div>

            {/* Steps */}
            <div className={`${PageCss.formStep} ${PageCss.formStepActive}`}>
              <div className="input-group">
                <label htmlFor="height">Height of Package:</label>
                <select id="height" name="height">
                  <option value="1">1 inch</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="weight">Width of Package:</label>
                <select id="weight" name="weight">
                  <option value="1">1 inch</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="form-step2">
              <div className="input-group">
                <label htmlFor="weight">Weight of Package:</label>
                <select id="weight" name="weight">
                  <option value="1">1 inch</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="quantity">Quantity:</label>
                <select id="quantity" name="quantity">
                  <option value="1">1</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="form-step3">
              <div className="form-item">
                <label htmlFor="item5">Item</label>
                <input type="text" id="item5" />
              </div>
              <div className="form-item">
                <label htmlFor="item6">Additional Note</label>
                <input type="text" id="item6" placeholder="share any extra details or instructions" />
              </div>
            </div>
          </form>
          <a href="/page2" className="btn btn-next">Next</a>
        </div>
      </div>
    </div>
  );
};

export default Page1;
