// TODO(you): Write the JavaScript necessary to complete the assignment.
function handleCheck() {}

function startAttempt() {
    var introduction = document.getElementById("introduction");
    var attemptQuiz = document.getElementById("attempt-quiz");
    var reviewQuiz = document.getElementById("review-quiz");
    attemptQuiz.style.display = "block";
    introduction.style.display = "none";
    reviewQuiz.style.display = "none";
}

function toggleReview() {
    var introduction = document.getElementById("introduction");
    var attemptQuiz = document.getElementById("attempt-quiz");
    var reviewQuiz = document.getElementById("review-quiz");
    attemptQuiz.style.display = "none";
    introduction.style.display = "none";
    reviewQuiz.style.display = "block";
}
