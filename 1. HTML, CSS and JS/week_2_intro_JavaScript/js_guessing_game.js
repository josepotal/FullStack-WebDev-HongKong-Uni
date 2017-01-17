var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game(){
	var random_number = Math.random() * 100;
	var random_number_integer = Math.floor(random_number);
	target = random_number_integer +1;
	
	while (!finished){
		guess_input_text = prompt("I'm thinking of a number "+
									"in a range 1 to 100. \n\n"+
									"What is the number?");
		guess_input = parseInt(guess_input_text);
		guesses += 1;
		finished = check_guesses();
	}
}

function check_guesses(){
	if (isNaN(guess_input)){
		alert("You have not eneterd a number.\n\n" +
			"Please eneter a number in the range 1 to 100");
		return false;
	}
	if ((guess_input < 1) || (guess_input > 100)){
		alert (" Please eneter an integer number in the range 1 to 100");
		return false;
	}
	if (guess_input > target){
		alert ("Your numbaer is too large!");
		return false;
	}
	if (guess_input < target){
		alert("Your number is too small");
		return false;
	}
	alert("You got it! The number was" + target +
			"\n\n It took you "+ guesses + " guesses to get the number");
}