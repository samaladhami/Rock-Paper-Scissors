'use strict';
let gameOver;
let playAgain;
//
$( document ).ready(function(){
  let result;
  let resultText;
  let resultTextColor;
  let round = 1

  gameOver = () => {   // stop the game and show the score
    $('button').prop( 'disabled' , true ); // disable all buttons
    getResult();
    $( '#game-over' ).html( // wins, losses and draws from gameEngine.js and roundTime from game.js
      `<div><h2>Round:${ round }</h2></div>
      <h1 style='color: ${ resultTextColor }'>${ resultText }</h1>
      <h2 id='you-win'>Wins: ${ wins }</h2>
      <h2 id='you-losse'>Losses: ${ losses }</h2>
      <h2 id='you-draw'>Draws: ${ draws }</h2>
      <h2>Round time: ${ roundTime }</h2>
      <button type = "button" onclick = "playAgain()">Play again</button>
      `
    );

    $( result ).css('color' , resultTextColor )
  }

  function getResult(){
    if( wins > losses ){
      resultText = 'You win!!';
      resultTextColor = '#77d673';
      result = '#you-win'
    }
    else if( wins === losses && wins || draws && !wins && !losses ){
      resultText = 'Draw!';
      resultTextColor = '#dace6e';
      result = '#you-draw'
    }
    else if( !wins && !losses & !draws ){
      resultText = 'You didn\'t play';
      resultTextColor = '#a9a9a9';
      wins = losses = draws = 'no score';
      result = null
    }
    else {
      resultText = 'You lose!';
      resultTextColor = '#de5858';
      result = '#you-losse'
    }
  }
   playAgain = () => {
      $( '#game-over' ).empty();
      wins = losses = draws = 0; //reinitialize all scores to zero
      $( '.score  h2' ).text( 0 ); // all "h2" that are descendants of ".score"
      $( '#min , #sec' ).val( '' );
      validInput = false;
      round++
      $( '#start-btn , #min , #sec' ).removeAttr( 'disabled style' );
      $( '.show-chosen > div' ).empty();
      $( '#user' ).html('<h2>Round</h2>');
      $( '#bot' ).html(`<h2>${ round }</h2>`);

  }

})
