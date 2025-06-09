const questions = [
    {
        question: "What is the extension of JavaScript files?",
        answers: [

                { text:".javascript",correct:false},
                { text:".js",correct:true},
                { text:".java",correct:false},
                { text:".script",correct:false},
        ],
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [

                { text:"Number",correct:false},
                { text:"String",correct:false},
                { text:"boolean",correct:false},
                { text:"Float",correct:true},
        ],
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            { text: "#", correct: false },
            { text: "//", correct: true },
            { text: "!----", correct: false },
            { text: "/* */", correct: false },
        ],
    },
    {
        question: "Which of the following methods is used to join two or more arrays in JavaScript?",
        answers: [
            { text: "concat()", correct: true },
            { text: "combine()", correct: false },
            { text: "append()", correct: false },
            { text: "join()", correct: false },
        ],
    },
    {
        question: "Which of the following is used to define a function in JavaScript?",
        answers: [
            { text: "def", correct: false },
            { text: "function", correct: true },
            { text: "fn", correct: false },
            { text: "fun", correct: false },
        ],
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "constant", correct: false },
        ],
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Laravel", correct: false },
            { text: "Flask", correct: false },
            { text: "Django", correct: false },
        ],
    },
    {
        question: "Which of the following is used to handle asynchronous operations in JavaScript?",
        answers: [
            { text: "Promises", correct: false },
            { text: "Callbacks", correct: false },
            { text: "Async/Await", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
    {
        question: "What is the scope of a variable declared with let inside a block?",
        answers: [
            { text: "Global", correct: false },
            { text: "Local to the script", correct: false },
            { text: "Function", correct: false },
            { text: "Block", correct: true },
        ],
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: [
            { text: "pop()", correct: true },
            { text: "push()", correct: false },
            { text: "shift()", correct: false },
            { text: "splice()", correct: false },
        ],
    },

];
// Select DOM elements
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
