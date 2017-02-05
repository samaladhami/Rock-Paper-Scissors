'use strict';
let validInput;
let minutes;
let seconds;
let countingThemeInterval;
let roundTime; // the inupt value
$(document).ready(function(){
  let timeArray;
  // update the inupt value
  $( '#min, #sec' ).on('keyup click' , ( ) => {
    minutes = Number( $( '#min' ).val() );
    seconds = Number( $( '#sec' ).val() )
  })
  // start counting
  $( '#start-btn' ).click( ( ) => {
    // check the input value
    (function(){ //Self Invoking Function
      if (!minutes && !seconds || seconds === 0 && minutes === 0 ) {
        $('#min , #sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('invalid input')
      }
      else if( minutes === 0 && seconds <= 2 ) {
        $('#min , #sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('the minimum time is 00:03');
      }
      else if( seconds  > 60 ) {
        $('#sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('The seconds must be less than 60');
      }
      else {
        validInput = true;
      }
    }())
    //
    if(validInput){
      roundTime = `${ ( minutes < 10 ? '0' + minutes : minutes)  }:${ ( seconds < 10 ? '0' + seconds : seconds ) }`;
      $( '#counter' ).animate({ // change the font-size
        'font-size' : '50px'
      })
      countdown(minutes , seconds); // countdown from counter.js to start counting
      // once the user clicks on #start-btn it constantly checks the counter value and changes the #counter color
      countingThemeInterval = setInterval( ( ) => {
        if(currentMinutes === 0 && secs <= 10 ) {
          $( '#counter' ).css( 'color' , 'red' );   // Warns ther user when the counter < 10 seconds
        }
        else if( secs > 10  || currentMinutes > 0){
          $( '#counter' ).css( 'color' , '#93f97c' ); // green color when the counter > 10 seconds
        }
      } , 10)
    }
  })
})
