$(document).ready(function(){
  let userChoice;
  let botChoice;
  let userTurn = true;
  const playArray = [ 'rock' , 'paper' , 'scissors' ]

  $('#rock-btn').click( () => {
    userTurn = false;
    userChoice = 'rock';
    $('#user').empty();
    $('#user').append('<img src="imgs/rock.png" alt="rock" />')
  })
  $('#paper-btn').click( () => {
    userTurn = false;
    userChoice = 'paper';
    $('#user').empty();
    $('#user').append('<img src="imgs/paper.png" alt="paper" />')
  })
  $('#scissors-btn').click( () => {
    userTurn = false;
    userChoice = 'scissors';
    $('#user').empty();
    $('#user').append('<img src="imgs/scissors.png" alt="scissors" />')
  });

  setInterval( ( ) => {
    if(!userTurn) {
      botChoice = playArray[ Math.floor( Math.random( ) * playArray.length ) ];
      $('#bot').empty();
      $('#bot').append(`<img src="imgs/${ botChoice }.png" alt="rock" />`);
      userTurn = true;
    }
  } , 0)

})
