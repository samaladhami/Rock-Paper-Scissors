'use strict';
$( document ).ready(function(){
  // reset the input border color
  $( '#min , #sec' ).click( ( ) => {
    $( '#min , #sec' ).removeAttr( 'style' );
    $( '.input-group > h2' ).text( '' );
  });

  $( '#start-btn' ).click( function() {
    if (validInput) {
      // disable start button and the input
      $( '#start-btn , #min , #sec' ).prop( 'disabled' , true )
               .css( 'cursor' , 'not-allowed' );
      // enable the game buttons
      $('#rock-btn , #paper-btn , #scissors-btn , #restart-btn').prop( 'disabled' , false )
                                                                .css( 'cursor' , 'default' );

      $('#restart-btn').click( () => {
        clearTimeout( tickTimeout )
        countdown(minutes , seconds);

      })
    }
    $('section').empty()
  })

})
