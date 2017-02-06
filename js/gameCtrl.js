'use strict';
$( document ).ready(function(){
  const $restartBtn = $('#restart-btn');
  $minAndSec.click( ( ) => {
    $minAndSec.removeAttr( 'style' ); // reset the input border color
    $inputGroup_h2.text( '' );  // deletes the warning text
  });
  $startBtn.click( function() { // when start is clicked
    if (validInput) {
      $minAndSec.add( $startBtn ).prop( 'disabled' , true ) // disable start button and the input
                                               .css( 'cursor' , 'not-allowed' );
      $( '#rock-btn , #paper-btn , #scissors-btn' ).add( $restartBtn ).prop( 'disabled' , false )// enable the game buttons
                                                                      .css( 'cursor' , 'default' );
      $restartBtn.click( () => { //when restart is clicked
        clearTimeout( tickTimeout ); // stop counter.js from calling tick function
        wins = losses = draws = 0;   // from gameEngine.js reinitialize all scores to zero
        $( '.score  h2' ).text( 0 ); // all "h2" that are descendants of ".score"
        countdown(minutes , seconds);//start over (countdown from counter.js)
      })
    }
  })
})
