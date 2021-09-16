import React, { useState,useEffect, useRef } from "react";
import "./App.css";
import useWordGame from "./useWordGame";

function App() {
  
  const {textBoxRef,text,handleChange,isTimeRunning,timeRemaining, wordCount,startGame,} = useWordGame()

  return (
    <main>
      <h1>Speed Typing Game</h1>
      <textarea ref ={textBoxRef} value={text} onChange={handleChange} disabled = {!isTimeRunning} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled = {isTimeRunning} onClick={() => startGame()}>Start Game</button>
      <h1>Word Count : {wordCount}</h1>
    </main>
  );
}

export default App;
