

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

  // The below code turns myFinalArrayofCharacters into an actual array called finalArray, and then with that you're able to index
  var finalArray = myFinalArrayofCharacters.split("")
  console.log(finalArray)
  console.log(finalArray[40])
  console.log(finalArray.length)
  // TODO: create a conditional to make sure that the user has chosen at least one type of character (if/else statement will be good for this). 
  if (upperConfirm === false && lowerConfirm === false && numConfirm === false && specialCharConfirm === false ) {
    alert("You must select 'OK' on at least one of the prompts to receive a password. Try again.")
    return
  }
  

  // TODO: Create a prompt to ask user how many characters they want their password to be (at least 8 characters and no more than 128) and set to a variable. You will at some point create if else statements where if they give you a value that doesn't fall between 8-128, the prompt comes back with the message "Invalid response. Response must be a number between 8 and 128" 
  var lengthPrompt = prompt("How many characters would you like your password to be (between 8 and 128)?")
  console.log(lengthPrompt);

  // The below code doesn't work yet. It will make the prompt always go away if you put in another number, regardless of what that number's value is

  // while (lengthPrompt>128 || lengthPrompt<8){
  //   var invalidPrompt = prompt("Invalid response. Response must be a number between 8 and 128")
  //   return invalidPrompt
    
  // }

  
  
  // TODO: create an array of letters for each confirm (CAP letters, lower letters, numbs, and special characters). For example, var lowerCase = "abcdefghijklmnopqrstuvwxyz". DONE (but consider turning the strings into arrays using the SPLIT command) 
  
  // TODO: Create an empty array to hold user requested characters. Push each chosen array into this single array. DONE
  
  // TODO: Create if/else statements that checks if the user said yes or no to different confirms that we asked them, and based on their response push those specific characters to our empty array (done below). You will need seperate vars and a seperate if statement for each confirm. DONE 
  
  // TODO: Create a var to hold the final results (the password that will be given)
  
  var finalPass = myFinalArrayofCharacters; 
  console.log(finalPass)
  
  // TODO: I need a for loop to loop over my final array and put the choices into the var created above. It should run the number of times that the user wants the length of the password to be (aka based on the prompt when we asked the user how many characters they like their password to be). Choose from the final array that holds all the characters that the user wanted, and save them to our finalPass variable. 
  
  // for (var i = 0; i < lengthPrompt; i++) {
      
      
  // }
  
  
  // TODO:
  // var randomNum = Math.floor(Math.random() * (finalArray.length -1))   <-- this is done inside the for loop above
  // inside the for loop (finalPass = finalPass + finalArray[randomNum])
  
  // TODO: return the finalPass from this function. This should not be inside the for loop. Will be at the end of the function. 
   
  // The below code will be the final piece of code you write. Whatever you return will be what's typed onto the screen
  // return 
  }
  


// TODO: Final to do is to deal with edge cases. The only one you can really think of is if someone answers no to everything, and if someone gives you a number that's not between 8 and 128. If someone answers no to everything, you want to alert them that they "You must select "OK" on at least one of the prompts to receive a password. Try again." 