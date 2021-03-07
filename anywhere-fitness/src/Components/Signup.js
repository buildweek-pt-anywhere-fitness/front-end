import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
// import Checkbox from './Checkbox';
// import Billing from './Billing';
import '../signup.css'

function Signup() {
  const trainingOptions = ['Running', 'Calisthenics', 'Power Lifting', 'Boxing', 'Cycling', 'Weight Lifting', 'Yoga', 'Dancing'];
  const billingOptions = ['Street', 'City', 'State', 'Zip Code', 'Cardholder Name', 'Card Number', 'Security Code'];
  const paymentOptions = ['Visa', 'Venmo', 'Paypal'];
  const personal = ['First Name', 'Last Name', 'Email', 'Town', 'zip'];
  
  const [client, setClient] = useState({
    first_name: '',
    last_name: '',
    email: '',
    town: '',
    zip: '',
    exp: '',
    training: [],
    payment: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
    cardholder_name: '',
    card_number: '',
    security_code: ''
  });

  function handleChange(event) {
    let value = event.target.value;
    setClient({...client, [event.target.name]: value })
  }

  function handleCheckbox(event) {
    if (event.target.checked) {
      // Add topping to array
      setClient({...client, training: [...client.training, event.target.value ]})
    } else {
      // Remove training from array
      let updated = client.training.filter(item => item !== event.target.value)
      setClient({...client, training: updated })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Thankyou for signing up!!');
  }
  return (
    <div>
      <h3>Please fill out the sign up form</h3>
      <form className='signup-form'>
        {personal.map(option => {
          return (
            <label> {option}
              <input
              name={option.toLowerCase().replace(' ', '_')}
              type='text'
              value={client.option}
              onChange={handleChange}
              />
            </label>
          )
        })}
        
        <h3>Experience Level</h3>
        <label className='exp-label'> Beginner
          <input
            name='exp'
            type='radio'
            value='beginner'
            checked={client.exp === 'beginner'}
          />
        </label>
        <label className='exp-label'> Intermediate
          <input
            name='exp'
            type='radio'
            value='internmediate'
            checked={client.exp === 'internmediate'}
          />
        </label>
        <label className='exp-label'> Advanced
          <input
            name='exp'
            type='radio'
            value='advanced'
            checked={client.exp === 'advanced'}
          />
        </label>
        <h3>Preferred Training Style</h3>
        {trainingOptions.map(option => {
          return (
          <label>
            <input className='training-input'
              name='training'
              type='checkbox'
              onChange={handleCheckbox}
              value={option}
            /> {option}
          </label>)
        })}

        <h3>Payment Information</h3>
        {paymentOptions.map(option => {
          return (
          <label className='pay-label'> {option}
            <input 
              name='payment'
              type='radio'
              onChange={handleChange}
            />
          </label>)
        })}
        
        <h4>Billing Address</h4>
        {billingOptions.map(option => {
          return <label> {option}
          <input className={option.toLowerCase().replace(' ', '_')}
            name={option.toLowerCase().replace(' ', '_')}
            type='text'
            onChange={handleChange}
          />
        </label>
        })}
        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;