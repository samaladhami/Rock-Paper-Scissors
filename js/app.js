$(document).ready(function(){
  'use strict'
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
    let minutes = Number( timeArray[0] );
    let seconds = Number( timeArray[1] );
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
  } )

})
