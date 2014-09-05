

var computerNumber = Number(Math.floor(Math.random() * 100));
var userPreviousNumber = 0;
var output = $("#output");


var validateInput = function(input){
	input = Number(input);
	if(typeof input !== "number" || isNaN(input)){
		$("#error").text("Invalid input");
		return false;
	} else if (input > 100 || input < 1){
		$("#error").text("Input out of range (1 - 99)");
		return false;
	} else {
		return true;
	}
}


var processGame = function (computerNumber){
	var prevNumberDifference = Math.abs(computerNumber - userPreviousNumber);
	var presNumberDifference = Math.abs(computerNumber - userNumber);

	// Compare the two numbers if they are equal or not
	if(computerNumber === userNumber){
		output.append("You guessed right <br>");
		userPreviousNumber = userNumber;
		return true
	} else if (computerNumber > userNumber){

	//if the user's previous number is less than the present one, 
	//then then user is moving closer, else it is farther
		if(userPreviousNumber === 0){
			output.append("Computer Number is greater than your number<br>");
		} else if(prevNumberDifference > presNumberDifference){
			output.append("Computer Number is greater but you are moving closer<br>");
		} else {
			output.append("Computer Number is greater than your number but you are moving farther <br>");
		}
		userPreviousNumber = userNumber;
		return false;
	} else {

	//if the user's previous number is less than the present one, 
	//then then user is moving closer, else it is farther
		if(userPreviousNumber === 0){
			output.append("Your Number is greater than computer's number<br>");
		} else if(prevNumberDifference > presNumberDifference){
			output.append("Your Number is greater than computer's number but you are moving closer<br>");
		} else {
			output.append("Your Number is greater than computer's number but you are moving farther <br>");
		}
		userPreviousNumber = userNumber;
		return false;
	}
}



$(document).ready(function(){
	$("button").click(function(){
		userNumber = Number(document.getElementById("userNumber").value);
		if(validateInput(userNumber)){
			processGame(computerNumber);
		}
	});
	
}
);