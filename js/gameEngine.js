'use strict'
let chooseOne; // see line 12
let wins   = 0;//
let losses = 0;//// all scores start with 0
let draws  = 0;//
//====================================//
$(document).ready(function(){
  let userChose; // see lines 13, 27, 32, 33 and 34
  let botChose;  // see lines 21, 23, 27, 32, 33 and 34
  const botChoseArray = [ 'rock' , 'paper' , 'scissors' ]; //the bot choose randomly from this array
//
  chooseOne = function(obj){ // a function that takes in an object (which is gonna be "this keyword" ) and I added 'onclick = "chooseOne( this )"' to rock-btn, paper-btn and scissors-btn.
      userChose = obj.value; // assign userChose to the value attribute value on the clicked button (see index.htm lines 38, 39 and 40 )
      $user.empty() // removes all #user children
                .append(`<img src="imgs/${ obj.value }.png" alt="${ obj.value }" />`); //adds a new image
      botTurn(); // line 20
      score(); // line 26
  }
  //========================//
  function botTurn(){
      botChose = botChoseArray[ Math.floor( Math.random( ) * botChoseArray.length ) ];// assign botChose to a random element from botChoseArray
      $bot.empty() // removes all #bot children
               .append(`<img src="imgs/${ botChose }.png" alt="rock" />`); //adds a new image
  }
  //=========================//
  function score(){
    if(userChose === botChose) { // if Draw
        draws++; //increments draws variable
        $( '.draws > h2' ).text( draws ); // updates draws block
      }
    else if(
             userChose === 'rock' && botChose === 'scissors'  ////
          || userChose === 'scissors' && botChose === 'paper'////====> if the user wins
          || userChose === 'paper' && botChose === 'rock'   ////
        ){
          wins++ // increments wins variable
          $( '.wins > h2' ).text( wins ); //updates wins block
         }
    else {
        losses++ // increments losses variable
        $( '.losses > h2' ).text( losses ); // updates losses block
    }
  }
})
