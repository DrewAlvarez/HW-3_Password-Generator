// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var pwLength = ""
  while (pwLength<8 || pwLength>128){
    pwLength = prompt("Choose any length (8-128) for your password.");
  }
  
  console.log (pwLength)

  var pwLowercase = confirm("Do you want to include lowercase?")
  console.log(pwLowercase)
  var pwUppercase = confirm("Do you want to include uppercase?")
  var pwNumbers = confirm("Do you want to include numbers?")
  var pwSpecialChar = confirm("Do you want to include special characters? \n(!, @, #, $ .etc)")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
