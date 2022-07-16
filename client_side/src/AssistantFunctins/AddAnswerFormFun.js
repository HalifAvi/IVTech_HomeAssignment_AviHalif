export const handleSubmitAnswer = async (addNewAnswer, getAllAnswersOfAllQuestions, description, questionId) => {

    await addNewAnswer(description, questionId);

    await getAllAnswersOfAllQuestions();

    cleanTextAreaInput();
}

const cleanTextAreaInput = () => {

    const textAreacField = document.querySelector('[type="text"]');

    textAreacField.value = '';
}