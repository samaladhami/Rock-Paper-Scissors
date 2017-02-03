// the variables out of countdown function so I can have access them it on app.js
let secs;
let mins;
let currentMinutes;

// set default values to the parameters minutes = 0 and seconds = 60
function countdown(minutes, seconds = 60) {
  secs = seconds;
  mins = minutes

  function tick() {
    // subtract 1 from mins
      if (mins >= 0 && secs === 0) {
        currentMinutes = mins-1;
      }
      else {
        currentMinutes = mins
      }
      // subtract 1 from secs
      secs--;
      const counter = document.getElementById( "counter" );
      // update the counter html
      counter.innerHTML = `${ (currentMinutes < 10 ? '0' + currentMinutes : currentMinutes) }:${ (secs < 10 ? '0' + secs : secs) }`

      if( secs > 0 ) {
        // call tick after 1 second if secs > 0
          setTimeout( tick, 1000 );
      }
      else {
          if( mins >= 1 ){
              countdown( mins-1 );
          }
      }
  }
  tick();
}
