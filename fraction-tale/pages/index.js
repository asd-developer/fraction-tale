import Head from 'next/head'
import styles from '../public/styles/Home.module.css'
import React from 'react';
import axios from 'axios'

//SOCKET.IO IMPORT
import { io } from "socket.io-client";

import Game from '../src/components/game/Game'
import Navbar from '../src/components/navbar/Navbar'

const Home = () => {
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
      <Navbar/>
      <Game/>
    </>
  );
}

export default Home;