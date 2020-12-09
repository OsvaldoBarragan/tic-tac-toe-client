const signUpSuccess = function (response) {
  $('#message').text('Your account has been created!')
  console.log('Signed up.')
}

const signUpFailure = function (error) {
  $('#message').text('There was an error signing up. The account already exists.')
  console.log('There is an error. The error is: ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('You have signed in!')
  console.log('Signed in.')
}

const signInFailure = function (error) {
  $('#message').text('There was an error signing in. Check if both the email and password are correct.')
  console.log('There is an error. The error is: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure
}
