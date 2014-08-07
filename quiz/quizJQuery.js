//global variables for the score and the current question number
var score = 0;
var questionNum = 0;

//initialize the prompts to use
var q1 = {};
q1["question"] = "Q1: Who is Prime Minister of the United Kingdom?";
q1["choices"] = ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"];
q1["correctAnswer"] = 0;

var q2 = {};
q2["question"] = "Q2: Who invented HTML?";
q2["choices"] = ["Bill Gates", "Bob Kahn", "Tim Berners-Lee", "Alan Turing"]
q2["correctAnswer"] = 2;

var q3 = {};
q3["question"] = "Q3: Which Dota 2 hero was most recently released?"
q3["choices"] = ["Terrorblade", "Phoenix", "Techies", "Oracle"]
q3["correctAnswer"] = 1;

var q4 = {};
q4["question"] = "Q4: What genre does the musical artist Alcest fall under?"
q4["choices"] = ["shoegaze", "black metal", "twee", "DNB"]
q4["correctAnswer"] = 0;

	
//an array with all the prompts
var allQuestions = [q1, q2, q3, q4];
	

//create the questions created by the array
function createQuestions() {
	 $('#fade').fadeIn('slow');
	// unselect all radiobuttons at the start
	for (var i = 0; i<4; i++) {
		$("#answer" + i).prop('checked', false);
	}
	$("#questions").text(allQuestions[questionNum].question);
	createOptions();
}


//change the button labels to correspond to the choices for the current answer
function createOptions() {
    for (var j = 0; j < 4 ; j++) {
		$("#a" + j).text(allQuestions[questionNum].choices[j]);
    }
}


function checkForAnswer(){
	//check the radio buttons for the player's choice of answer 
	var answer = null;
	for (var k = 0; k < 4; k++){
		//if(document.getElementById("answer" + k).checked) {
		if($("#answer" + k).prop("checked")){
			answer = k;
			break;
		}
	}
	//prompt the user to make a choice if they did not make one
	if(answer == null) {
		//document.getElementById("prompt").style.display = "block";
		$("#prompt").show();
	}
	//check to see if the player's answer was correct and display the next question
	else{
		if(answer == allQuestions[questionNum].correctAnswer){
			score += 1;
		}
		$("#prompt").hide();
		questionNum += 1;
		// if finished with the questions, display a message showing the player's score	
		if(questionNum == allQuestions.length){
			displayScore();
		}
		else{
			$('#fade').fadeOut('slow');
			setTimeout('createQuestions()', 600);
		}
	}
}

//remove the radio buttons and the submit button then finally display the final score
function displayScore(){
	$("#radioAnswers").hide();
	$("#submit").hide();
	$("#questions").text("You scored " + score + " out of " + allQuestions.length + " questions correctly."); 
}

$(document).ready( function(){
	$("h1").text("JQuery Quiz!");
	createQuestions();
});