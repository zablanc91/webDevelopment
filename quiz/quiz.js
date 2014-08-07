//global variables for the score and the current question number
var score = 0;
var questionNum = 0;

//an object that holds the question, the multiple choices, and the answer
function Prompt(question, choices, correctAnswer) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

//initialize the prompts to use
var q1 = new Prompt("Q1: Who is Prime Minister of the United Kingdom?", ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 0);
var q2 = new Prompt("Q2: Who invented HTML?", ["Bill Gates", "Bob Kahn", "Tim Berners-Lee", "Alan Turing"], 2);
var q3 = new Prompt("Q3: Which Dota 2 hero was most recently released?", ["Terrorblade", "Phoenix", "Techies", "Oracle", ], 1);
var q4 = new Prompt("Q4: What genre does the musical artist Alcest fall under?", ["shoegaze", "black metal", "twee", "DNB"], 0);

//an array all the prompts
var allQuestions = [q1, q2, q3, q4];

//create the questions created by the array
function createQuestions() {
    // unselect all radiobuttons at the start
    for (var i = 0; i<4; i++) {
        document.getElementById("answer" + i).checked = false;
    }
    var quizQuestion = document.getElementById("questions");
    quizQuestion.innerHTML = allQuestions[questionNum].question;
    createOptions();
}

//change the button labels to correspond to the choices for the current answer
function createOptions() {
    for (var j = 0; j < allQuestions[questionNum].choices.length ; j++) {
        document.getElementById("a" + j).innerHTML = allQuestions[questionNum].choices[j] ;
    }
}

function checkForAnswer(){
	//check the radio buttons for the player's choice of answer 
	var answer = null;
	for (var k = 0; k < 4; k++){
		if(document.getElementById("answer" + k).checked) {
			answer = k;
			break;
		}
	}
	//prompt the user to make a choice if they did not make one
	if(answer == null) {
		document.getElementById("prompt").style.display = "block";
	}
	//check to see if the player's answer was correct and display the next question
	else{
		if(answer == allQuestions[questionNum].correctAnswer){
			score += 1;
		}
		document.getElementById("prompt").style.display = "none";
		questionNum += 1;
		// if finished with the questions, display a message showing the player's score	
		if(questionNum == allQuestions.length){
			displayScore();
		}
		else{
			createQuestions();	
		}
	}
}

//remove the radio buttons and the submit button then finally display the final score
function displayScore(){
	document.getElementById("radioAnswers").style.display = "none";
	document.getElementById("submit").style.display = "none";
	document.getElementById("questions").innerHTML = "You scored " + score + " out of " + allQuestions.length + " questions correctly.";
}

//present the first question
window.onload = createQuestions;
