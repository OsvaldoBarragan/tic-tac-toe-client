'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authentication = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')
const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
const playerDisplay = document.querySelector('#currentPlayerDisplay')

const gameSpaces = Array.from(document.querySelectorAll('.space'))
// const winCombos = [
//   [$('#0'), $('#1'), $('#2')],
//   [$('#0'), $('#3'), $('#6')],
//   [$('#0'), $('#4'), $('#8')],
//   [$('#1'), $('#4'), $('#7')],
//   [$('#2'), $('#5'), $('#8')],
//   [$('#2'), $('#4'), $('#6')],
//   [$('#3'), $('#4'), $('#5')],
//   [$('#6'), $('#7'), $('#8')]
// ]

$(() => {
  // your JS code goes here
  $('.authenticated').hide()
  $('#sign-up').on('submit', authentication.onSignUp)
  $('#sign-in').on('submit', authentication.onSignIn)
  $('#password-change').on('submit', authentication.onChangePassword)
  $('#sign-out').on('click', authentication.onSignOut)
  $('#new-game').on('click', authentication.onNewGame)
  $('#0').one('click', function (e) {
    $('#0').text(currentPlayer)
    console.log($('#0').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[0] += $('#0').text()
    console.log(gameSpaces)
  })
  $('#1').one('click', function (e) {
    $('#1').text(currentPlayer)
    console.log($('#1').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[1] += $('#1').text()
    console.log(gameSpaces)
  })
  $('#2').one('click', function (e) {
    $('#2').text(currentPlayer)
    console.log($('#2').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[2] += $('#2').text()
    console.log(gameSpaces)
  })
  $('#3').one('click', function (e) {
    $('#3').text(currentPlayer)
    console.log($('#3').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[3] += $('#3').text()
    console.log(gameSpaces)
  })
  $('#4').one('click', function (e) {
    $('#4').text(currentPlayer)
    console.log($('#4').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[4] += $('#4').text()
    console.log(gameSpaces)
  })
  $('#5').one('click', function (e) {
    $('#5').text(currentPlayer)
    console.log($('#5').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[5] += $('#5').text()
    console.log(gameSpaces)
  })
  $('#6').one('click', function (e) {
    $('#6').text(currentPlayer)
    console.log($('#6').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[6] += $('#6').text()
    console.log(gameSpaces)
  })
  $('#7').one('click', function (e) {
    $('#7').text(currentPlayer)
    console.log($('#7').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[7] += $('#7').text()
    console.log(gameSpaces)
  })
  $('#8').one('click', function (e) {
    $('#8').text(currentPlayer)
    console.log($('#8').text())
    const index = gameSpaces.indexOf(e.target)
    console.log(index)
    playerDisplay.innerHTML = currentPlayer
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
    gameSpaces[8] += $('#8').text()
    console.log(gameSpaces)
  })
})
