import Head from 'next/head'
import styles from '../public/styles/Home.module.css'
import React from 'react';

import Game from '../src/components/game/Game'

const Home = () => {
  return (
    <>
      <Game/>
    </>
  );
}

export default Game;