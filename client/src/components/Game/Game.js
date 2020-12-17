import React from 'react';
import { StoryBackground, Tittle, Tale, EnterQueue, WriteFraction, SubmitFractionBT } from './Game.elements'

const Game = () => {
  return (
    <>
        <Tittle>Current Tale:</Tittle>
        <StoryBackground>
            <Tale>Once upon a time...</Tale>
        </StoryBackground>
        <EnterQueue>Join Queue!</EnterQueue>
        <WriteFraction rows="2" cols="2"></WriteFraction>
        <SubmitFractionBT>Publish Fraction</SubmitFractionBT>
    </>
  );
}

export default Game;