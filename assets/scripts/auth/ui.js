const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Your account has been created!')
  console.log('Signed up.')
}

const signUpFailure = function (error) {
  $('#message').text('There was an error signing up.')
  console.log('There is an error. The error is: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('You have signed in!')
  console.log(response)

  store.user = response.user
  console.log(store.user)

  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('#gameMessage').hide()
  $('#gameBoard').hide()
  $('#currentPlayerDisplay').hide()
  $('#titleName').html('Tic Tac Toe')
}

const signInFailure = function (error) {
  $('#message').text('There was an error signing in. Check if both the email and password are correct.')
  console.log('There is an error. The error is: ' + error.responseJSON.message)
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password has been updated')
  console.log('The password of the user has been changed.')
}

const changePasswordFailure = function (error) {
  $('#message').text('Password has failed to update.')
  console.log('Error: ' + error.responseJSON.message)
}

const signOutSuccess = function (response) {
  $('#message').text('You have logged out.')
  console.log('Logged out.')

  $('.authenticated').hide()
  $('.unauthenticated').show()

  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('There was a problem logging out.')
  console.log('Error: ' + error.responseJSON.message)
}

const resetGame = function () {
  $('.space').text('')
  $('.space').css({ 'background-color': '#e8eae6' })
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
  console.log(store.game)
  resetGame()

  $('#gameBoard').show()
  $('#gameMessage').show()
  $('#currentPlayerDisplay').show()
  $('#gameHistory').hide()
}

const newGameFailure = function (error) {
  $('#message').text('New game could not be started.')
  console.log('There is an error: ' + error.responseJSON.message)
}

const updateGameSuccess = function (response) {
  console.log('What does updateGame send back: ' + JSON.stringify(response))
}

const updateGameFailure = function (error) {
  console.log('An error occured: ' + error.responseJSON.message)
}

const getGamesSuccess = function (response) {
  $('#message').text('Games have beens shown.')
  $('#gameHistory').show()
  $('#gameBoard').hide()
  $('#gameMessage').hide()
  $('#currentPlayerDisplay').hide()
  console.log('Games have been given: ' + JSON.stringify(response.games.length))
  $('#gameHistory').text('Games played: ' + JSON.stringify(response.games.length))
}

const getGamesFailure = function (error) {
  $('#message').text('Cannot get games.')
  console.log('There is an error: ' + error.responseJSON.message)
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
