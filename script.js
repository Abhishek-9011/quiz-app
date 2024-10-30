const quizData = [
    {
        "question": "Which language runs in a web browser?",
        "a": "Java",
        "b": "C",
        "c": "Python",
        "d": "JavaScript",
        "correct": "d",
    },
    {
        "question": "What does CSS stand for?",
        "a": "Central Style Sheets",
        "b": "Cascading Style Sheets",
        "c": "Cascading Simple Sheets",
        "d": "Cars SUVs Sailboats",
        "correct": "b",
    },
    {
        "question": "What does HTML stand for?",
        "a": "Hypertext Markup Language",
        "b": "Hypertext Markdown Language",
        "c": "Hyperloop Machine Language",
        "d": "Helicopters Terminals Motorboats Lamborginis",
        "correct": "a",
    },
    {
        "question": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b",
    },
];

let userScore = 0;
let cnt = 0;

function updateQuestion() {
    if (cnt < quizData.length) {
        const currentQuestion = quizData[cnt];
        let questionsHTML = `
          <h3> ${currentQuestion.question} </h3>
            <label class='option'><input type="radio" name="answer" value="a"> ${currentQuestion.a} </label><br>
            <label class='option'><input type="radio" name="answer" value="b"> ${currentQuestion.b} </label><br>
            <label class='option'><input type="radio" name="answer" value="c"> ${currentQuestion.c} </label><br>
            <label class='option'><input type="radio" name="answer" value="d"> ${currentQuestion.d} </label><br>
            <button id="submit">Submit</button>
        `;
        document.getElementById("questionsBox").innerHTML = questionsHTML;

        document.getElementById('submit').addEventListener('click', function () {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (selectedOption) {
                const answer = selectedOption.value;
                if (answer === currentQuestion.correct) {
                    userScore++;
                }
                cnt++;
                updateQuestion(); 
            } else {
                alert("Please select an answer before submitting!");
            }
        });
    } else {
        document.getElementById("questionsBox").innerHTML = `<h3>Quiz Completed!</h3><p>Your score: ${userScore}</p>`;
    }
}

updateQuestion();  