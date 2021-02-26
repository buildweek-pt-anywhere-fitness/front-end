import React from 'react';
import '../signup.css'

function Signup() {
  return (
    <div>
      <h3>Please fill out the sign up form</h3>
      <form className="signup-form">
        <label> First Name
          <input
            name="fname"
            type="text"
          />
        </label>
        <label> Last Name
          <input
            name="lname"
            type="text"
          />
        </label>
        <label className='email-label'> Email
          <input
            name="email"
            type="email"
          />
        </label>
        <label>Town
          <input
            name="town"
            type="text"
          />
        </label>
        <label> Zip Code
          <input
            name="zip"
            type="number"
          />
        </label>
        <h4>Experience Level</h4>
        <label className="exp-label"> Beginner
          <input
            name="exp"
            type="radio"
          />
        </label>
        <label className="exp-label"> Intermediate
          <input
            name="exp"
            type="radio"
          />
        </label>
        <label className="exp-label"> Advanced
          <input
            name="exp"
            type="radio"
          />
        </label>
        <h4>Preferred Training Style</h4>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Running
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Cycling
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Calisthenics
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Weight Lifting
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Power Lifting
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Yoga
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Boxing
        </label>
        <label>
          <input className="cb-input"
            name=""
            type="checkbox"
          /> Dancing
        </label>
        <button className="payment-btn">Continue to Payment</button>
      </form> {/* close form */}
    </div>
  );
}

export default Signup;