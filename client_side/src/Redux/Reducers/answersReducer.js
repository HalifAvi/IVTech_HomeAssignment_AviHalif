import { getTotalVotesToQuestion } from "../../AssistantFunctins/AnswersReducerFun.js";
import {

    GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION,
    ADD_ANSWER,
    VOTE

} from '../reduxConstants';


const initStateAnswersReducer = {

    AllAnswersOfSpecificQuestion : [],
    currentVotes : 0, 
    currentNumOfAnswers : 0
}


export const answersReducer = (state=initStateAnswersReducer, action={}) => {

    switch(action.type){

        case GET_ALL_ANSWERS_OF_SPECIFIC_QUESTION : 

            const numAnsOfCurrQue = (action.payload).length;

            const votes = getTotalVotesToQuestion(action.payload);

            return {...state, AllAnswersOfSpecificQuestion: action.payload, currentNumOfAnswers: numAnsOfCurrQue, currentVotes : votes}

        case ADD_ANSWER :

            return {...state}

        case VOTE :

            return {...state}

        default: 

            return {...state}
    }
}



