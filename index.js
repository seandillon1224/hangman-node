var prompt = require ("prompt");
var Word = require ("./word.js");
var wordsFile = require ("./wordsforgame.js");


prompt.start();

game = {
	correctWords : 0,
	guessesLeft : 10,
	currentWord : null,
	startGame: function(wrd){
		this.resetGuesses();
		this.lettersAlreadyGuessed = "";
		this.currentWord = new Word.Word(wordsFile.wordsForGame.wordBank[Math.floor(Math.random() * wordsFile.wordsForGame.wordBank.length)].toUpperCase());
		this.currentWord.setUpArray();
		this.promptUser();
	},
	resetGuesses: function(){
		this.guessesLeft = 10;
	},
	promptUser: function(){
		var self = this;

		prompt.get(['guessLetter'], function (err, result){
		var characterInput = result.guessLetter.toUpperCase();	

		if (result.guessLetter.length>1 || self.lettersAlreadyGuessed.includes(characterInput) || /[^A-Z]/.test(characterInput)){
		console.log("ERROR!" + "\n")
		console.log(`You guessed: ${characterInput} \n`)
		console.log("You've already already guessed this letter or you're entering an incorrect submission!")
		self.promptUser();


		}
		else{
		console.log ("\n" + "The letter you guessed was: " + characterInput)
		self.lettersAlreadyGuessed += characterInput;
		var matchedLetters = self.currentWord.checkLetters(characterInput);
		if (matchedLetters == 0){
			console.log("Not in this word! Try Again!" + "\n")
			self.guessesLeft--;
		}
		else{
			console.log("Correct!")

			if (self.currentWord.checkWord()){
				console.log("The word is: " + self.currentWord.show())
				console.log("You Won" + "\n")
				return;
			}
		}
		}
		console.log(`Guesses Remaining: ${self.guessesLeft}`);
		console.log("\n" + "Your Word: " + self.currentWord.show());
		console.log(`Letters Guessed: ${self.lettersAlreadyGuessed}`)

		if ((self.guessesLeft > 0) && (self.currentWord.success == false)){
			self.promptUser();
		}
		else if (self.guessesRemaing == 0) {
			console.log(`Game Over. The word was: ${self.currentWord.word}`)
		}
		else{
			console.log(self.currentWord.show());
		}
		})
	}
};

game.startGame();