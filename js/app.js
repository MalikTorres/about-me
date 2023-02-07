'use strict';

// TODO: GET users name - prompt and alert greeting back to user
let userName = prompt('What is your name?');

alert(`Welcome ${userName}! Please answer the following questions with yes or no`);

// TODO: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect

let questionOneGuess = prompt('Do I have siblings?').toLowerCase();
if (questionOneGuess === 'yes' || questionOneGuess === 'y')  {
  alert('Correct!');
  
} else if(questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('Please try again!');
} 
let questionTwoGuess = prompt('Was I born in New York?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess ==='yes') {
  alert('Correct!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('Please try again!');
}

let questionThreeGuess = prompt('Do I like sports').toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  
  alert('Correct!');
  
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('Please try again!');
}   
let questionFourGuess = prompt('Do I like Cooking?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'n') {
  alert('Correct!');
  
} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('Please try again');
}
let questionFiveGuess = prompt('Have I traveled outside of the United States?').toLowerCase();
  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('Correct!');
 } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('Please try again!');
 } 
//TODO: give them a final message with their name in the alert 
alert( `Thanks for playing ${userName}!`);