import {

    ADD_QUESTION,
    SET_ALL_QUESTIONS_ARR,
    CHANGE_DISPLAYED_QUESTIONS,
    GET_ALL_VOTES_AND_NUM_OF_ANSWERS

} from '../reduxConstants';


const initStateQuestionsReducer = {

    allQuestionsArr : [],
    questionsArrToDisplay : [],
    allVotesAndNumOfAnswersForAllQuestions : []
}


export const questionsReducer = (state=initStateQuestionsReducer, action={}) => {

    switch(action.type){

        case SET_ALL_QUESTIONS_ARR : 

            return {...state, allQuestionsArr: action.payload, questionsArrToDisplay: action.payload}

        case ADD_QUESTION : 

            state.allQuestionsArr.push(action.payload);

            return {...state, allQuestionsArr:[...state.allQuestionsArr]}

        case CHANGE_DISPLAYED_QUESTIONS :

            return {...state, questionsArrToDisplay: action.payload}

        case GET_ALL_VOTES_AND_NUM_OF_ANSWERS :

            return {...state, allVotesAndNumOfAnswersForAllQuestions: action.payload}

        default: 

            return {...state}
    }
}