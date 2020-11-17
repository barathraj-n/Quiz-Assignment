const startQuizBiology = () => {
    mainView.classList.add("remove");
    quizView.classList.remove("remove");

    startTime = new Date();
    addAvailableQuestionsBiology();
    goNewQuestionBiology();
}

const addAvailableQuestionsBiology = () => {
    availableQuestions = new Array();
    const totalQuestion = quizBiology.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestions.push(quizBiology[i]);
    }
}

const goNewQuestionBiology = () => {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quizBiology.length;

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