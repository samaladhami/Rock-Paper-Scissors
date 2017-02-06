'use strict';
let gameOver
  , playAgain;
//=======================================//
$( document ).ready(function(){
  const $gameOverWrapper = $( '.game-over-wrapper' )
      , $gameOver        = $( '#game-over' );
  let result // Will be assigned to an ID
    , resultText // The result header text
    , resultTextColor
    , round = 1; // First round
  //=============================//
  gameOver = () => {   // stop the game and show the score
    $('button').prop( 'disabled' , true )// disable all buttons
               .removeAttr( 'style' );
    getResult(); // line 28
    $gameOverWrapper.css('z-index' , '2');
    $gameOver.html( // wins, losses and draws from gameEngine.js and roundTime from game.js
      `<div><h2>Round:${ round }</h2></div>
      <h1 style='color: ${ resultTextColor }'>${ resultText }</h1>
      <h2 id= 'your-wins' >Wins: ${ wins }</h2>
      <h2 id= 'your-losses' >Losses: ${ losses }</h2>
      <h2 id= 'your-draws' >Draws: ${ draws }</h2>
      <h2>Round time: ${ roundTime }</h2>
      <button type = "button" onclick = "playAgain()">Play again</button>
      `
    );
    $( result ).css('color' , resultTextColor ); //highlights your-wins, your-losses or your-draws on the result message
  }
  //===========================//
  function getResult(){
    if( wins > losses ){
      resultText = 'You win!!';
      resultTextColor = '#77d673';
      result = '#your-wins';
    }
    else if( wins === losses && wins || draws && !wins && !losses ){
      resultText = 'Draw!';
      resultTextColor = '#dace6e';
      result = '#your-draws';
    }
    else if( !wins && !losses & !draws ){
      resultText = 'You didn\'t play';
      resultTextColor = '#a9a9a9';
      wins = losses = draws = 'no score';
      result = null;
    }
    else {
      resultText = 'You lose!';
      resultTextColor = '#de5858';
      result = '#your-losses';
    }
  }
   playAgain = () => {
      $gameOver.empty();
      $gameOverWrapper.add( $minAndSec ).removeAttr( 'style' ); // remove added property "z-index: 2" (line 14)
      $startBtn.add( $minAndSec ).removeAttr( 'disabled' );
      wins = losses = draws = 0; //reinitialize all scores to zero
      $( '.score  h2' ).text( 0 ); // all "h2" that are descendants of ".score"
      $minAndSec.val( '' ); //empty the input fields
      validInput = false;
      minutes = seconds = null;
      round++
      $user.html('<h2>Round</h2>');
      $bot.html(`<h2>${ round }</h2>`);
  }
})
