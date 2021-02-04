import {React, useState} from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
//STATE
  //LOGIN FORM STATE
  const [getLoginState, setLoginState] = useState({
    username: '',
    password: '',
  })

//HELPER METHODS
  //RUNS ON FORM SUBMISSION
  const submitFormHandler = (event) =>{
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
              <input className={styles.login} type="text" placeholder="Username" name="username" onChange={userHandler}/>
              <input className={styles.password}  type="password" placeholder="Password" name="password" onChange={userHandler}/>
                <button type="submit" className={styles.login_bt}>Enter</button>
              <a href="/register">
                  <button className={styles.register_bt}>Register</button> 
              </a>
            </form>
          </div>
      </nav>
  );
}

export default Navbar;