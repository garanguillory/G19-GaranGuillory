// var States = require('data.js');

	var $option1 = $('#option1');
	var $option2 = $('#option2');
	var $option3 = $('#option3');
	var $option4 = $('#option4');
	var $option5 = $('#option5');
	var $option6 = $('#option6');

	var questionNumber = 1;

	var playerChoice, gameLength;
	var flagName = $('#flag > img').attr('alt');

	var updateQuestion = function(){
			questionNumber += 1;
			return questionNumber;
	};

	$('ul').on('click', 'li', function(){
			// set gameLength li options alt's to numbers
			gameLength = this.alt;
	});

$(document).ready(function(){

	// verification of selection (adds white border to image selected)
		$('li').on('click', 'img', function(){
				playerChoice = this.alt;
				$('#main-content img').removeClass('selected');
				$(this).addClass('selected');
				console.log(playerChoice);
		});

	// adds playerChoice to #your-choice span
		$('li').on('click','img', function(){
				$('#your-choice').html("<span>" +playerChoice+ "</span>");
		});

	// verification of answer (red border = wrong && green border = correct)
	// user clicks 'submit-answer' in order to receive verification
		$('#submit-answer').on('click', function(){
				if(playerChoice === flagName){
					console.log("The current flag belongs to " + flagName + ", and you selected " + playerChoice + ". You're correct.");
					$('img.selected').removeClass('selected').addClass('correct');
				} else {
					console.log("The current flag belongs to " + flagName + ", and you selected " + playerChoice + ". You're WRONG.");
					$('img.selected').removeClass('selected').addClass('incorrect');
				}
		});

	// NEED TO PUSH ANSWER TO RESULTS ARRAY
		$('#submit-answer').on('click', function(){
				// if(playerChoice === flagName){
				// 	correctResultsArray.push(flagName)
				// }
				// if(playerChoice !===)
		});

	// after clicking next-question
	// update the questionNumber
		$('#next-question').on('click', function(){
				// need to change 50 to game length
				if(questionNumber <= 50 /* gameLength */ ){
						$('#question-number').empty().append(updateQuestion());
				} else {

				}
		});

	// after clicking next-question
	// remove correct && incorrect classes
		$('#next-question').on('click', function(){
				$('#main-content img').removeClass('correct');
				$('#main-content img').removeClass('incorrect');
		});



}); // end of document ready function












