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
// let scoreBoard = $('#scoreBoard').text(player1Wins + ' : ' + player2Wins)

// current player
let currentPlayer = player1

// displays the current player
const playerDisplay = document.querySelector('#currentPlayerDisplay')

// transforms all nine game board spaces into an array
const gameSpaces = ['', '', '', '', '', '', '', '', '']

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

  // if the first top space is clicked, the function will run
  $('#0').one('click', function (e) {
    $('#0').text(currentPlayer)
    console.log($('#0').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[0] = currentPlayer
    console.log(gameSpaces)
    if (gameSpaces[0] === currentPlayer) {
      if (gameSpaces[1] === currentPlayer && gameSpaces[2] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[3] === currentPlayer && gameSpaces[6] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[4] === currentPlayer && gameSpaces[8] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }
    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
  })

  // if the second top space is clicked, the function will run
  $('#1').one('click', function (e) {
    $('#1').text(currentPlayer)
    console.log($('#1').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[1] = currentPlayer
    console.log(gameSpaces)

    if (gameSpaces[1] === currentPlayer) {
      if (gameSpaces[0] === currentPlayer && gameSpaces[2] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[4] === currentPlayer && gameSpaces[7] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
  })

  // if the last top space is clicked, the function will run
  $('#2').one('click', function (e) {
    $('#2').text(currentPlayer)
    console.log($('#2').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[2] = currentPlayer
    console.log(gameSpaces)

    if (gameSpaces[2] === currentPlayer) {
      if (gameSpaces[0] === currentPlayer && gameSpaces[1] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[5] === currentPlayer && gameSpaces[8] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[4] === currentPlayer && gameSpaces[6] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
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

    if (gameSpaces[3] === currentPlayer) {
      if (gameSpaces[0] === currentPlayer && gameSpaces[6] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[4] === currentPlayer && gameSpaces[5] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
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

    if (gameSpaces[4] === currentPlayer) {
      if (gameSpaces[0] === currentPlayer && gameSpaces[8] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[1] === currentPlayer && gameSpaces[7] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[2] === currentPlayer && gameSpaces[6] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[3] === currentPlayer && gameSpaces[5] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
  })

  // if the last middle space is clicked, the function will run
  $('#5').one('click', function (e) {
    $('#5').text(currentPlayer)
    console.log($('#5').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[5] = currentPlayer
    console.log(gameSpaces)

    if (gameSpaces[5] === currentPlayer) {
      if (gameSpaces[2] === currentPlayer && gameSpaces[8] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[3] === currentPlayer && gameSpaces[4] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
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

    if (gameSpaces[6] === currentPlayer) {
      if (gameSpaces[0] === currentPlayer && gameSpaces[3] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[2] === currentPlayer && gameSpaces[4] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[7] === currentPlayer && gameSpaces[8] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
  })

  // if the second bottom space is clicked, the function will run
  $('#7').one('click', function (e) {
    $('#7').text(currentPlayer)
    console.log($('#7').text())
    // const index = gameSpaces.indexOf(e.target)
    // console.log(index)
    playerDisplay.innerHTML = currentPlayer
    gameSpaces[7] = currentPlayer
    console.log(gameSpaces)

    if (gameSpaces[7] === currentPlayer) {
      if (gameSpaces[1] === currentPlayer && gameSpaces[4] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[6] === currentPlayer && gameSpaces[8] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
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

    if (gameSpaces[8] === currentPlayer) {
      if (gameSpaces[0] === currentPlayer && gameSpaces[4] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[2] === currentPlayer && gameSpaces[5] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      } else if (gameSpaces[6] === currentPlayer && gameSpaces[7] === currentPlayer) {
        console.log(currentPlayer + ' wins!')
        playerDisplay.innerHTML = (currentPlayer + ' wins!')
        if (currentPlayer === player1) {
          player1Wins += 1
          return player1Wins
        } else if (currentPlayer === player2) {
          player2Wins += 1
          return player2Wins
        }
      }
    }

    if (currentPlayer === player1) {
      currentPlayer = player2
      playerDisplay.innerHTML = ('Current Player: Player 2 (O)')
    } else {
      currentPlayer = player1
      playerDisplay.innerHTML = ('Current Player: Player 1 (X)')
    }
  })
})
