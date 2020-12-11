

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. It takes the final answer from the generatePassword function that YOU write, and puts the answer out onto the screen.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to the generate button. The below code means that when you click on the button, you run the function writePassword, which is written above.
generateBtn.addEventListener("click", writePassword);








// TODO: Create a generatePassword function and write all the logic within this function. Whatever it returns will be shown on the page (because of the code written for you from lines 7-11).
function generatePassword() {


  // TODO: Create confirm to ask user if they want capital letters and set to a variable. DONE
  var upperConfirm = confirm("Do you want to include uppercase letters in your password?")
  var myFinalArrayofCharacters = ''
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"] 

  if(upperConfirm === true) {
    myFinalArrayofCharacters = myFinalArrayofCharacters + upperCase
    


  }
  console.log(myFinalArrayofCharacters)
  


  // TODO: Create confirm to ask user if they want lowercase letters and set to a variable. DONE
  var lowerConfirm = confirm("Do you want to include lowercase letters in your password?")
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  
  if(lowerConfirm === true) {
    myFinalArrayofCharacters = myFinalArrayofCharacters + lowerCase
    


  }
  console.log(myFinalArrayofCharacters)
  

  // TODO: Create confirm to ask user if they want numbers and set to a variable. DONE
  var numConfirm = confirm("Do you want to numbers in your password?")
  var numbers = "0123456789"

  if(numConfirm === true) {
    myFinalArrayofCharacters = myFinalArrayofCharacters + numbers
    


  }
  console.log(myFinalArrayofCharacters)

  // TODO: Create confirmm to ask user if they want special characters and set to a variable. DONE
  var specialCharConfirm = confirm("Would you like special characters in your pass?")
  var specialCharacters = " !#$%&'*+,-_/;:<=>?@`|~" 
  
  if(specialCharConfirm === true) {
    myFinalArrayofCharacters = myFinalArrayofCharacters + specialCharacters
    


  }

  // The below code turns myFinalArrayofCharacters into an actual array called finalArray, and then with that I'm able to index
  var finalArray = myFinalArrayofCharacters.split("")
  console.log(finalArray)
  console.log(finalArray[40])
  console.log(finalArray.length)
  // TODO: create a conditional to make sure that the user has chosen at least one type of character (if statement will be good for this). 
  if (upperConfirm === false && lowerConfirm === false && numConfirm === false && specialCharConfirm === false ) {
    alert("You must select 'OK' on at least one of the prompts to receive a password. Try again.")
    return "CLICK BELOW TO TRY AGAIN"
  }
  

  // TODO: Create a prompt to ask user how many characters they want their password to be (at least 8 characters and no more than 128) and set to a variable. If they give you a value that doesn't fall between 8-128, prompt  the message "Invalid response. Response must be a number between 8 and 128" and repeat that prompt until they give you a number between 8 and 128
  var lengthPrompt = prompt("How many characters would you like your password to be (between 8 and 128)?")
  console.log(lengthPrompt);

  while ((lengthPrompt>128 || lengthPrompt<8)){
    var invalidPrompt = prompt("Invalid response. Response must be a number between 8 and 128")
    lengthPrompt = invalidPrompt
  }


  

  
  // TODO: Create a var to hold the final results (the password that will be given)
  
  var finalPass = ""







  
  // TODO: I need a for loop to loop over my final array and put the choices into the var created above. It should run the number of times that the user wants the length of the password to be (aka based on the prompt when we asked the user how many characters they like their password to be). Choose from the final array that holds all the characters that the user wanted, and save them to our finalPass variable. 
  // In the parentheses after the for loop, you're stating the paramters by which you want the stuff written in the curly brackets to run. For this, you want the for loop to run until i=lengthPrompt
  for (var i = 0; i < lengthPrompt; i++) {

    // the below will give you a random number between 0 and one less than finalArray length. I don't need to do finalArray.length-1 because Math.floor rounds it down, so even if Math.random gives me 0.9999 and I multiply that by finalArray.length, the resulting number will still be one less than finalArray.length since it's rounded down. This is perfect since I'm using this as an index and want it to be 1 less than finalArray.length so as not to return an undefined result 
    var randomNum = Math.floor(Math.random() * (finalArray.length))
    console.log(randomNum)   

    finalPass += finalArray[randomNum]  
    console.log(finalPass)

  }
  
  // TODO: return the finalPass from this function. This should not be inside the for loop. Will be at the end of the function.   
  return finalPass
  








  }
  


// TODO: Final to do is to deal with edge cases. The only one left is if someone asks for a character amount that's less than 8 or greater than 128. 
// Make sure it doesn't return "undefined" in the text box
// ALL DONE!!!!!