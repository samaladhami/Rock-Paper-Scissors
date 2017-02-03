$(document).ready(function(){

  $('#rock-btn').click( () => {
    $('#user').empty();
    $('#user').append('<img src="imgs/rock.png" alt="rock" />')
  })
  $('#paper-btn').click( () => {
    $('#user').empty();
    $('#user').append('<img src="imgs/paper.png" alt="paper" />')
  })
  $('#scissors-btn').click( () => {
    $('#user').empty();
    $('#user').append('<img src="imgs/scissors.png" alt="scissors" />')
  })
  
})
