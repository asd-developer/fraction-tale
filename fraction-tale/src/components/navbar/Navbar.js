import React from 'react';

const Navbar = () => {
  return (
      <nav className={styles.sticky_navbar}>
          <div className={styles.flexstart}>
              <h1 className={styles.page_title} href="/">Fraction Tale</h1>
          </div>
          <div className={styles.flexend}>
              <input className={styles.login} type="text" placeholder="Username"/>
              <input className={styles.password}  type="password" placeholder="Password"/>
                <a href="/login">
                  <button className={styles.login_bt}>Enter</button>
                </a>
                <a href="/register">
                  <button className={styles.register_bt}>Register</button> 
                </a>
          </div>
      </nav>
  );
}

export default Navbar;