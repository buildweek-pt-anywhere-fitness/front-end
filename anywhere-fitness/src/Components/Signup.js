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
        {/* training style */}
        {/* fitness level */}
      </form>
    </div>
  );
}

export default Signup;