'use strict';
let validInput;
let minutes;
let seconds;
let countingThemeInterval;
$(document).ready(function(){
  let startTime;   // the inupt value
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
      $( '#counter' ).animate({ // change the font-size
        'font-size' : '50px'
      })
      countdown(minutes , seconds); // countdown from counter.js to start counting
      // once the user clicks on #start-btn it constantly checks the counter value and changes the #counter color
      countingThemeInterval = setInterval( ( ) => {
        if(currentMinutes === 0 && secs <= 10 ) {
          $( '#counter' ).css( 'color' , 'red' );   // alert ther user when the counter < 10
        }
        else if( secs > 10  || currentMinutes > 0){
          $( '#counter' ).css( 'color' , '#93f97c' ); // green color when the counter > 10
        }
      } , 10)
    }
  } )

})
