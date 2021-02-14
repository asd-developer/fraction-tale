import Head from 'next/head'
import styles from '../public/styles/Home.module.css'
import React from 'react';
import axios from 'axios'

import Game from '../src/components/game/Game'
import Navbar from '../src/components/navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Game/>
    </>
  );
}

export default Home;