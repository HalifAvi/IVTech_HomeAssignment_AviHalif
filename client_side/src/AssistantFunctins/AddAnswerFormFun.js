export const handleSubmitAnswer = async (addNewAnswer, getAllAnswersOfSpecificQuestion, description, questionId) => {

    await addNewAnswer(description, questionId);

    await getAllAnswersOfSpecificQuestion(questionId);

    cleanTextAreaInput();
}

const cleanTextAreaInput = () => {

    const textAreacField = document.querySelector('[type="text"]');

    textAreacField.value = '';
}