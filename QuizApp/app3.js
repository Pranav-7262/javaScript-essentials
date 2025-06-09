const questions = [
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
        ],
    },
    {
        question: "Which property is used to change the background color of an element?",
        answers: [
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "background", correct: false },
        ],
    },
    {
        question: "Which property is used to set the text color in CSS?",
        answers: [
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "font-color", correct: false },
            { text: "textstyle", correct: false },
        ],
    },
    {
        question: "How can you center a block element horizontally in CSS?",
        answers: [
            { text: "margin: 0 auto;", correct: true },
            { text: "padding: 0 auto;", correct: false },
            { text: "text-align: center;", correct: false },
            { text: "center-align: middle;", correct: false },
        ],
    },
    {
        question: "Which property is used to change the font size in CSS?",
        answers: [
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "font-style", correct: false },
            { text: "size", correct: false },
        ],
    },
    {
        question: "What is the default value of the `position` property in CSS?",
        answers: [
            { text: "fixed", correct: false },
            { text: "absolute", correct: false },
            { text: "relative", correct: false },
            { text: "static", correct: true },
        ],
    },
    {
        question: "Which of the following values is used to display a border around an element in CSS?",
        answers: [
            { text: "border-style", correct: false },
            { text: "border-color", correct: false },
            { text: "border-width", correct: false },
            { text: "border", correct: true },
        ],
    },
    {
        question: "Which property controls the space between the content and the border of an element?",
        answers: [
            { text: "padding", correct: true },
            { text: "margin", correct: false },
            { text: "border", correct: false },
            { text: "spacing", correct: false },
        ],
    },
    {
        question: "Which CSS property is used to create a gap between elements?",
        answers: [
            { text: "margin", correct: true },
            { text: "gap", correct: false },
            { text: "spacing", correct: false },
            { text: "padding", correct: false },
        ],
    },
    {
        question: "Which property is used to change the font of an element?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-size", correct: false },
            { text: "text-align", correct: false },
            { text: "text-font", correct: false },
        ],
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestions();

 }
 function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex+1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
        if(questionNumber==10) {
            nextButton.innerHTML = "SUBMIT";
         }
        
    });
 }

 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

 }
 function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
 } else {
    selectedBtn.classList.add("incorrect");
 }
 Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct=="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
 });
 nextButton.style.display = "block";

}
function showScore(){
    greeting();
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function greeting() {
    if(score==10 || score==9 || score==8) {
        alert("Exellent Job!!");
    }
    else if(score==7 || score==6 || score==5) {
        alert("Good,Keep Trying!!");
    }
    else {
        alert("Need to Improve!!");
    }
   
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click",()=> {
     if(currentQuestionIndex < questions.length){
        handleNextButton();
     }
     else {
        startQuiz();
    }
});
 
 startQuiz();
