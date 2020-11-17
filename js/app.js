const questionNumber = document.querySelector(".q-number");
const questionText = document.querySelector(".q-text");
const optionView = document.querySelector(".option-view");
const answer = document.querySelector(".answer");
const mainView = document.querySelector(".main-view");
const quizView = document.querySelector(".quiz-view");
const resultView = document.querySelector(".result-view");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let startTime;
let endTime;

const startQuiz = () => {
    mainView.classList.add("remove");
    quizView.classList.remove("remove");
    
    startTime = new Date();
    addAvailableQuestions();
    goNewQuestion();
}

const addAvailableQuestions = () => {
    availableQuestions = new Array();
    const totalQuestion = quizCurrentAffairs.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestions.push(quizCurrentAffairs[i]);
    }
}

const goNewQuestion = () => {

    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quizCurrentAffairs.length;

    currentQuestion = availableQuestions[questionCounter];
    questionText.innerHTML = currentQuestion.q;
    
    const optionLen = currentQuestion.options.length;

    for(let i=0; i<optionLen; i++){
        availableOptions.push(i);
    }

    optionView.innerHTML = '';

    for(let i=0; i<optionLen; i++){
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.className = "option";
        optionView.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter++

}

const  getResult = (element) => {
    if(!element.classList.contains("already-answered")){    
        const id = parseInt(element.id);
        if (id === currentQuestion.answer){
            answer.innerHTML = "Your answer is Correct";
            correctAnswers++
        }
        else {
            let displayanswer = currentQuestion.answer;
            answer.innerHTML = `Your answer is Incorrect,
            Correct option is ${currentQuestion.options[displayanswer]}`;
        }
        norepeatclickoptions();
    }
}

const norepeatclickoptions = () => {
    const optionLen = optionView.children.length;
    for( let i=0; i<optionLen; i++) {
        optionView.children[i].classList.add("already-answered");
    }

}

const submit = () => {
    if (questionCounter === quizCurrentAffairs.length){
        endTime = new Date();
        quizOver()
    }
    else {
        goNewQuestion();
        answer.innerHTML = '';
    }
}

const quizOver = () => {
    quizView.classList.add("remove");
    resultView.classList.remove("remove");
    quizResult();
}

const quizResult = () => {
    resultView.querySelector(".total-questions").innerHTML = quizCurrentAffairs.length;
    resultView.querySelector(".correct").innerHTML = correctAnswers;
    resultView.querySelector(".wrong").innerHTML = 10 - correctAnswers;
    resultView.querySelector(".time-taken").innerHTML = ((endTime - startTime)/1000).toFixed() + " Seconds";
    const percentage = (correctAnswers/quizCurrentAffairs.length)*100;
    resultView.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
    resultView.querySelector(".total-marks").innerHTML = correctAnswers + "/" + quizCurrentAffairs.length;
}

const endQuiz = () => {
    resultView.classList.add("remove");
    mainView.classList.remove("remove");
    questionCounter = 0;
    correctAnswers = 0;
    answer.innerHTML = "";
}