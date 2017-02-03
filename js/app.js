$(document).ready(function(){
  'use strict'
  // the inupt value
  let startTime;
  let timeArray;
  // update the inupt value
  $( '#min, #sec' ).keyup( ( ) => {
    startTime = `${ $( '#min' ).val( ) }:${ $( '#sec' ).val( ) }`
    timeArray = startTime.split(':')
  })
  // start counting
  $( '#start-btn' ).click( ( ) => {
    let minutes = Number( timeArray[0] )
    let seconds = Number( timeArray[1] )

    countdown(minutes , seconds)
  } )


})
