'use strict';
let gameOver;
//
$( document ).ready(function(){
  gameOver = () => {   // stop the game and show the score
    $('button').prop( 'disabled' , true ); // disable all buttons
    $( '#gameOver' ).html(
      `<h1>You win!!</h1>
      <h2>Wins: 0</h2>
      <h2>Losses: 0</h2>
      <h2>Draws: 0</h2>
      <button type="button">Play again</button>
      `
    )
  }
})
