import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorAndDate from "./AuthorAndDate";
import Title from "./Title";
import AnswersList from "./AnswersList";
import QuestionTags from "./QuestionTags";
import AddAnswerForm from "./AddAnswerForm";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import "./ComponentsStyle/DisplayQuestionAnswers.css";



const DisplayQuestionAnswers = ({allQuestionsArr, allAnswers}) => {

    // FOR GETTING PARAMS FROM URL
    const params = useParams();

    const displayedQuestion = allQuestionsArr.find(question => question.id === Number(params.questionId)); 
    const allAnswersOfSpecificQuestion = allAnswers.filter(answer => answer.questionid === Number(params.questionId));

    const sortedAnswersArr = (allAnswersOfSpecificQuestion).sort(function(a, b) {

        return b.score - a.score;
    });



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
                    <AnswersList questionId={params.questionId} allAnswersOfSpecificQuestion={sortedAnswersArr}/>
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
        allAnswers : state.answersReducer.allAnswers
    }
}


export default connect(mapStateToProps, null)(DisplayQuestionAnswers);


       