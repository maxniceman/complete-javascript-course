/*
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
interviewQuestion('work')('Max');
*/


/////////////////////////////
// CODING CHALLENGE


/*
    1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)
    2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't
interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var questionsArr;
var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
var question01 = new Question(
    'What is your favourite TV-show?',
    ['Shameless', 'Walking Dead', 'Game of Thrones'],
    0
);
var question02 = new Question(
    'What is your favourite color?',
    ['Black', 'Orange', 'Red', 'Yellow'],
    3
);
var question03 = new Question(
    'What is your favourite name?',
    ['John', 'James'],
    1
);
questionsArr = [question01, question02, question03];





Question.prototype.randomQuestion = function (arr) {
    console.log()
}

Question.prototype.checkQuestion = function () {
    var promptAnswer = prompt('Choose the the number of answer from the console.')
    if (promptAnswer == this.correctAnswer) {
        console.log('You are right');
    }else {
        console.log('You are wrong. Try one more time.')
    }
}

question01.randomQuestion(questionsArr);
question01.checkQuestion(questionsArr);







