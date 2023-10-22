// Assignment Code
var generateBtn = document.querySelector("#generate"); 

var numericValues = "0123456789".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharacters = "!#$%&')(*+,-./:;<=>?@][\^_`}{|~".split("");

function generatePassword() {
  var includeLowerCaseLetters = false
  var includeUpperCaseLetters = false
  var includeNumericValues = false
  var includeSpecialCharacters= false

//password criteria

//length of password is 8-128 characters
var numberOfCharacters = prompt("How long should your password be? Chose between 8 and 128 characters.")
numberOfCharacters = parseInt


if (isNaN(numberOfCharacters) || numberOfCharacters<8 || numberOfCharacters>128) {
  return "Please choose a password length between 8 and 128"
}


else {
  alert ("Your password will be " + numberOfCharacters + " characters long.")
}
//lowecase
includeLowerCaseLetters = confirm ("Would you like lower case letters in your password?")
//uppercase
includeUpperCaseLetters = confirm ("Would you like upper case letters in your password?")
//numbers
includeNumericValues = confirm ("Would you like to include numeric values in you password?")
//special chcaracters
includeSpecialCharacters = confirm ("Would you like special characters in your passwords?")
//ensures all requirements

//generate password

//diplays passwords
    return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
