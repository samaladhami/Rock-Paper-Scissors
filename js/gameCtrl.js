'use strict';
$( document ).ready(function(){
  const $restartBtn = $('#restart-btn');
  $minAndSec.focus( ( ) => {
    $minAndSec.removeAttr( 'style' ); // reset the input border color
    $inputGroup_h2.text( '' );  // clear the warning text
  });
  $startBtn.click( () => { // when start is clicked
    if (validInput) {
      $minAndSec.add( $startBtn ).prop( 'disabled' , true ) // disable start button and the input
                                 .css( 'cursor' , 'not-allowed' );
      $playBtnGroup.add( $restartBtn ).prop( 'disabled' , false )// enable the game buttons
                                      .css( 'cursor' , 'default' );
      $restartBtn.click( () => {
        clearTimeout( tickTimeout ); // stop counter.js from calling tick function
        wins = losses = draws = 0;   // from gameEngine.js.
        $( '.score  h2' ).text( 0 ); // all "h2" that are descendants of ".score"
        countdown(minutes , seconds);//start over (countdown from counter.js)
      })
    }
  })
})
