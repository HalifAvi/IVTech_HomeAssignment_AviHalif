import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewQuestion } from "../Redux/Actions/questionsActions";
import { handleSubmitQuestion } from "../AssistantFunctins/PopUpAddQuestionFun.js";
import { getAllQuestions } from "../Redux/Actions/questionsActions.js";



const PopUpAddQuestion = ({addNewQuestion, getAllQuestions}) => {

    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [tags, setTags] = useState('');

    return(
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Question</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Title</label>
                            <input onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Question</label>
                            <textarea onChange={(e)=>setQuestion(e.target.value)} type="text" className="form-control" id="message-text"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Tags separated by ,</label>
                            <input onChange={(e)=>setTags(e.target.value)} type="text" className="form-control" id="recipient-name"/>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={()=>handleSubmitQuestion(addNewQuestion, title, question, tags, getAllQuestions)} type="button" data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        getAllQuestions : ()=> dispatch(getAllQuestions()),
        addNewQuestion : (title, question, tags)=> dispatch(addNewQuestion(title, question, tags))
    }
}


export default connect(null, mapDispatchToProps)(PopUpAddQuestion);
