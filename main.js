let score = 0;

function answerQuestion(button) {
    const answer = button.classList[0];
    if (answer === 'true') {
        score += 10;
    }
    const currentQuestion = button.parentNode;
    currentQuestion.style.display = 'none';
    const nextQuestion = currentQuestion.nextElementSibling;
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    } else {
        document.getElementById('submitButton').style.display = 'block';
    }
}

function calculatePercentage() {
    const name = localStorage.getItem('name');
    const percentage = (score / 100) * 100;
    const resultText = `${name}،  ${percentage}% انت رجال بالنسبة ! `;
    document.getElementById('result').textContent = resultText;
    document.getElementById('result').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const namePlaceholder = document.getElementById('namePlaceholder');
    const name = localStorage.getItem('name');
    namePlaceholder.textContent = name;
});