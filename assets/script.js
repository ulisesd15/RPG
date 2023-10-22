// Assignment Code
var generateBtn = document.querySelector("#generate"); //button

var numericValues = "0123456789".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharacters = "!#$%&')(*+,-./:;<=>?@][\^_`}{|~".split("");

function generatePassword() {
  var possibleCharacters = []; //length of password is 8-128 characters
  var numberOfCharacters = prompt("How long should your password be? Chose between 8 and 128 characters.");
  numberOfCharacters = parseInt(numberOfCharacters);

//if the prompt is not answered with a number or a number between 8 and 128 then command will not run and alert will show
  if (isNaN(numberOfCharacters) || numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a password length between 8 and 128";
  }
// if the prompt is answered with a number or a number between 8 and 128 then this will be displayed in the alert
  else {
    alert ("Your password will be " + numberOfCharacters + " characters long.")
  }
//here are all the options for the password
  includeLowerCaseLetters = confirm("Would you like lower case letters in your password");
  includeUpperCaseLetters = confirm("Would you like upper case letters in your password?");
  includeNumericValues = confirm("Would you like numeric values in your password?");
  includeSpecialCharacters = confirm("Would you like special characters in your passwords?");
  //ensures all requirements before they are actually done,, if not done then alert will show
  if (!includeLowerCaseLetters && !includeNumericValues && !includeSpecialCharacters && !includeUpperCaseLetters) {
    return "Please Select at least one character type.";
  }

  //lowecase
  if (includeLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
  }
  //uppercase
  if (includeUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
  }
  //numbers
  if (includeNumericValues) {
    possibleCharacters = possibleCharacters.concat(numericValues);
  }
  //special chcaracters
  if (includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  //generate password
  var finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let range = Math.ceil(Math.random() * possibleCharacters.length)
    finalPassword += possibleCharacters[range]
  }
  //diplays passwords
  return finalPassword;
}

// Write password to the #password input
function writePassword() {  //calls for generate password creating a password and here it is interpreted or written on the page

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //button function
