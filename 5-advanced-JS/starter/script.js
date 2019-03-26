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
/*
(function () {
    function Question (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    Question.prototype.showQuestion = function (arr) {
        console.log(this.question);
        for (i=0;i<this.answers.length;i++){
            console.log([i] + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function () {
        if (promptAnswer == this.correctAnswer) {
            console.log('You are right');
        }else {
            console.log('You are wrong. Try one more time.')
        }
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
    var questionsArr = [question01, question02, question03];

    var n = Math.floor(Math.random() * questionsArr.length);

    questionsArr[n].showQuestion();

    var promptAnswer = parseInt(prompt('Choose the the number of answer from the console.'));

    questionsArr[n].checkAnswer();
})();
*/
/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes
'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function () {
    function Question (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    Question.prototype.showQuestion = function (arr) {
        console.log(this.question);
        for (i=0;i<this.answers.length;i++){
            console.log([i] + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function () {
        if (parseInt(promptAnswer) === this.correctAnswer) {
            console.log('You are right');
            infinity();
        }else if (promptAnswer === 'exit') {

        }else {
            console.log('You are wrong. Try one more time.')
            infinity();
        }
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
    var questionsArr = [question01, question02, question03];
    var n = Math.floor(Math.random() * questionsArr.length);
    questionsArr[n].showQuestion();
    var promptAnswer = prompt('Choose the the number of answer from the console.');
    questionsArr[n].checkAnswer();
    //infinity();
    function infinity() {
        questionsArr[n].showQuestion();
    }
})();