import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Checkbox from './Checkbox';
import '../signup.css'

function Signup() {
  const [client, setClient] = useState({
    fname: '',
    lname: '',
    email: '',
    town: '',
    locationZip: '',
    exp: '',
    training: false,
    payment: '',
    street: '',
    city: '',
    state: '',
    paymentZip: '',
    cardName: '',
    cardNumber: '',
    code: ''
  });

  const trainingOptions = ['Running', 'Calisthenics', 'Power Lifting', 'Boxing', 'Cycling', 'Weight Lifting', 'Yoga', 'Dancing'];

  const handleChange = event => {

  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Thankyou for signing up!!');
  }
  return (
    <div>
      <h3>Please fill out the sign up form</h3>
      <form className="signup-form">
        <label> First Name
          <input
            name="fname"
            type="text"
            value={client.fname}
            onChange={handleChange}
          />
        </label>
        <label> Last Name
          <input
            name="lname"
            type="text"
            value={client.lname}
            onChange={handleChange}
          />
        </label>
        <label className='email-label'> Email
          <input
            name="email"
            type="email"
            value={client.email}
          />
        </label>
        <label>Town
          <input
            name="town"
            type="text"
            value={client.town}
          />
        </label>
        <label> Zip Code
          <input
            name="locationZip"
            type="number"
            value={client.locationZip}
          />
        </label>
        <h3>Experience Level</h3>
        <label className="exp-label"> Beginner
          <input
            name="exp"
            type="radio"
            value="beginner"
            checked={client.exp === 'beginner'}
          />
        </label>
        <label className="exp-label"> Intermediate
          <input
            name="exp"
            type="radio"
            value="internmediate"
            checked={client.exp === 'internmediate'}
          />
        </label>
        <label className="exp-label"> Advanced
          <input
            name="exp"
            type="radio"
            value="advanced"
            checked={client.exp === 'advanced'}
          />
        </label>
        <h3>Preferred Training Style</h3>
        {trainingOptions.map(option => {
          return <Checkbox name={option} />;
        })}
        
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
            name="paymentZip"
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
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;