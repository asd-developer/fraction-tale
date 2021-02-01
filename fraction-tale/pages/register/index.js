import React from 'react';
import './public/styles/register/register.css'

const RegisterPage = () => {
  return (
    <>
        <div className={styles.container}>
            <h1>Register</h1>
            <Form onSubmit={""}>
              <input type="text" placeholder="username"></input>
              <input type="text" placeholder="email"></input>
              <input type="text" placeholder="password"></input>
              <input type="text" placeholder="confirm password"></input>
              <button>Submit</button>
            </Form>
        </div>  
    </>
  );
}

export default RegisterPage;