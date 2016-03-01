function songQuiz() {
	console.log('I\'m in');
	alert('Please fill in the missing word to complete the following song lyrics.');
	var totalCorrect = 0;

	var answer1 = prompt('Q1 of 5:  Help me _______________ yeah, get her out of my heart');
	
	if (answer1.toLowerCase() === 'rhonda') {
		totalCorrect += 1;
	}  else {
		alert('Sorry, that is incorrect');
	}
	alert('Rhonda is the correct answer. You have ' + totalCorrect + ' correct answers.');

	var answer2 = prompt('Q2 of 5:  I am a rock, I am an ____________________');
	if (answer2.toLowerCase() === 'island') {
		totalCorrect += 1;
	}  else {
		alert('Sorry, that is incorrect');
	}
	alert('Island is the correct answer. You have ' + totalCorrect + ' correct answers.');

	var answer3 = prompt('Q3 of 5:  The devil went down to Georgia, he was lookin\' for a soul to ____________________');
	if (answer3.toLowerCase() === 'steal') {
		totalCorrect += 1;
	}  else {
		alert('Sorry, that is incorrect');
	}
	alert('Steal is the correct answer. You have ' + totalCorrect + ' correct answers.');

	var answer4 = prompt('Q4 of 5:  Have you heard about the ____________________ Loser?');
	if (answer4.toLowerCase() === 'lonesome') {
		totalCorrect += 1;
	}  else {
		alert('Sorry, that is incorrect');
	}
	alert('Lonesome is the correct answer. You have ' + totalCorrect + ' correct answers.');

	var answer5 = prompt('Q5 of 5:  MacArthur\'s ____________________ is melting in the dark');
	if (answer5.toLowerCase() === 'park') {
		totalCorrect += 1;
	}  else {
		alert('Sorry, that is incorrect');
	}
	alert('Park is the correct answer. You have ' + totalCorrect + ' correct answers.');

	if(totalCorrect === 5) {
		alert('You correctly answered all 5 questions.  You win a gold star.');
	} else if(totalCorrect >=3) {
		alert('You correctly answered ' + totalCorrect + ' questions.  You win a silver star.');
	} else if(totalCorrect >=1) {
		alert('You correctly answered ' + totalCorrect + ' questions.  You win a bronze star.');
	} else {
		alert('You correctly answered 0 of 5 questions.  You lose.');
	}
}