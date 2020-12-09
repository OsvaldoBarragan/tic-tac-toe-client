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
  console.log(store)

  store.user = response.user
  console.log(store.user.email)

  $('.unauthenticated').hide()
  $('.authenticated').show()
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

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
