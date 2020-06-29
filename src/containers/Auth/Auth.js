import React, { useState, useEffect } from 'react';

import classes from './Auth.module.css';

const Auth = props => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Mail Address'
      },
      value: '',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password'
      },
      value: '',
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false
    }
  });

  return (
    <div className={classes.Auth}>
      <form>
      <input 
          className={classes.Input}
          placeholder="Mail address" />
      <input 
          className={classes.Input}
          placeholder="Password" />
      <button 
          className={classes.Button}
          type="submit">
            SUBMIT
        </button>      
      </form>
        <button 
          className={classes.Button}
          type="submit">
            SWITCH TO
        </button>
    </div>
  );
};

export default Auth;

