'use strict';
let validInput
  , minutes // will assign to a number from M input field
  , seconds // will assign to a number from S input field
  , countingThemeInterval //see line 42
  , roundTime; // the inupt value
  //
$(document).ready(function(){
  // update the inupt value
  $( '#min, #sec' ).on('keyup click' , ( ) => {
    minutes = Number( $( '#min' ).val() );
    seconds = Number( $( '#sec' ).val() )
  })
  // start counting
  $( '#start-btn' ).click( ( ) => {
    //Self invoking function which validates the input value
    (function(){
      if (!minutes && !seconds || seconds === 0 && minutes === 0 ) { //If the input is "" or 0 on both fields
        $('#min , #sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('invalid input')
      }
      else if( minutes === 0 && seconds <= 2 ) { //If the input is less than 00:03
        $('#min , #sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('the minimum time is 00:03');
      }
      else if( seconds  > 60 ) {  //If the user input seconds greater than 60s
        $('#sec').css( 'border', '1px solid red');
        $('.input-group > h2').text('The seconds must be less than 60');
      }
      else {
        validInput = true;
      }
    }())
    //
    if( validInput ){
      roundTime = `${ ( minutes < 10 ? '0' + minutes : minutes)  }:${ ( seconds < 10 ? '0' + seconds : seconds ) }`;
      $( '#counter' ).animate({ // changes the font-size from 33px to 50px
        'font-size' : '50px'
      })
      countdown(minutes , seconds); // countdown from counter.js to start counting.
      // once the user clicks on #start-btn it constantly checks the counter value and changes the its color.
      countingThemeInterval = setInterval( ( ) => {
        if(currentMinutes === 0 && secs <= 10 ) { //if the counter < 10 seconds
          $( '#counter' ).css( 'color' , 'red' );   // Warns ther user with red color
        }
        else if( secs > 10  || currentMinutes > 0){ // if the counter > 10 seconds
          $( '#counter' ).css( 'color' , '#93f97c' ); // green color
        }
      } , 10)
    }
  })
})
