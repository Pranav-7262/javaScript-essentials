const questions = [
    {
        question: "What does HTML stand for?",
        answers: [

                { text:" HyperText Markup Language",correct:true},
                { text:" HighText Machine Language",correct:false},
                { text:"HyperText and Links Markup Language",correct:false},
                { text:"None of the above",correct:false},
        ],
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [

            { text: "&lt;a&gt;", correct: true },
            { text: "&lt;link&gt;", correct: false },
            { text: "&lt;href&gt;", correct: false },
            { text: "&lt;hyper&gt;", correct: false },
        ],
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answers: [
            { text: "&lt;lb&gt;", correct: false },
            { text: "&lt;br&gt;", correct: true },
            { text: "&lt;break&gt;", correct: false },
            { text: "&lt;hr&gt;", correct: false },
        ],
    },
    {
        question: " Which tag is used to create a numbered list in HTML?",
        answers: [
            { text: "&lt;ol&gt;", correct: true },
            { text: "&lt;ul&gt;", correct: false },
            { text: "&lt;li&gt;", correct: false },
            { text: "&lt;list&gt;", correct: false },
        ],
    },
    {
        question: "How can you make text bold in HTML?",
        answers: [
            { text: "&lt;bold&gt;", correct: false },
            { text: "&lt;b&gt;", correct: false },
            { text: "&lt;strong&gt;", correct: false },
            { text: "Both &lt;b&gt; and &lt;strong&gt;", correct: true },
        ],
    },
    {
        question: "What does the alt attribute in the <img> tag do?",
        answers: [
            { text: "It specifies the height of the image", correct: false },
            { text: "It provides alternative text for the image", correct: true },
            { text: "It links to another image", correct: false},
            { text: "It defines the alignment of the image", correct: false },
        ],
    },
    {
        question: "Which HTML tag is used to define important text?",
        answers: [
            { text: "&lt;important&gt;", correct: false },
            { text: "&lt;em&gt;", correct: false },
            { text: "&lt;strong&gt;", correct: true },
            { text: "&lt;highlight&gt;", correct: false }
        ],
    },
    {
        question: "How can you define a dropdown list in HTML?",
        answers: [
            { text: "&lt;dropdown&gt;", correct: false },
            { text: "&lt;list&gt;", correct: false },
            { text: "&lt;select&gt;", correct: true },
            { text: "&lt;input type='dropdown'&gt;", correct: false },
        ],
    },
    {
        question: "Which tag is used to define a container for navigation links?",
        answers: [
            { text: "&lt;nav&gt;", correct: true },
            { text: "&lt;menu&gt;", correct: false },
            { text: "&lt;navbar&gt;", correct: false },
            { text: "&lt;navigation&gt;", correct: false },
        ],
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "class", correct: false },
            { text: "style", correct: true },
            { text: "font", correct: false },
            { text: "styles", correct: false },
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
