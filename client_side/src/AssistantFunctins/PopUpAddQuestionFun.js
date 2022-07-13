
export const handleSubmitQuestion = async (addNewQuestion, title, question, tags, getAllQuestions) => {

    await addNewQuestion(title, question, tags);

    cleanInputs();

    // For refreshing the displayed question after we add an new question
    await getAllQuestions();
}

const cleanInputs = () => {

    ([...document.querySelectorAll('[type="text"]')]).map(input=>{

        input.value = '';

    })
}


