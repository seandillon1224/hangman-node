var letter = require('./letters.js');

var Word = function(newWord) {
	this.word = newWord;
	this.letterArray = [];
	this.success=false;
	this.setUpArray = function () {
		for (var i = 0; i < this.word.length; i++){
			this.letterArray.push(new letter.letter(this.word[i].toUpperCase()));
		}
	}
	this.checkWord = function(){
		var returnedLettersCount = 0;
		for (var i = 0; i < this.letterArray.length; i++){
			if (this.letterArray[i].appear !== true){
				return false
			}
			else if (this.letterArray[i].appear === true){
				returnedLettersCount++;
			}
		}
		if (returnedLettersCount == this.letterArray.length){
			return true;
		}
		else{
			return false;
		}
	}
	this.checkLetters = function(letterGuessed){
		var lettersReturnedBack = 0;
		for (var i = 0; i < this.letterArray.length; i++){
			if (this.letterArray[i].character.toUpperCase()  === letterGuessed) {
				this.letterArray[i].appear = true;
				lettersReturnedBack++
			}
		}
	return lettersReturnedBack;
	}
	this.show = function() {
		var stringified = "";
		for (var i = 0; i <this.letterArray.length; i++){
			stringified += this.letterArray[i].displayedCharacter();
		}
		return stringified;
	};
};
	
exports.Word = Word;