import {

    ADD_QUESTION,
    SET_ALL_QUESTIONS_ARR

} from '../reduxConstants';


const initStateQuestionsRegister = {

    allQuestionsArr : []
}


export const questionsReducer = (state=initStateQuestionsRegister, action={}) => {

    switch(action.type){

        case SET_ALL_QUESTIONS_ARR : 

            return {...state, allQuestionsArr: action.payload}

        case ADD_QUESTION : 

            state.allQuestionsArr.push(action.payload);

            return {...state, allQuestionsArr:[...state.allQuestionsArr]}

        default: 

            return {...state}
    }
}