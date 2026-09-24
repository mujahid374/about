// Mobile navigation

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}


// Quiz

function checkQuiz() {

    const answer = document.querySelector(
        'input[name="question1"]:checked'
    );

    const result = document.getElementById("quizResult");


    if (!answer) {
        result.textContent = "Please select an answer.";
        return;
    }


    if (answer.value === "correct") {
        result.textContent = "Correct! The testes produce sperm cells.";
    } else {
        result.textContent = "Not quite. Try again!";
    }
}