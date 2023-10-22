// Assignment Code
var generateBtn = document.querySelector("#generate"); 

function generatePassword() {
//password criteria

//length of password is 8-128 characters
    
//lowecase

//uppercase

//numbers

//special chcaracters

//ensures all requirements

//generate password

//diplays passwords
    return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
