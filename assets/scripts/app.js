'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authentication = require('./auth/events')
const store = require('./store')

// use require without a reference to ensure a file is bundled
// require('./example')

// player variables
const player1 = 'X'
const player2 = 'O'
let player1Wins = 0
let player2Wins = 0
let gameTies = 0
let moves = 0
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
    console.log('Player1 wins: ' + player1Wins)
    return player1Wins
  } else if (currentPlayer === player2) {
    player2Wins += 1
    console.log('Player2 wins: ' + player2Wins)
    return player2Wins
  }
}

const checkForWin = function () {
  if (store.game.cells[0] === currentPlayer && store.game.cells[1] === currentPlayer &&
     store.game.cells[2] === currentPlayer) {
    return true
  } else if (store.game.cells[0] === currentPlayer && store.game.cells[3] === currentPlayer &&
    store.game.cells[6] === currentPlayer) {
    return true
  } else if (store.game.cells[0] === currentPlayer && store.game.cells[4] === currentPlayer &&
    store.game.cells[8] === currentPlayer) {
    return true
  } else if (store.game.cells[1] === currentPlayer && store.game.cells[4] === currentPlayer &&
    store.game.cells[7] === currentPlayer) {
    return true
  } else if (store.game.cells[2] === currentPlayer && store.game.cells[5] === currentPlayer &&
    store.game.cells[8] === currentPlayer) {
    return true
  } else if (store.game.cells[2] === currentPlayer && store.game.cells[4] === currentPlayer &&
    store.game.cells[6] === currentPlayer) {
    return true
  } else if (store.game.cells[3] === currentPlayer && store.game.cells[4] === currentPlayer &&
    store.game.cells[5] === currentPlayer) {
    return true
  } else if (store.game.cells[6] === currentPlayer && store.game.cells[7] === currentPlayer &&
    store.game.cells[8] === currentPlayer) {
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
    moves = 0
    store.game.over = true
  } else if (moves === 9) {
    addTies()
    playerDisplay.innerHTML = ('It is a tie')
    console.log('It is a tie')
    moves = 0
    store.game.over = true
  }
}
// current player
let currentPlayer = player1

// displays the current player
const playerDisplay = document.getElementById('currentPlayerDisplay')

// transforms all nine game board spaces into an array

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
  $('#0').on('click', function (e) {
    if (store.game.cells[0] === '') {
      $('#0').text(currentPlayer)
      console.log($('#0').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[0] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the middle top space is clicked, the function will run
  $('#1').on('click', function (e) {
    if (store.game.cells[1] === '') {
      $('#1').text(currentPlayer)
      console.log($('#1').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[1] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the third top space is clicked, the function will run
  $('#2').on('click', function (e) {
    if (store.game.cells[2] === '') {
      $('#2').text(currentPlayer)
      console.log($('#2').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[2] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the first middle space is clicked, the function will run
  $('#3').on('click', function (e) {
    if (store.game.cells[3] === '') {
      $('#3').text(currentPlayer)
      console.log($('#3').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[3] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the second middle space is clicked, the function will run
  $('#4').on('click', function (e) {
    if (store.game.cells[4] === '') {
      $('#4').text(currentPlayer)
      console.log($('#4').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[4] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the third middle space is clicked, the function will run
  $('#5').on('click', function (e) {
    if (store.game.cells[5] === '') {
      $('#5').text(currentPlayer)
      console.log($('#5').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[5] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the first bottom space is clicked, the function will run
  $('#6').on('click', function (e) {
    if (store.game.cells[6] === '') {
      $('#6').text(currentPlayer)
      console.log($('#6').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[6] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the middle bottom space is clicked, the function will run
  $('#7').on('click', function (e) {
    if (store.game.cells[7] === '') {
      $('#7').text(currentPlayer)
      console.log($('#7').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[7] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the last bottom space is clicked, the function will run
  $('#8').on('click', function (e) {
    if (store.game.cells[8] === '') {
      $('#8').text(currentPlayer)
      console.log($('#8').text())
      // const index = gameSpaces.indexOf(e.target)
      // console.log(index)
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[8] = currentPlayer
      console.log(store.game.cells)
      moves += 1

      addResult()

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
})
