// TODO(you): Write the JavaScript necessary to complete the assignment.
function handleCheck() {}

function startAttempt() {
    var introduction = document.getElementById("introduction");
    var attemptQuiz = document.getElementById("attempt-quiz");
    var reviewQuiz = document.getElementById("review-quiz");
    attemptQuiz.style.display = "block";
    introduction.style.display = "none";
    reviewQuiz.style.display = "none";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://wpr-quiz-api.herokuapp.com/attempts", true);
    xhttp.send();
    console.log(xhttp.response);
}

function toggleReview() {
    var quizName = document.getElementById("quiz-name");
    var introduction = document.getElementById("introduction");
    var attemptQuiz = document.getElementById("attempt-quiz");
    var reviewQuiz = document.getElementById("review-quiz");
    attemptQuiz.style.display = "none";
    introduction.style.display = "none";
    reviewQuiz.style.display = "block";
    var form  = document.getElementById("question-form");
    form.onsubmit = function(e) {
        e.preventDefault();
        quizName.scrollIntoView();
    }
}

function tryAgain() {
    var introduction = document.getElementById("introduction");
    var attemptQuiz = document.getElementById("attempt-quiz");
    var reviewQuiz = document.getElementById("review-quiz");
    introduction.style.display = "block";
    reviewQuiz.style.display = "none";
    attemptQuiz.style.display = "none";
}
