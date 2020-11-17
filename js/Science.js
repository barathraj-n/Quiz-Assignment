const startQuizScience = () => {
    mainView.classList.add("remove");
    quizView.classList.remove("remove");

    startTime = new Date();
    addAvailableQuestionsScience();
    goNewQuestionScience();
}

const addAvailableQuestionsScience = () => {
    availableQuestions = new Array();
    const totalQuestion = quizScience.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestions.push(quizScience[i]);
    }
}

const goNewQuestionScience = () => {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quizScience.length;

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
