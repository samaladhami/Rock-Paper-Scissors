'use strict'
// the variables out of countdown function so I can have access them it on app.js
let secs;
let mins;
let currentMinutes;
let tickTimeout;
//
function countdown(minutes, seconds = 60) { // set default values to the parameters minutes = 0 and seconds = 60
  secs = seconds;
  mins = minutes
  //
  function tick() {
      if (mins >= 0 && secs === 0) {
        currentMinutes = mins-1;   // subtract 1 from the minutes
      }
      else {
        currentMinutes = mins
      }
      secs--;  // subtract 1 from seconds
      const counter = document.getElementById( "counter" );
      // update the counter
      counter.innerHTML = `${ (currentMinutes < 10 ? '0' + currentMinutes : currentMinutes) }:${ (secs < 10 ? '0' + secs : secs) }`
      if (secs === 0 && currentMinutes === 0) { // game over
        clearInterval( countingThemeInterval ) // remove the counting theme interval (countingThemeInterval from app.js)
        counter.removeAttribute( 'style' ); // reset the counter color and font-size (from app.js => countingThemeInterval)
        gameOver(); // from gameOver.js to stop the game and show the score
        return; //exit the function
      }
      else if( secs >= 0 ) {
          tickTimeout = setTimeout( tick, 1000 ); // call tick after 1 second if secs > 0
      }
      else {
          if( mins >= 1 ){
              countdown( mins-1 );
          }
      }
  }
  tick();
}
