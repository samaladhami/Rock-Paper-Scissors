'use strict'
let chooseOne;
let wins   = 0;
let losses = 0;
let draws  = 0;
//
$(document).ready(function(){
  let userChoice;
  let botChoice;
  const botChoiceArray = [ 'rock' , 'paper' , 'scissors' ];
//
  chooseOne = function(obj){
      userChoice = obj.value;
      $('#user').empty();
      $('#user').append(`<img src="imgs/${ obj.value }.png" alt="rock" />`);
      botTurn();
      score();
  }
  //
  function botTurn(){
      botChoice = botChoiceArray[ Math.floor( Math.random( ) * botChoiceArray.length ) ];
      $('#bot').empty();
      $('#bot').append(`<img src="imgs/${ botChoice }.png" alt="rock" />`);
  }
  //
  function score(){
    if(userChoice === botChoice) {
        draws++;
        $( '.draws > h2' ).text( draws );
      }
    else if(                                                        //
             userChoice === 'rock' && botChoice === 'scissors'       // //
          || userChoice === 'scissors' && botChoice === 'paper'///////////// if win
          || userChoice === 'paper' && botChoice === 'rock'         // //
        ){                                                        //
          wins++
          $( '.wins > h2' ).text( wins );
         }
    else {
        losses++
        $( '.losses > h2' ).text( losses );
    }
  }
})
