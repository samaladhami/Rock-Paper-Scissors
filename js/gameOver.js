'use strict';
let gameOver;
let playAgain;
//
$( document ).ready(function(){
  let resultText;
  let resultTextColor;

  gameOver = () => {   // stop the game and show the score
    $('button').prop( 'disabled' , true ); // disable all buttons
    getResult();
    $( '#game-over' ).html( // wins losses and draws from playEngine.js
      `<div></div>
      <h1 style='color: ${ resultTextColor }'>${ resultText }</h1>
      <h2>Wins: ${ wins }</h2>
      <h2>Losses: ${ losses }</h2>
      <h2>Draws: ${ draws }</h2>
      <button type = "button" onclick = "playAgain()">Play again</button>
      `
    )
  }

  function getResult(){
    if( wins > losses ){
      resultText = 'You win!!';
      resultTextColor = '#77d673';
    }
    else if( wins === losses && wins || draws && !wins ){
      resultText = 'Draw!';
      resultTextColor = '#dace6e';
    }
    else if( !wins && !losses & !draws ){
      resultText = 'You didn\'t play';
      resultTextColor = '#a9a9a9';
      wins = losses = draws = 'no score'
    }
    else {
      resultText = 'You lose!';
      resultTextColor = '#de5858';
    }
  }
   playAgain = () => {
      $( '#game-over' ).empty();
      wins = losses = draws = 0;
      $( '.score  h2' ).text( 0 ); // all "h2" that are descendants of ".score"
      $( '#min , #sec' ).val( '' );
      validInput = false;
      $('#start-btn , #min , #sec').removeAttr( 'disabled style' );
  }

})
