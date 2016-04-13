// variables
var correct = 0;
var rank = "";

// prompt for 5 questions
var answer1 = prompt("What is your favorite class?");
var answer2 = prompt("Which ear can most people hear better with?");
var answer3 = prompt("Which of the New England states is largest in size?");
var answer4 = prompt("What is the closest star to Earth?");
var answer5 = prompt("What year did World War II end?");


// if statements to count how many correct answers
if ( answer1.toUpperCase() === 'WEB DEVELOPMENT' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'RIGHT' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'MAINE' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'THE SUN' ) {
 correct +=1;
}
if ( answer5.toUpperCase() === '1945' ) {
 correct += 1;
}

//if statements to rank people
if (correct === 5){
	rank = "gold";
}
if (correct === 4){
	rank = "silver";
}
if (correct === 3){
	rank = "bronze";
}

// output results
if (correct >0){
	document.write("<p> congrats! you got " + correct + " out of 5 questions right!</p>");
}

if (correct === 0){
	document.write("<p> you didn't get any questions right, but try again by refreshing this page!</p>");
}

if (correct >2){
	document.write("<p>You got the " + rank + " medal!</p>");
}
