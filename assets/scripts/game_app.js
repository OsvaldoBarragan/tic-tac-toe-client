// 'use strict'
//
// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example')
//
// const gameAuthentication = require('./games/gameEvents')
//
// // use require without a reference to ensure a file is bundled
// // require('./example')
//
// $(() => {
//   // your JS code goes here
//   $('#new-game').on('click', gameAuthentication.onNewGame)
// })

const player1 = 'X'
const player2 = 'O'
let player1Wins = 0
let player2Wins = 0
// let scoreBoard = $('#scoreBoard').text(player1Wins + ' : ' + player2Wins)
const switchPlayer = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2
    playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
  } else {
    currentPlayer = player1
    playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
  }
}

const addWins = function () {
  if (currentPlayer === player1) {
    player1Wins += 1
    console.log(player1Wins)
    return player1Wins
  } else if (currentPlayer === player2) {
    player2Wins += 1
    console.log(player2Wins)
    return player2Wins
  }
}

const checkForWin = function () {
  if (gameSpaces[0] === currentPlayer && gameSpaces[1] === currentPlayer &&
     gameSpaces[2] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[0] === currentPlayer && gameSpaces[3] === currentPlayer &&
    gameSpaces[6] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[0] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[8] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[1] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[7] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[2] === currentPlayer && gameSpaces[5] === currentPlayer &&
    gameSpaces[8] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[2] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[6] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[3] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[5] === currentPlayer) {
    console.log('Win')
    addWins()
  } else if (gameSpaces[6] === currentPlayer && gameSpaces[7] === currentPlayer &&
    gameSpaces[8] === currentPlayer) {
    console.log('Win')
    addWins()
  }
}

// current player
let currentPlayer = player1

// displays the current player
const playerDisplay = document.querySelector('#currentPlayerDisplay')

// transforms all nine game board spaces into an array
const gameSpaces = ['', '', '', '', '', '', '', '', '']

$('#0').one('click', function (e) {
  $('#0').text(currentPlayer)
  console.log($('#0').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[0] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#1').one('click', function (e) {
  $('#1').text(currentPlayer)
  console.log($('#1').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[1] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#2').one('click', function (e) {
  $('#2').text(currentPlayer)
  console.log($('#2').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[2] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#3').one('click', function (e) {
  $('#3').text(currentPlayer)
  console.log($('#3').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[3] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#4').one('click', function (e) {
  $('#4').text(currentPlayer)
  console.log($('#4').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[4] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#5').one('click', function (e) {
  $('#5').text(currentPlayer)
  console.log($('#5').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[5] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#6').one('click', function (e) {
  $('#6').text(currentPlayer)
  console.log($('#6').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[6] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#7').one('click', function (e) {
  $('#7').text(currentPlayer)
  console.log($('#7').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[7] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})

$('#8').one('click', function (e) {
  $('#8').text(currentPlayer)
  console.log($('#8').text())
  // const index = gameSpaces.indexOf(e.target)
  // console.log(index)
  playerDisplay.innerHTML = currentPlayer
  gameSpaces[8] = currentPlayer
  console.log(gameSpaces)
  checkForWin()

  switchPlayer()
})
