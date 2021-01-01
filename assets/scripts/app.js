'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authentication = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// player variables
const player1 = 'X'
const player2 = 'O'
let player1Wins = 0
let player2Wins = 0
let gameTies = 0
let moves = 0
let isGameOver = false
// let scoreBoard = $('#scoreBoard').text(player1Wins + ' : ' + player2Wins)

const switchPlayer = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2
    playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
  } else if (currentPlayer === player2) {
    currentPlayer = player1
    playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
  }
}
// know the end of the game
// by knowing if it's a win or tie
// to let the users know if they tied or someone won
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
    return true
  } else if (gameSpaces[0] === currentPlayer && gameSpaces[3] === currentPlayer &&
    gameSpaces[6] === currentPlayer) {
    return true
  } else if (gameSpaces[0] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[8] === currentPlayer) {
    return true
  } else if (gameSpaces[1] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[7] === currentPlayer) {
    return true
  } else if (gameSpaces[2] === currentPlayer && gameSpaces[5] === currentPlayer &&
    gameSpaces[8] === currentPlayer) {
    return true
  } else if (gameSpaces[2] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[6] === currentPlayer) {
    return true
  } else if (gameSpaces[3] === currentPlayer && gameSpaces[4] === currentPlayer &&
    gameSpaces[5] === currentPlayer) {
    return true
  } else if (gameSpaces[6] === currentPlayer && gameSpaces[7] === currentPlayer &&
    gameSpaces[8] === currentPlayer) {
    return true
  } else {
    return false
  }
}

const addTies = function () {
  gameTies += 1
  return gameTies
}

const addResult = function () {
  if (checkForWin()) {
    addWins()
    playerDisplay.innerHTML = (currentPlayer + ' has won!')
    console.log('Someone won')
    isGameOver = true
  } else if (moves === 9) {
    addTies()
    playerDisplay.innerHTML = ('It is a tie')
    console.log('It is a tie')
    isGameOver = true
  }
}
// current player
let currentPlayer = player1

// displays the current player
const playerDisplay = document.getElementById('currentPlayerDisplay')

// transforms all nine game board spaces into an array
const gameSpaces = ['', '', '', '', '', '', '', '', '']

// // Displays who won on the screen
// const winningStatement = function () {
//   playerDisplay.innerHTML = (currentPlayer + ' wins!')
// }

// const checkForWin = function () {
//   if (gameSpaces[0], gameSpaces[1], gameSpaces[2] === currentPlayer) {
//     winningStatement()
//   }
// }

// gives the eight winning combinations
// const winningCombos = [
//   [gameSpaces[0], gameSpaces[1], gameSpaces[2]],
//   [gameSpaces[0], gameSpaces[3], gameSpaces[6]],
//   [gameSpaces[0], gameSpaces[4], gameSpaces[8]],
//   [gameSpaces[1], gameSpaces[4], gameSpaces[7]],
//   [gameSpaces[2], gameSpaces[5], gameSpaces[8]],
//   [gameSpaces[2], gameSpaces[4], gameSpaces[6]],
//   [gameSpaces[3], gameSpaces[4], gameSpaces[5]],
//   [gameSpaces[6], gameSpaces[7], gameSpaces[8]]
// ]

$(() => {
  // your JS code goes here
  $('.authenticated').hide()
  $('#sign-up').on('submit', authentication.onSignUp)
  $('#sign-in').on('submit', authentication.onSignIn)
  $('#password-change').on('submit', authentication.onChangePassword)
  $('#sign-out').on('click', authentication.onSignOut)
  $('#new-game').on('click', authentication.onNewGame)
  $('#get-games').on('click', authentication.onGetGames)

  // if the first top space is clicked, the function will run
  $('#0').one('click', function (e) {
    $('#0').text(currentPlayer)
    console.log($('#0').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[0] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the middle top space is clicked, the function will run
  $('#1').one('click', function (e) {
    $('#1').text(currentPlayer)
    console.log($('#1').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[1] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the third top space is clicked, the function will run
  $('#2').one('click', function (e) {
    $('#2').text(currentPlayer)
    console.log($('#2').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[2] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the first middle space is clicked, the function will run
  $('#3').one('click', function (e) {
    $('#3').text(currentPlayer)
    console.log($('#3').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[3] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the second middle space is clicked, the function will run
  $('#4').one('click', function (e) {
    $('#4').text(currentPlayer)
    console.log($('#4').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[4] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the third middle space is clicked, the function will run
  $('#5').one('click', function (e) {
    $('#5').text(currentPlayer)
    console.log($('#5').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[5] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the first bottom space is clicked, the function will run
  $('#6').one('click', function (e) {
    $('#6').text(currentPlayer)
    console.log($('#6').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[6] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the middle bottom space is clicked, the function will run
  $('#7').one('click', function (e) {
    $('#7').text(currentPlayer)
    console.log($('#7').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[7] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
  // if the last bottom space is clicked, the function will run
  $('#8').one('click', function (e) {
    $('#8').text(currentPlayer)
    console.log($('#8').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[8] = currentPlayer
    console.log(gameSpaces)
    moves += 1

    addResult()

    if (!isGameOver) {
      switchPlayer()
    }
  })
})
