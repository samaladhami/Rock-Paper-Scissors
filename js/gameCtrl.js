'use strict';
$( document ).ready(function(){
  $( '#min , #sec' ).click( ( ) => {   // reset the input border color
    $( '#min , #sec' ).removeAttr( 'style' );
    $( '.input-group > h2' ).text( '' );
  });

  $( '#start-btn' ).click( function() { // when start is clicked
    if (validInput) {
      $( '#start-btn , #min , #sec' ).prop( 'disabled' , true ) // disable start button and the input
                                     .css( 'cursor' , 'not-allowed' );
      $('#rock-btn , #paper-btn , #scissors-btn , #restart-btn').prop( 'disabled' , false )// enable the game buttons
                                                                .css( 'cursor' , 'default' );
      $('#restart-btn').click( () => { //when restart is clicked
        clearTimeout( tickTimeout ); // stop counter.js from calling tick function
        wins = losses = draws = 0;   // from gameEngine.js reinitialize all scores to zero
        $( '.score  h2' ).text( 0 ); // all "h2" that are descendants of ".score"
        countdown(minutes , seconds);//start over (countdown from counter.js)

      })
    }
  })
})
