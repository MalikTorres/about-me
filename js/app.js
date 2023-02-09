'use strict';

//TODO: GET users name - prompt and alert greeting back to user

let userScore = 0;

let userName = prompt('What is your name?');

alert(`Welcome ${userName}! Please answer the following questions with yes or no`);

// TODO: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect
let questionOneGuess = prompt('Do I have siblings?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y')  {
  alert('Correct!');
  userScore++

} else if(questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('Incorrect!');
  // console.log(questionOneGuess);
}  


let questionTwoGuess = prompt('Was I born in New York?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess ==='yes') {
  alert('Correct!');
  userScore++

} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('Incorrect!');
  //console.log(questionTwoGuess);
}

let questionThreeGuess = prompt('Do I like sports').toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert('Correct!');
  userScore++

} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('Incorrect!');
  //console.log(questionThreeGuess);
}   
let questionFourGuess = prompt('Do I like Cooking?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'n') {
  alert('Correct!');
  userScore++

} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('Incorrect!');
  //console.log(questionFourGuess);
} 

let questionFiveGuess = prompt('Have I traveled outside of the United States?').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('Correct!');
  userScore++

} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('Incorrect!');
  // console.log(questionFiveGuess)
}  


// COUNTER
let guessAttempts = 4;
let answer = 24;

// console.log(typeof newAnswer)
while(guessAttempts)  { 

  console.log('This is a guess');

  //QUESTION SIX 
   let userGuess = prompt('How old am I?')
   let numberGuess = Number(userGuess);
   // converting user guess to a number
   guessAttempts--; 
  
   if(numberGuess > answer) {
    alert('This value is too high. Please try again');
   
  } else if(numberGuess < answer) {
    alert('This value is too low. Please try again');
  
  } else {
    alert('That is correct!')
     guessAttempts = 0; 
     userScore++
     //Made value false to break loop
    

  }

  
}


alert('The correct answer is 24!');

// TODO: give them a final message with their name in the alert 




let guessAttemptsToQuestion = 6; 

// Create array of correct answers
  // Create counter loop
    // inner loop to iterate over the array
      // check if user guess is in the array
        // otherwise alert to try again
          

while(guessAttemptsToQuestion)  {

    let userGuess = prompt('Which countries did I visit while studying abroad Italy, Spain, Netherlands, Greece, or Portugal?');
    // User answered is stored in userGuess variable 
    let countries = ['Italy','Spain','Netherlands']; 
    // Only correct answers stored in the array  

     // console.log('test')

     guessAttemptsToQuestion--;
     // counts down to zero 
   
      for(let i = 0; i < countries.length; i++) {
        
          if(userGuess === countries[i]) {
            
            alert('You are correct!');
            guessAttemptsToQuestion = 0;
            // false value used to break loop 
            userScore++
            // Will not restart loop 
          }
        
       } 
       
         if(guessAttemptsToQuestion > 0) {
          // greater than counter

           alert('Please try again!');
      }

  }  

alert( `Thanks for playing ${userName}! you total score is ${userScore}!`); 