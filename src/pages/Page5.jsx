import React from 'react';
import PageCss from '../assets/css/page5.module.css'
import Group5 from '../assets/image/Group5.svg';
import BackArrow from '../assets/image/arrow.svg';

const Page5 = () => {
  return (
    <div>
      <div className="backarrow">
        <img src={BackArrow} alt="back-arrow" />
        <a href="/page0">Back</a>
      </div>
      <div className="header">
        <h1>Receive a Package?</h1>
        <p>Get your packages delivered effortlessly. Just request, and our reliable agents <br /> will take care of the rest. Fast, secure, and hassle-free</p>
      </div>

      <div className="central-container">
        <div className="form-container">
          <form action="#" className="from">
            <div className="progressbar">
              <div className="progress" id="progress"></div>
              <div className="progress-step progress-step-active" data-title=""></div>
              <div className="progress-step" data-title=""></div>
              <div className="progress-step" data-title=""></div>
              <div className="progress-step" data-title=""></div>
            </div>
            <hr />
            
            <div className="successMessage">
              <div>
                <img src={Group5} alt="" />
              </div>
              <h2>Package Sent Successfully!</h2>
              <p>Your package has been scheduled for pickup at the <br /> designated time and date. Our trusted agent will be on their <br /> way to collect your package, ensuring a secure and timely <br /> delivery. Thank you for choosing Neighbourhood Help for your <br /> delivery needs!</p>
            </div>
            <a href="/page1" className="btn btn-next">Go to HomePage</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page5;
