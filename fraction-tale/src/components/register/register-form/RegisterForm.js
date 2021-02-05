import { React, useState } from 'react'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
//STATE
  //REGISTER FORM STATE
  const [getNewUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const submitRegisterForm = async (event) =>{
    event.preventDefault();
    const data ={
      username: getNewUser.username,
      email: getNewUser.email,
      password: getNewUser.password,
    };
        const res = await fetch('/users/add', {
          method: 'POST',
          body: JSON.stringify(data),
      });
  } 

  const newUserHandler = (event) =>{
    setNewUser({...getNewUser, [event.target.name] : event.target.value});
  }

  return (
    <>
        <div className={styles.container}>
            <h1>Register</h1>
            <form className={styles.register_form} onSubmit={submitRegisterForm} required>
              <input type="text" placeholder="username" name="username" onChange={newUserHandler} required></input>
              <input type="email" placeholder="email" name="email" onChange={newUserHandler} required></input>
              <input type="password" placeholder="password" name="password" onChange={newUserHandler}  required/>
              <input type="password" placeholder="confirm password" name="confirm_password" onChange={newUserHandler} onError={()=>setErrorMessage("Passwords don't match")} required></input>
              <button>Submit</button>
            </form>
        </div>
    </>
  );
}

export default RegisterForm;

