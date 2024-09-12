const questions = [
    {
        text: "What is the capital of France?",
        audio: "audio/question1.mp3",
        video: "video/question1.mp4",
        answers: ["Paris", "London", "Berlin"],
        correct: "Paris"
    },
    {
        text: "What is 2 + 2?",
        audio: "audio/question2.mp3",
        video: "video/question2.mp4",
        answers: ["3", "4", "5"],
        correct: "4"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('question-container');

    container.innerHTML = `
        <div class="fade-out">
            <p>${question.text}</p>
            <audio controls>
                <source src="${question.audio}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <video width="320" height="240" controls>
                <source src="${question.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <ul>
                ${question.answers.map(answer => `<li>${answer}</li>`).join('')}
            </ul>
        </div>
    `;

    // Apply fade-in animation
    const questionElement = container.querySelector('.fade-out');
    questionElement.classList.remove('fade-out');
    questionElement.classList.add('fade-in');
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        document.getElementById('quiz-container').innerHTML = '<h2>Quiz Complete!</h2>';
    }
});

// Load the first question initially
loadQuestion(currentQuestionIndex);
