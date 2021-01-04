const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Your account has been created!')
}

const signUpFailure = function (error) {
  $('#message').text('There was an error signing up: ' + error)
}

const signInSuccess = function (response) {
  $('#message').text('You have signed in!')

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('#gameMessage').hide()
  $('#gameBoard').hide()
  $('#currentPlayerDisplay').hide()
  $('#titleName').html('Tic Tac Toe')
}

const signInFailure = function (error) {
  $('#message').text('There was an error signing in. Check if both the email and password are correct. Error is: ' + error)
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password has been updated')
}

const changePasswordFailure = function (error) {
  $('#message').text('An error has occured while changing password: ' + error)
}

const signOutSuccess = function (response) {
  $('#message').text('You have logged out.')

  $('.authenticated').hide()
  $('.unauthenticated').show()

  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('There was a problem logging out. Error is: ' + error)
}

const resetGame = function () {
  $('.space').text('')
  $('.space').css({ 'background-color': '#ffffff' })
  store.game.cells[0] = ''
  store.game.cells[1] = ''
  store.game.cells[2] = ''
  store.game.cells[3] = ''
  store.game.cells[4] = ''
  store.game.cells[5] = ''
  store.game.cells[6] = ''
  store.game.cells[7] = ''
  store.game.cells[8] = ''
  store.game.over = false
  $('#currentPlayerDisplay').text('Current Player: Player 1 (X)')
}

const newGameSuccess = function (response) {
  $('#message').text('A new game has started.')

  store.game = response.game
  resetGame()

  $('#gameBoard').show()
  $('#gameMessage').show()
  $('#currentPlayerDisplay').show()
  $('#gameHistory').hide()
}

const newGameFailure = function (error) {
  $('#message').text('A new game cannot be created: ' + error)
}

const updateGameSuccess = function (response) {
}

const updateGameFailure = function (error) {
  $('#message').text('Game has failed to update: ' + error)
}

const getGamesSuccess = function (response) {
  $('#message').text('')
  $('#gameHistory').show()
  $('#gameBoard').hide()
  $('#gameMessage').hide()
  $('#currentPlayerDisplay').hide()
  $('#gameHistory').text('Games played: ' + JSON.stringify(response.games.length))
}

const getGamesFailure = function (error) {
  $('#message').text('Failed to get games: ' + error)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  newGameSuccess: newGameSuccess,
  newGameFailure: newGameFailure,
  updateGameSuccess: updateGameSuccess,
  updateGameFailure: updateGameFailure,
  getGamesSuccess: getGamesSuccess,
  getGamesFailure: getGamesFailure
}
