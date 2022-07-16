import React, { useState }  from "react";
import { connect } from "react-redux";
import { addNewAnswer } from "../Redux/Actions/answersActions";
import { handleSubmitAnswer } from "../AssistantFunctins/AddAnswerFormFun.js";
import { getAllAnswersOfAllQuestions } from "../Redux/Actions/answersActions.js";



const AddAnswerForm = ({addNewAnswer, questionId, getAllAnswersOfAllQuestions}) => {

    const [answerDescription, setAnswerDescription] = useState('');

    return(
        <div className="form-floating">
            <textarea onChange={(e)=>setAnswerDescription(e.target.value)}  type={"text"} className="form-control mb-2" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Type Answer Here</label>
            <button onClick={()=>handleSubmitAnswer(addNewAnswer, getAllAnswersOfAllQuestions, answerDescription, questionId)} type="button" className="btn btn-success mb-5">Answer</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        addNewAnswer : (description, questionId)=> dispatch(addNewAnswer(description, questionId)),
        getAllAnswersOfAllQuestions : ()=> dispatch(getAllAnswersOfAllQuestions())
    }
}


export default connect(null, mapDispatchToProps)(AddAnswerForm);
