import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
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
        <h3>Experience Level</h3>
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
        <h3>Preferred Training Style</h3>
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
        <h3>Payment Information</h3>
        <label className="pay-label"> Visa
          <input
            name="payment"
            type="radio"
          />
        </label>
        <label className="pay-label"> Venmo
          <input
            name="payment"
            type="radio"
          />
        </label>
        <label className="pay-label"> Paypal
          <input
            name="payment"
            type="radio"
          />
        </label>
        <h4>Billing Address</h4>
        <label> Street
          <input
            name="street"
            type="text"
          />
        </label>
        <label> City
          <input
            name="city"
            type="text"
          />
        </label>
        <label> State
          <input
            name="state"
            type="text"
          />
        </label>
        <label> Zip Code
          <input
            name="zip"
            type="text"
          />
        </label>
        <h4>Card Info</h4>
        <label> Cardholder Name
          <input
            name="cardName"
            type="text"
          />
        </label>
        <label> Card Number
          <input
            name="cardNumber"
            type="number"
          />
        </label>
        <label> Security Code
          <input className="code-input"
            name="code"
            type="number"
          />
        </label>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Signup;