import React from 'react';
import { StoryBackground, Tittle, Tale, EnterQueue } from './Game.elements'

const Game = () => {
  return (
    <>
        <Tittle>Current Tale:</Tittle>
        <StoryBackground>
            <Tale>Once upon a time...</Tale>
        </StoryBackground>
        <EnterQueue>Join Queue!</EnterQueue>
    </>
  );
}

export default Game;