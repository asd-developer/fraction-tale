import React from 'react';
import { } from './RegisterPage.elements'

const RegisterPage = () => {
  return (
    <>
        <div>
            <h1>Register</h1>
            <form onSubmit={""}>
              <input type="text" placeholder="name"></input>
              <input type="text" placeholder="email"></input>
              <input type="text" placeholder="password"></input>
              <input type="text" placeholder="confirm password"></input>
              <button>Submit</button>
            </form>
        </div>  
    </>
  );
}

export default RegisterPage;