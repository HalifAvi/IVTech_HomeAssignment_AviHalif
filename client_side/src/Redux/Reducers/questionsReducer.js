import {

    ADD_QUESTION,
    SET_ALL_QUESTIONS_ARR,
    CHANGE_DISPLAYED_QUESTIONS

} from '../reduxConstants';


const initStateQuestionsRegister = {

    allQuestionsArr : [],
    questionsArrToDisplay : []
}


export const questionsReducer = (state=initStateQuestionsRegister, action={}) => {

    switch(action.type){

        case SET_ALL_QUESTIONS_ARR : 

            return {...state, allQuestionsArr: action.payload, questionsArrToDisplay: action.payload}

        case ADD_QUESTION : 

            state.allQuestionsArr.push(action.payload);

            return {...state, allQuestionsArr:[...state.allQuestionsArr]}

        case CHANGE_DISPLAYED_QUESTIONS :

            return {...state, questionsArrToDisplay: action.payload}

        default: 

            return {...state}
    }
}