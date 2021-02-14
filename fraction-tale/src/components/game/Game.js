import React from 'react';
import styles from './Game.module.scss'

//SOCKET.IO IMPORT
import { io } from "socket.io-client";

const Game = () => {
  //WEBSOCKET connection
  const socket = io("http://localhost:4000/",{
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });
  
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

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
