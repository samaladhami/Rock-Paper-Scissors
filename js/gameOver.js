'use strict';
let gameOver;
//
$( document ).ready(function(){
  let resultText;
  let resultTextColor;
  gameOver = () => {   // stop the game and show the score
    $('button').prop( 'disabled' , true ); // disable all buttons
    getResult();
    $( '#gameOver' ).html( // wins losses and draws from playEngine.js
      `<div></div>
      <h1 style='color: ${ resultTextColor }'>${ resultText }</h1>
      <h2>Wins: ${ wins }</h2>
      <h2>Losses: ${ losses }</h2>
      <h2>Draws: ${ draws }</h2>
      <button type="button" onclick='location.reload()'>Play again</button>
      `
    )
  }

  function getResult(){
    if( wins > losses ){
      resultText = 'You win!!';
      resultTextColor = '#77d673'
    }
    else {
      resultText = 'You lose!'
      resultTextColor = '#e84040'
    }
  }
})
