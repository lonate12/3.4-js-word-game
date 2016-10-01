(function(){
'use strict';

// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

// This is a test funciton for testing event listeners.

function test(){
  alert('Hey');
}

// Handles to document elements

var wordToGuessDiv = document.getElementById('word-to-guess');
var startButtonHandle = document.getElementById('start-button');
var inputHandle = document.getElementById('input-field');
var guessesLeftHandle = document.getElementById('guesses-left');
var guessesLeftNumber = guessesLeftHandle.textContent;

// First I'm filtering the array to create an array with words that have
// tree letters or more.

var filteredWords = commonWords.filter(function(words){
  return words.length >= 3;
});

// console.log(filteredWords); Testing to make sure the correct array was returned.

// Next, we're generating a random word from the new array with words of 3 letters
// or more.

// var randomWord = filteredWords[(Math.floor(Math.random() * filteredWords.length))];

function generateRandomWord(array){
  var randomWord = array[(Math.floor(Math.random() * filteredWords.length))];
  return randomWord;
}

// console.log(generateRandomWord(filteredWords)); Testing that generateRandomWord
// returned what I expected.

// Now, I'm going to tie an event listener to a 'start button' that will let us
// know when the player clicks the start button.

document.getElementById('start-button').addEventListener('click', generatePlayingScreen);

// This is the generatePlayingScreen function that will take the randomWord, find
// it's length, and create <span> tags for each letter with a class equal to the
// letter that will occupy that <span>.
var randomWord;

function generatePlayingScreen(){
  randomWord = generateRandomWord(filteredWords).split('');

  while(wordToGuessDiv.lastChild){
    wordToGuessDiv.removeChild(wordToGuessDiv.lastChild);
  }

  startButtonHandle.textContent = 'Give me a new word';
  guessesLeftNumber = '8';
  inputHandle.value = "";

  randomWord.forEach(function(letter){
    var newSpan = document.createElement('span');
    newSpan.className = letter +' word';
    // newSpan.textContent = letter;
    wordToGuessDiv.appendChild(newSpan);
  });

  inputHandle.addEventListener('keydown', checkInput);
  return randomWord;
}

// checkInput function that will iterate through the letters of the array and
// check to see if the key pressed matches any of the letters in the word.
// Use index and check the index against the index of the div array that has
// all the spans.

function checkInput(event){
  inputHandle.value = "";
  randomWord.forEach(function(letter, index){
    if(event.key == letter){
    wordToGuessDiv.childNodes[index].textContent = letter;
    }else{

    }
  });
}



}());
