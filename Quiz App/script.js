const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shank", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Dog", correct: false},
        ]

    },
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shank", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Dog", correct: false},
        ]

    },
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shank", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Dog", correct: false},
        ]

    },
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shank", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Dog", correct: false},
        ]

    },

];
const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach( answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButton.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
    });
}

function resetState(){
    nextButton.style.display="none";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
      }
}

function selectAnswer(e){
   const selectedButton = e.target;
   const isCorrect = selectedButton.dataset.correct==="true";
   if(isCorrect){
    selectedButton.classList.add("correct");
    score++;
   }
   else{
    selectedButton.classList.add("incorrect")
   }
   Array.from(answersButton.children).forEach((button)=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled = true;
   });
   nextButton.style.display = "block"
   
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score}/${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display= "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();