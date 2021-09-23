// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generator Function
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function generatePassword() {
    var passChar = parseInt(prompt("Please enter number of desired characters (8-128)"))
    
    if (!passChar) {
        alert("This needs a value");
    } else if (passChar < 8 || passChar > 128) {

        enter = parseInt(prompt("Choose a number between 8 and 128"));

    } else {
        confirmLowercase = confirm("Will this contain lowercase letters?");
        confirmNumber = confirm("Will this contain numbers?");
        confirmUppercase = confirm("Will this contain uppercase letters?");
        confirmSymbol = confirm("Will this contain symbols?");
        
        
    }

    let charCodes = []

    if (!confirmLowercase && !confirmNumber && !confirmUppercase && !confirmSymbol) {
        alert("Please choose one or more valid options");
    }
    if (confirmLowercase == true){
        charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
    }
    if (confirmUppercase == true){
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    }
    if (confirmNumber == true){
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    }
    if(confirmSymbol == true){
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    };

    var pass = [];

    for (let i = 0; i < passChar; i++) {
        var choices = charCodes[Math.floor(Math.random() * charCodes.length)];
        pass.push(String.fromCharCode(choices))
        console.log(pass)
    }

    var finalPass = pass.join("");
    return finalPass;
    

}

function arrayFromLowToHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }