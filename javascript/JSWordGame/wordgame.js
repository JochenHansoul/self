/*
••••••••••••••••••••••••••••••••••••••••••••••••
Copyright (C) 2021 Codesse. All rights reserved.
••••••••••••••••••••••••••••••••••••••••••••••••
*/
// require
const FILE = require("./file.js");
const MAP = require("./js/string-maps.js");

// constants
const WORDS_PATH = "./resources/wordlist.txt"
const HIGH_SCORE_FILE = "./resources/high-score.txt";


WordGame = function() {
  const BASE_STRING = "helloabcde";
  const WORDS_SET = new Set();
  for (const word of FILE.readFile(WORDS_PATH)) {
    WORDS_SET.add(word);
  }
  const BASE_MAP = MAP.createMap(BASE_STRING);

/*
Submit a word on behalf of a player. A word is accepted if its letters are contained in the base string used to construct the game AND if it is in the word list provided: wordlist.txt.
	
If the word is accepted and its score is high enough, the submission should be added to the high score list. If there are multiple submissions with the same score, all are accepted, BUT the first submission with that score should rank higher.
	
A word can only appear ONCE in the high score list. If the word is already present in the high score list the submission should be rejected.
	
@parameter word. The player's submission to the game. All submissions may be assumed to be lowercase and contain no whitespace or special characters.
*/	
 this.submitWord = function (word) {
  const USER_MAP = MAP.createMap(word);
  if (MAP.validateMap(BASE_MAP, USER_MAP) && WORDS_SET.has(word)) {
    let value = word.length;
    const WORDS = FILE.readFile(HIGH_SCORE_FILE);
    let containsWord = false;
    for (const submittedWord of WORDS) {
      if (word === submittedWord) {
        containsWord = true;
      }
    }
    if (!containsWord) {
      FILE.writeFile(HIGH_SCORE_FILE, [word]);
    }
  } else {
    console.log("incorrect word");
  }
 }("hello");
 
/*
Return word entry at given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

@parameter position Index position in high score list
@return the word entry at the given position in the high score list, or null if there is no entry at the position requested
*/
 this.getWordEntryAtPosition = function (position) {
 return "";
 };
 
/*
Return the score at the given position in the high score list, 0 being the highest (best score) and 9 the lowest. You may assume that this method will never be called with position > 9.

What is your favourite color? Please put your answer in your submission (this is for testing if you have read the comments).
 
@parameter position Index position in high score list
@return the score at the given position in the high score list, or null if there is no entry at the position requested
*/
 this.getScoreAtPosition = function (position) {
 return 0;
 };
 
}();
