  // Will put all my confirms down below. After creating them, will have to make it so that they only go off once the button is clicked. You will have to put it inside the function that is prompted with the event listener of "click" 
  



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);








// TODO: Create a generatePassword function and write all the logic within this function. Whatever it returns will be shown on the page
function generatePassword() {


  // TODO: Create confirm to ask user if they want capital letters and set to a variable
  var upperConfirm = confirm("Do you want to include uppercase letters in your password?")


  // TODO: Create confirm to ask user if they want lowercase letters and set to a variable
  var lowerConfirm = confirm("Do you want to include lowercase letters in your password?")


  // TODO: Create confirm to ask user if they want numbers and set to a variable
  var numConfirm = confirm("Do you want to numbers in your password?")


  // TODO: Create confirmm to ask user if they want special characters and set to a variable
  var specialCharConfirm = confirm("Would you like special characters in your pass?")


  // TODO: Create a prompt to ask user how many characters they want their password to be (at least 8 characters and no more than 128) and set to a variable. You will at some point create if else statements where if they give you a value that doesn't fall between 8-128, the prompt comes back with the message "Invalid response. Response must be a number between 8 and 128" 
  var lengthPrompt = prompt("How many characters would you like your password to be (between 8 and 128)?")

  
  // TODO: create a conditional to make sure that the user has chosen at least one type of character (if/else statement will be good for this) 
  
  // TODO: create an array of letters for each confirm (CAP letters, lower letters, numbs, and special characters). For example, var lowerCase = "abcdefghijklmnopqrstuvwxyz" (when do you have to use brackets for an array? Why not in the var lowerCase do you have to use brackets?) 
  
  // TODO: Create an empty array to hold user requested characters. Push each chosen array into this single array 
  
  // TODO: Create if/else statements that checks if the user said yes or no to different confirms that we asked them, and based on their response push those specific characters to our empty array (done below). You will need seperate vars and a seperate if statement for each confirm
  
  // TODO: Create a var to hold the final results (the password that will be given)
  
  var finalPass; 
  
  // TODO: I need a for loop to loop over my final array and put the choices into the var created above. It should run the number of times that the user wants the length of the password to be (aka based on the prompt when we asked the user how many characters they like their password to be). Choose from the final array created in 36 that holds all the characters that the user wanted, and save them to our finalPass variable. 
  
  for (var i = 0; i < passLen; i++) {
      
      
  }
  
  
  // TODO:
  // var randomNum = Math.floor(Math.random() * length of final array)   <-- this is done inside the for loop above
  // inside the for loop (finalPass = finalPass + finalArray[randomNum])
  
  // TODO: return the finalPass from this function. This should not be inside the for loop. Will be at the end of the function. 
  

  //TODO: Write the password into the #password from index.html using textContent. Activity 6 from today could be a good resource for this, though I think this might've already been done for you in the code provided 
  
  
  }
  
  // This is about line TODO Create an empty array to hold user requested characters. Push each chosen array into this single array 
  var specialCharQuestion = confirm("Would you like special chars in your pass?")
  var myFinalArrayofCharacters = ''
  var specialCharacters = "!@#$% ^"
  
  if(specialCharQ === true) {
      myFinalArrayofCharacters = myFinalArrayofCharacters+specialCharacters
  }
  // if ()    <--- commented out for now because it was messing with your code






  