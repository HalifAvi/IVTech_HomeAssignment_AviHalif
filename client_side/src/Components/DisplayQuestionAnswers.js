import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorAndDate from "./AuthorAndDate";
import Title from "./Title";
import AnswersList from "./AnswersList";
import QuestionTags from "./QuestionTags";
import AddAnswerForm from "./AddAnswerForm";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import { getAllAnswersOfSpecificQuestion } from "../Redux/Actions/answersActions.js";
import "./ComponentsStyle/DisplayQuestionAnswers.css";
import { useEffect } from "react";



const DisplayQuestionAnswers = ({allQuestionsArr}) => {

    // FOR GETTING PARAMS FROM URL
    const params = useParams();

    const displayedQuestion = allQuestionsArr.find(question => question.id === Number(params.questionId));

    return(
        <>
            <div className="d-flex flex-row justify-content-center">
                <div className={"col-md-6 justify-content-center w-50 ms-5"}>
                    <Title title={`Question Title: ${displayedQuestion.title}`} />
                    <AuthorAndDate element={displayedQuestion} />
                    <hr className={"breakLine"} />
                    <QuestionOrAnswerDetails description={displayedQuestion.question} />
                    <QuestionTags tags={displayedQuestion.tags} />

                    <Title title={"Answers :"} />
                    <AnswersList questionId={params.questionId} />
                    <hr className={"breakLine"} />

                    <AddAnswerForm questionId={params.questionId}/>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {

    return{

        allQuestionsArr : state.questionsReducer.allQuestionsArr,
        AllAnswersOfSpecificQuestion : state.answersReducer.AllAnswersOfSpecificQuestion
    }
}

const mapDispatcToProps = (dispatch) => {

    return{

        getAllAnswersOfSpecificQuestion : (questionId)=> dispatch(getAllAnswersOfSpecificQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(DisplayQuestionAnswers);


       