const startQuizPhysics = () => {
    mainView.classList.add("remove");
    quizView.classList.remove("remove");

    startTime = new Date();
    addAvailableQuestionsPhysics();
    goNewQuestionPhysics();
}

const addAvailableQuestionsPhysics = () => {
    availableQuestions = new Array();
    const totalQuestion = quizPhysics.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestions.push(quizPhysics[i]);
    }
}

const goNewQuestionPhysics = () => {

    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quizPhysics.length;

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