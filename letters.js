function letter (letterIn){
	this.character = letterIn;
	this.appear = false;
	this.displayedCharacter = function() {
		if (this.appear === true){
			return this.character
		}
		else{
			return "_"
		}
	}
}

exports.letter = letter;