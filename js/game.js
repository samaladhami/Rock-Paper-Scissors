'use strict';
let validInput
  , minutes
  , seconds
  , countingThemeInterval
  , roundTime // the inupt value
  //======= often used selectors ========//
  , $inputGroup_h2
  , $counter
  , $min
  , $sec
  , $startBtn
  , $user
  , $bot
  , $playBtnGroup
  , $minAndSec;
  //================
$(document).ready(function(){
  $inputGroup_h2 = $( '.input-group > h2' );
  $counter       = $( '#counter' );
  $min           = $( '#min' );
  $sec           = $( '#sec' );
  $startBtn      = $( '#start-btn' );
  $user          = $( '#user' );
  $bot           = $( '#bot' );
  $playBtnGroup  = $( '.play-btn-group button' )
  $minAndSec     = $min.add( $sec );

  //======= the inupt value =======//
  $minAndSec.keyup( () => {
    minutes = Number( $min.val() );
    seconds = Number( $sec.val() );
  })
  //===== validate the input value =====//
  const validateInput = () => {
    if (!minutes && !seconds ) { //If the input is "" or 0 on both fields
      $minAndSec.css( 'border', '1px solid red');
      $inputGroup_h2.text('invalid input');
      return false;
    }
    else if( !minutes && seconds <= 2 ) { //If the input is less than 00:03
      $minAndSec.css( 'border', '1px solid red');
      $inputGroup_h2.text('the minimum time is 00:03');
      return false;
    }
    else if( seconds  > 60 ) {  //If the user input seconds greater than 60s
      $sec.css( 'border', '1px solid red');
      $inputGroup_h2.text('The seconds must be less than 60');
      return false;
    }
    else {
      return true;
    }
  };
  //====== start counting =======//
  $startBtn.click( () => {
    validInput = validateInput();
    if( validInput ){
      roundTime = `${ ( minutes < 10 ? '0' + minutes : minutes )  }:${ ( seconds < 10 ? '0' + seconds : seconds ) }`;
      $counter.animate({ // changes the font-size from 33px to 50px
        'font-size' : '50px'
      })
      countdown( minutes, seconds ); // countdown from counter.js to start counting.
      //===========================//
      countingThemeInterval = setInterval( () => {
        if(currentMinutes === 0 && secs <= 10 ) { //if the counter < 10 seconds
          $counter.css( 'color' , 'red' );   // Warns ther user with red color
        }
        else if( secs > 10  || currentMinutes > 0){ // if the counter > 10 seconds
          $counter.css( 'color' , '#93f97c' ); // green color
        }
      } , 10)
    }
  })
})
