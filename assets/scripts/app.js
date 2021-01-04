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
    return player1Wins
  } else if (currentPlayer === player2) {
    player2Wins += 1
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
    moves = 0
    store.game.over = true
  } else if (moves === 9) {
    addTies()
    playerDisplay.innerHTML = ('It is a tie')
    moves = 0
    store.game.over = true
  }
}

const changeCellBackground = function (id) {
  if (currentPlayer === player1) {
    $(id).css({ 'background-color': '#0F6A94' })
  } else {
    $(id).css({ 'background-color': '#E01631' })
  }
}
// current player
let currentPlayer = player1

// displays the current player
const playerDisplay = document.getElementById('currentPlayerDisplay')

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
    if (store.game.cells[0] === '' && !store.game.over) {
      $('#0').text(currentPlayer)
      changeCellBackground('#0')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[0] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 0, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the middle top space is clicked, the function will run
  $('#1').on('click', function (e) {
    if (store.game.cells[1] === '' && !store.game.over) {
      $('#1').text(currentPlayer)
      changeCellBackground('#1')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[1] = currentPlayer

      moves += 1

      addResult()
      authentication.onUpdateGame(e, 1, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the third top space is clicked, the function will run
  $('#2').on('click', function (e) {
    if (store.game.cells[2] === '' && !store.game.over) {
      $('#2').text(currentPlayer)
      changeCellBackground('#2')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[2] = currentPlayer

      moves += 1

      addResult()
      authentication.onUpdateGame(e, 2, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the first middle space is clicked, the function will run
  $('#3').on('click', function (e) {
    if (store.game.cells[3] === '' && !store.game.over) {
      $('#3').text(currentPlayer)
      changeCellBackground('#3')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[3] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 3, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the second middle space is clicked, the function will run
  $('#4').on('click', function (e) {
    if (store.game.cells[4] === '' && !store.game.over) {
      $('#4').text(currentPlayer)
      changeCellBackground('#4')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[4] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 4, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the third middle space is clicked, the function will run
  $('#5').on('click', function (e) {
    if (store.game.cells[5] === '' && !store.game.over) {
      $('#5').text(currentPlayer)
      changeCellBackground('#5')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[5] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 5, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the first bottom space is clicked, the function will run
  $('#6').on('click', function (e) {
    if (store.game.cells[6] === '' && !store.game.over) {
      $('#6').text(currentPlayer)
      changeCellBackground('#6')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[6] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 6, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the middle bottom space is clicked, the function will run
  $('#7').on('click', function (e) {
    if (store.game.cells[7] === '' && !store.game.over) {
      $('#7').text(currentPlayer)
      changeCellBackground('#7')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[7] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 7, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
  // if the last bottom space is clicked, the function will run
  $('#8').on('click', function (e) {
    if (store.game.cells[8] === '' && !store.game.over) {
      $('#8').text(currentPlayer)
      changeCellBackground('#8')
      playerDisplay.innerHTML = currentPlayer
      store.game.cells[8] = currentPlayer
      moves += 1

      addResult()
      authentication.onUpdateGame(e, 8, currentPlayer)

      if (!store.game.over) {
        switchPlayer()
      }
    }
  })
})
