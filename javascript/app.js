	// compare function makes sure same question
	// is not displayed twice
	// if number is in array
	// call random number generator again
	function compare(array){
		var number = random50();
			if(array.indexOf(number) === -1){
					console.log("All good.")
					array.push(number);
					return number;
			} else {
				number = random50();
				return compare(array);
			}
	}


	function updateQuestion(){
			questionNumber += 1;
			return questionNumber;
	};

// random number 0 - 49
// states[0] is 'Alabama' the first state
// states[49] is 'Wyoming' the last state 
 	function random50(){
		return Math.floor((Math.random() * 50));
	}

	// random number 1 - 6
	function random6(){
		return Math.floor((Math.random() * 6)+1);
	}

$(document).ready(function(){

// randomizes flag in middle of game upon page refresh
	$("#flag").empty().append(questions[random50()].question);

/* -------------------- functionality for instant play ------------------------- */

	// display length of game 
		$('#play-now').on('click', function(){
			$('#question-total').empty().append(gameLength);
		});


	// randomize first question
		// $('#play-now').on('click', function(){
		//     var num = random50();
		//    		for(var i=1; i<=6; i++){
		//    			$("#option"+i).empty().append(questions[num]['option'+i]);
		//    		} 
		//     $("#flag").empty().append(questions[num].question);
		//     console.log(questions.splice(questions.indexOf(questions[num]),1,questions[0]), questions.length);
		// });

		$('#play-now').on('click', function(){
			var num = compare(randomNumberArray);
      var randoArray = [];

     		for(var i=1; i<=6; i++){
 					var rando = compare(randoArray)
 					$("#option"+i).empty().append(states[rando]['location']);
     		}

     		if(randoArray.indexOf(num) === -1){
     			$("#option"+random6()).empty().append(questions[num]['answer']);
     		} else {
     			console.log("answer already available")
     		}
	      
	    $("#flag").empty().append(questions[num].question);
		});


	// hides instructions div
		$('#play-now').on('click', function(){
				console.log("Game length: " + gameLength);
				console.log("Max number of attempts: " + maxAttempts);
				$('#instructions').addClass('hidden');
		});


/* ------------------ functionality for game difficulty ----------------------- */

	//	set difficulty of game
		$('#game-difficulty ul').on('click', 'input', function(){
				console.log("Game difficulty: " + this.id);
				if(this.id === 'easy'){
					maxAttempts = 3;
				} else if(this.id === 'medium'){
					maxAttempts = 2;
				} else if(this.id === 'hard'){
					maxAttempts = 1;
				}
			console.log("Max number of attempts: " + maxAttempts);
		});


/* -------------------- functionality for game length ------------------------- */
	//	set length of game
		$('#game-length ul').on('click', 'input', function(){
				console.log("Game type: " + this.id);
				if(this.id === 'sprint'){
					gameLength = 10;
				} else if(this.id === 'half-marathon'){
					gameLength = 25;
				} else if(this.id === 'marathon'){
					gameLength = 50;
				}

				console.log("Game length: " + gameLength + " questions");
				$('#question-total').empty().append(gameLength);
		});

	// randomize first question
		$('#game-length ul').on('click', 'input', function(){
				var num = compare(randomNumberArray);
	      var randoArray = [];

	     		for(var i=1; i<=6; i++){
	 					var rando = compare(randoArray)
	 					$("#option"+i).empty().append(states[rando]['location']);
	     		}

	     		if(randoArray.indexOf(num) === -1){
	     			$("#option"+random6()).empty().append(questions[num]['answer']);
	     		} else {
	     			console.log("answer already available")
	     		}
		      
		    $("#flag").empty().append(questions[num].question);
		});

	// hide instructions div
		$('#game-length ul').on('click', 'input', function(){
				$('#instructions').addClass('hidden');
		});


/* --------------- functionality for clicking li's images ---------------------- */
	// verification of selection (adds orange border to image selected)
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


/* --------------- functionality for '#submit-answer' button ----------------- */
		// verification of answer (red border = wrong && green border = correct)
		// user clicks 'submit-answer' in order to receive verification
			$('#submit-answer').on('click', function(){
				attempts++;
				console.log("You have used " + attempts + " attempt(s)");
				var flagName = $('#flag > img').attr('alt');
					if(playerChoice === flagName){
						console.log("The current flag belongs to " + flagName + ", and you selected " + playerChoice + ". You're correct.");
						$('#main-content img').removeClass('incorrect');
						$('img.selected').removeClass('selected').addClass('correct');
					} else {
						console.log("The current flag belongs to " + flagName + ", and you selected " + playerChoice + ". You're WRONG.");
						$('img.selected').removeClass('selected').addClass('incorrect');
					}
			});


/* --------------- functionality for '#next-question' button ----------------- */

		// after clicking next-question
		// update the questionNumber
		// show results div

			$('#next-question').on('click', function(){
				var flagName = $('#flag > img').attr('alt');
				
					if(questionNumber <= gameLength){
							if(playerChoice === flagName){
								// correct results array.push(state name && state map && flag image )
								correctResults.push(flagName);
								$('#correct-answers ul').append(
									"<li><img class='center-block' src='images/state_location/"+flagName
									+"StateLocation.svg.png' alt="+flagName
									+">"+flagName+"</li>");
								console.log("correctResults = " + correctResults);
							} else if(playerChoice !== flagName){
								// incorrect
								incorrectResults.push(flagName);
								$('#incorrect-answers ul').append(
									"<li><img class='center-block' src='images/state_location/"+flagName
									+"StateLocation.svg.png' alt="+flagName
									+">"+flagName+"</li>");
								console.log("incorrectResults = " + incorrectResults);
							}
					} else {
							$('#results').removeClass('hidden');
							// disables 'submit-answer' and 'next-question' buttons
							$('#submit-answer').prop("disabled",true);
							$('#next-question').prop("disabled",true);
					}
			});

		// remove correct && incorrect classes
			$('#next-question').on('click', function(){
					$('#main-content img').removeClass('correct');
					$('#main-content img').removeClass('incorrect');
			});

		// remove text from your-choice
			$('#next-question').on('click', function(){
					$('#your-choice').empty();
			});

			// num does not exist because the questions array has been shortened
			// need to insert a dummy question object in spliced object's place √

	// set up next question
		$('#next-question').on('click', function(){

				var num = compare(randomNumberArray);
	      var randoArray = [];

	     		for(var i=1; i<=6; i++){
	 					var rando = compare(randoArray)
	 					$("#option"+i).empty().append(states[rando]['location']);
	     		}

	     		if(randoArray.indexOf(num) === -1){
	     			$("#option"+random6()).empty().append(questions[num]['answer']);
	     		} else {
	     			console.log("answer already available")
	     		}
		      
		    $("#flag").empty().append(questions[num].question);
      
      	$('#question-number').text(updateQuestion());
      	console.log("You are now on question " + $('#question-number').text());

      	console.log(questions.splice(questions.indexOf(questions[num]),1,questions[0]), questions.length);
    
		});

		// resets attempt number
			$('#next-question').on('click', function(){
					attempts = 0;
			});


/* --------------- functionality for '#next-question' button ----------------- */
	// start a new game

		// reset all values
			$('#play-again').on('click', function(){
					questions = questionsCopy;
					correctResults = [];
					incorrectResults = [];
					gameLength = 10;
					questionNumber = 1;
					attempts = 0;
					maxAttempts = 1;
			});

		// display instructions div
			$('#play-again').on('click', function(){
					$('#instructions').removeClass('hidden');
			});

		// re-enable '#submit-answer' and '#next-question' buttons
			$('#play-again').on('click', function(){
					$('#submit-answer').prop("disabled",false);
					$('#next-question').prop("disabled",false);
			});

		// add class hidden to hide results div
			$('#play-again').on('click', function(){
					$('#results').addClass('hidden');
			});

		// restart question-number and question total
			$('#play-again').on('click', function(){
					$('#question-number').text(questionNumber);
					$('#question-total').text(gameLength);
			});

		// empty unorderlists in correct-answers and incorrect-answers
			$('#play-again').on('click', function(){
				$('#correct-answers ul').empty();
				$('#incorrect-answers ul').empty();
			});


}); // end of document ready function






