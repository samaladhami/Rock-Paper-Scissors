'use strict';
let validInput;
let minutes;
let seconds;
$(document).ready(function(){
  // the inupt value
  let startTime;
  let timeArray;
  // update the inupt value
  $( '#min, #sec' ).keyup( ( ) => {
    startTime = `${ $( '#min' ).val( ) }:${ $( '#sec' ).val( ) }`
    timeArray = startTime.split(':');
  })
  // start counting
  $( '#start-btn' ).click( ( ) => {
    // check the input value
    (function(){
      const min = $('#min').val();
      const sec = $('#sec').val();
      if (!parseInt( min ) && !parseInt( sec )) {
        $('#min , #sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('please input a number')
      }
      else if( Number( $('#sec').val() ) > 60 ) {
        $('#min , #sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('The seconds must be less than 60');
      }
      else {
        validInput = true;
      }
    }())
    //
    if(validInput){
      minutes = Number( timeArray[0] );
      seconds = Number( timeArray[1] );
      $( '#counter' ).animate({
        'font-size' : '50px'
      })
      // countdown from counter.js
      countdown(minutes , seconds);
      // alert ther user when the counter < 10
      let test = setInterval( ( ) => {
        if(currentMinutes === 0 && secs < 10 && secs > 0 ) {
          $( '#counter' ).css( 'color' , 'red' );
        }
        else if(secs === 0 ){
          $( '#counter' ).removeAttr( 'style' )
          clearInterval(test)
        }
        else if( secs > 10  || currentMinutes > 0){
          $( '#counter' ).css( 'color' , '#93f97c' );
        }
      } , 0)
    }
  } )

})
