import {React, useState} from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
//STATE
  //LOGIN FORM STATE
  const [getLoginState, setLoginState] = useState({
    username: '',
    password: '',
  });

//HELPER METHODS
  //RUNS ON FORM SUBMISSION
  const submitFormHandler = async (event) =>{

    event.preventDefault();
  }

  //HANDLES CHANGE TO THE USERNAME AND PASSWORD INPUTS
  const userHandler = (event) =>{
    setLoginState({...getLoginState, [event.target.name] : event.target.value});
  }

  return (
      <nav className={styles.sticky_navbar}>
          <div className={styles.flexstart}>
              <a href="/"><h1 className={styles.page_title} href="/">Fraction Tale</h1></a>
          </div>
          <div className={styles.flexend}>
            <form onSubmit={submitFormHandler}>
              <input className={styles.username_input} type="text" placeholder="Username" name="username" onChange={userHandler} required/>
              <input className={styles.password_input}  type="password" placeholder="Password" name="password" onChange={userHandler} required/>
                <button type="submit" className={styles.login_bt}>Enter</button>
              <a href="/register">
                <div className={styles.register}>Register</div> 
              </a>
            </form>
          </div>
      </nav>
  );
}

export default Navbar;