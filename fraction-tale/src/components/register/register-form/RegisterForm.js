import { React, useState } from 'react';
import axios from 'axios';

//SOCKET.IO IMPORT
import { io, Socket } from "socket.io-client";

import styles from './RegisterForm.module.scss';

const RegisterForm = () => {

  const socket = io("http://localhost:4000/",{
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });

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
    socket.emit("register user", data)
    //const res = await axios.post('http://localhost:5000/users/add',data)
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
              <input type="password" placeholder="confirm password" name="confirm_password" onChange={newUserHandler} required></input>
              <button>Submit</button>
            </form>
        </div>
    </>
  );
}

export default RegisterForm;

