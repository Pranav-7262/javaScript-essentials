const questions = [
    {
        question: "Which HTML element is used to specify a header for a section or document?",
        answers: [
            { text: "&lt;header&gt;", correct: true },
            { text: "&lt;section&gt;", correct: false },
            { text: "&lt;head&gt;", correct: false },
            { text: "&lt;hgroup&gt;", correct: false },
        ],
    },
    {
        question: "What does the action attribute in the <form> tag define?",
        answers: [
            { text: "The input field's behavior", correct: false },
            { text: "The URL where the form data is sent", correct: true },
            { text: "The method of form submission", correct: false },
            { text: "The type of form", correct: false },
        ],
    },
    {
        question: "What is the purpose of the <meta charset='UTF-8'> tag?",
        answers: [
            { text: "To specify the document language", correct: false },
            { text: "To define the character encoding for the HTML document", correct: true },
            { text: "To add metadata for search engines", correct: false },
            { text: "To define the page's viewport settings", correct: false },
        ],
    },
    {
        question: "Which tag is used to define a container for external content like a video or a map?",
        answers: [
            { text: "&lt;embed&gt;", correct: false },
            { text: "&lt;iframe&gt;", correct: true },
            { text: "&lt;object&gt;", correct: false },
            { text: "&lt;figure&gt;", correct: false },
        ],
    },
    {
        question: "Which HTML attribute is used to store custom data?",
        answers: [
            { text: "data-*", correct: true },
            { text: "custom-data", correct: false },
            { text: "storage-*", correct: false },
            { text: "dataset-*", correct: false },
        ],
    },
    {
        question: "What is the default position value of an HTML element?",
        answers: [
            { text: "static", correct: true },
            { text: "relative", correct: false },
            { text: "absolute", correct: false },
            { text: "fixed", correct: false },
        ],
    },
    {
        question: "Which CSS property is used to control the stacking order of elements?",
        answers: [
            { text: "order", correct: false },
            { text: "stack", correct: false },
            { text: "z-index", correct: true },
            { text: "layer", correct: false },
        ],
    },
    {
        question: "How can you apply styles to an element with both class1 and class2?",
        answers: [
            { text: ".class1.class2", correct: true },
            { text: ".class1, .class2", correct: false },
            { text: "#class1.class2", correct: false },
            { text: ".class1 .class2", correct: false },
        ],
    },
    {
        question: "What is the purpose of the ::before pseudo-element?",
        answers: [
            { text: "To insert content before an element's opening tag", correct: false },
            { text: "To apply styles before rendering the element", correct: false },
            { text: "To insert content before an element's content", correct: true },
            { text: "To insert content after an element's content", correct: false },
        ],
    },
    {
        question: "Which CSS function is used to apply a linear gradient background?",
        answers: [
            { text: "gradient()", correct: false },
            { text: "linear-gradient()", correct: true },
            { text: "background-gradient()", correct: false },
            { text: "grad-linear()", correct: false },
        ],
    },
    {
        question: "What does the box-sizing: border-box; property do?",
        answers: [
            { text: "Includes padding and border in the element's total width and height", correct: true },
            { text: "Excludes padding and border from the element's total width and height", correct: false },
            { text: "Applies only to the border of the element", correct: false },
            { text: "Adjusts the box model to exclude margins", correct: false },
        ],
    },
    {
        question: "Which CSS property is used to make an element responsive?",
        answers: [
            { text: "@media", correct: false },
            { text: "max-width", correct: true },
            { text: "float", correct: false },
            { text: "grid-template", correct: false },
        ],
    },
    {
        question: "What is the output of console.log(typeof null);?",
        answers: [
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "object", correct: true },
            { text: "boolean", correct: false },
        ],
    },
    {
        question: "Which method can be used to create a deep copy of an object?",
        answers: [
            { text: "Object.assign()", correct: false },
            { text: "JSON.parse(JSON.stringify())", correct: true },
            { text: "Object.copy()", correct: false },
            { text: "copy()", correct: false },
        ],
    },
    {
        question: "What is the purpose of the this keyword in JavaScript?",
        answers: [
            { text: "Refers to the function in which it is used", correct: false },
            { text: "Refers to the parent function", correct: false },
            { text: "Refers to the global object", correct: false },
            { text: "Refers to the object from which it was called", correct: true },
        ],
    },
    {
        question: "What is the difference between == and ===?",
        answers: [
            { text: "== compares value and type, while === only compares value", correct: false },
            { text: "== compares value, while === compares value and type", correct: true },
            { text: "=== is faster than ==", correct: false },
            { text: "No difference", correct: false },
        ],
    },
    {
        question: "Which method stops event propagation in JavaScript?",
        answers: [
            { text: "stopPropagation()", correct: true },
            { text: "preventDefault()", correct: false },
            { text: "stopEvent()", correct: false },
            { text: "stopImmediatePropagation()", correct: false },
        ],
    },
    {
        question: "What is the purpose of setTimeout()?",
        answers: [
            { text: "To repeatedly execute code at a specified interval", correct: false },
            { text: "To execute code once after a delay", correct: true },
            { text: "To delay execution indefinitely", correct: false },
            { text: "To immediately execute a function", correct: false },
        ],
    },
    {
        question: "Which JavaScript method is used to add elements to the end of an array?",
        answers: [
            { text: "shift()", correct: false },
            { text: "pop()", correct: false },
            { text: "push()", correct: true },
            { text: "concat()", correct: false },
        ],
    },
    {
        question: "What is the purpose of the map() function in JavaScript?",
        answers: [
            { text: "Modifies the original array", correct: false },
            { text: "Iterates over an array and returns a new array based on a callback function", correct: true },
            { text: "Filters elements from an array", correct: false },
            { text: "Combines multiple arrays into one", correct: false },
        ],
    },
    {
        question: "Which of the following is NOT a valid JavaScript loop?",
        answers: [
            { text: "for", correct: false },
            { text: "foreach", correct: true },
            { text: "do-while", correct: false },
            { text: "while", correct: false },
        ],
    },
    {
        question: "Which HTML tag is required to link an external CSS file?",
        answers: [
            { text: "&lt;css&gt;", correct: false },
            { text: "&lt;style&gt;", correct: false },
            { text: "&lt;link&gt;", correct: true },
            { text: "&lt;meta&gt;", correct: false },
        ],
    },
    {
        question: "Which property is used in CSS to control text overflow?",
        answers: [
            { text: "text-overflow", correct: true },
            { text: "overflow", correct: false },
            { text: "text-wrap", correct: false },
            { text: "white-space", correct: false },
        ],
    },
    {
        question: "How do you check if a variable x is an array in JavaScript?",
        answers: [
            { text: "x instanceof Array", correct: true },
            { text: "typeof x === 'array'", correct: false },
            { text: "Array.isArray(x)", correct: true },
            { text: "a) or c)", correct: false },
        ],
    },
    {
        question: "What does the DOMContentLoaded event signify in JavaScript?",
        answers: [
            { text: "The HTML document and all resources have loaded", correct: false },
            { text: "The DOM is fully parsed and can be manipulated", correct: true },
            { text: "The window object is fully initialized", correct: false },
            { text: "The JavaScript file is fully loaded", correct: false },
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
function greeting(score) {
    if(score >= 20) {
        alert("Excellent Job!!");
    }
    else if(score >= 13) {
        alert("Good, Keep Trying!!");
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
