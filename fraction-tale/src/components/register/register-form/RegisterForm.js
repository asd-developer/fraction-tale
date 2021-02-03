import React from 'react'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
  return (
    <>
        <div className={styles.container}>
            <h1>Register</h1>
            <form className={styles.register_form} onSubmit={""} >
              <input type="text" placeholder="username"></input>
              <input type="text" placeholder="email"></input>
              <input type="text" placeholder="password"></input>
              <input type="text" placeholder="confirm password"></input>
              <button>Submit</button>
            </form>
        </div>
    </>
  );
}

export default RegisterForm;

