// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let vowels = ['A','E','I','O','U'];

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure) {
		 if (oldPointStructure[pointValue].includes(word[i])) {
		  letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
  return letterPoints;
 }

function standardScorer(word) {
	word = word.toUpperCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
	    for (const pointValue in oldPointStructure) {
		   if (oldPointStructure[pointValue].includes(word[i])) {
          letterPoints += Number(pointValue);
        }
      }
    }
  return letterPoints;

console.log(letterPoints);

 }

function vowelScorer(word) {
  word = word.toUpperCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])){
      letterPoints+=3;
    }
    else{
      letterPoints++;
    }
  }
  return letterPoints;

};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let\'s play some Scrabble!\n");
  wordEntered = input.question("Enter a word to score: ");
  console.log("Which scoring algorithm would you like to use?\n");
  console.log("0 - Simple: One point per charachter\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system")
  gameType = input.question("Enter 0, 1, or 2: ");
};

let simpleScore;
let vowelBonusScore;
let scrabbleScore;

function scorerPrompt() {
  if (gameType == 0) {
    let simpleScore = wordEntered.length
    console.log(`Score for \'${wordEntered}\': ${simpleScore}`);
  }
  else if (gameType == 1) { 
    scrabbleScore = standardScorer(wordEntered);
    console.log(`Score for \'${wordEntered}\': ${scrabbleScore}`);
  }
  else if (gameType == 2) {
    vowelBonusScore = vowelScorer(wordEntered);
    console.log(`Score for \'${wordEntered}\': ${vowelBonusScore}`);  
  }
  else {
    console.log("Invalid entry. Please try again.\n")
    runProgram();
  }
}

const scoringAlgorithms = [ {
  name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
  }, {
  name: 'Bonus vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  }, {
  name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  }
];

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

