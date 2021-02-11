import React from 'react';
import styles from './Game.module.scss'

const Game = () => {
  return (
    <>
        <h1 className={styles.tittle}>Current Tale:</h1>
        <div className={styles.story_background}>
            <h1 className={styles.tale}>Once upon a time...</h1>
        </div>
        <div className={styles.button_container}>
          <button type="button" className={styles.enter_queue_bt}>Join Queue!</button>
        </div>
        <div style={{display: "none"}}>
          <textarea className={styles.write_fractions} rows="2" cols="2"></textarea>
          <button className={styles.submit_fraction_bt}>Publish Fraction</button>
        </div>
    </>
  );
}

export default Game
