// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//variable declaration
const userSelectedOptions = {
  hasUpperCase: false,
  hasLowerCase: false,
  hasSpecialChars: false,
  hasNumeric: false,
};

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt("Enter the password length between 8 and 128 characters")
  );

  if (
    userSelectedOptions.passwordLength < 8 ||
    userSelectedOptions.passwordLength > 128
  ) {
    alert("Enter the password length between 8 and 128 characters");
    return;
  }

  userSelectedOptions.hasUpperCase = confirm(
    "Do you want atleast 1 UPPERCASE character in password?"
  );
  userSelectedOptions.hasLowerCase = confirm(
    "Do you want atleast 1 lowercase character in password?"
  );
  userSelectedOptions.hasSpecialChars = confirm(
    "Do you want atleast 1 Special character in password?"
  );
  userSelectedOptions.hasNumeric = confirm(
    "Do you want atleast 1 numeric value in password?"
  );

  if (
    userSelectedOptions.hasUpperCase === false &&
    userSelectedOptions.hasLowerCase === false &&
    userSelectedOptions.hasNumeric === false &&
    userSelectedOptions.hasSpecialChars === false
  ) {
    alert("Choose atleast 1 character type");
    return;
  }

  return passwordLength;
}

// Function for getting a random element from an array
function getRandom(arr) {
  //pass the above arrays as a paramter and return the element at a random position of the array

  var result = arr[Math.floor(Math.random() * arr.length)];
  return result;
}

// Function to generate password with user input
function generatePassword() {
  let passwordLength = getPasswordOptions();
  let generatedPassword = [];

  for (let i = 0; i < passwordLength; i++) {
    if (userSelectedOptions.hasUpperCase) {
      generatedPassword += getRandom(this.upperCasedCharacters);
    }
    if (userSelectedOptions.hasLowerCase) {
      generatedPassword += getRandom(this.lowerCasedCharacters);
    }
    if (userSelectedOptions.hasNumeric) {
      generatedPassword += getRandom(this.numericCharacters);
    }
    if (userSelectedOptions.hasSpecialChars) {
      generatedPassword += getRandom(this.specialCharacters);
    }
  }
  generatedPassword = generatedPassword.slice(0, passwordLength);

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("I am inside the writepassword");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
