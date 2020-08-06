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
  
  function generatePassword(){
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChar = "0123456789";
    var specialChar = "!@#$%^&*()_+-`~";
    var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerNum = "abcdefghijklmnopqrstuvwxyz0123456789";
    var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-`~";
    var upperNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var upperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-`~";
    var numSpecial = "0123456789!@#$%^&*()_+-`~";
    var lowerUpperNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var lowerUpperSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-`~";
    var upperNumSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-`~";
    var allChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-`~";
    
    var password ="";
    for (var i = 1; i <= pwLength; i++){
      if(pwLowercase==true && pwUppercase!==true && pwNumbers!==true && pwSpecialChar!== true){
        password += lowerCaseChar.charAt(Math.floor(Math.random()*lowerCaseChar.length + 1))

      }else if((pwLowercase!==true && pwUppercase==true && pwNumbers!==true && pwSpecialChar!== true)){
        password += upperCaseChar.charAt(Math.floor(Math.random()*upperCaseChar.length + 1))

      }
    }return password;

  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
