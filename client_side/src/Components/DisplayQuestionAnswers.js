import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AuthorAndDate from "./AuthorAndDate";
import Title from "./Title";
import AnswersList from "./AnswersList";
import QuestionTags from "./QuestionTags";
import AddAnswerForm from "./AddAnswerForm";
import QuestionOrAnswerDetails from "./QuestionOrAnswerDetails";
import "./ComponentsStyle/DisplayQuestionAnswers.css";


const DisplayQuestionAnswers = ({allQuestionsArr, allAnswersArr}) => {

    // FOR GETTING PARAMS FROM URL
    const params = useParams();

    const displayedQuestion = allQuestionsArr.find(question => question.id === Number(params.questionId));
    const answersArr = allAnswersArr.find(answers => answers.questionId === Number(params.questionId));

    const displayedAnswers = answersArr.allAnswerArr;

    return(
        <>
            {}
            <div className="d-flex flex-row justify-content-center">
                <div className={"col-md-6 justify-content-center w-50 ms-5"}>

                    <Title title={`Question Title: ${displayedQuestion.title}`} />
                    <AuthorAndDate element={displayedQuestion} />
                    <hr className={"breakLine"} />
                    <QuestionOrAnswerDetails description={displayedQuestion.question} />
                    <QuestionTags tags={displayedQuestion.tags} />

                    <Title title={"Answers :"} />
                    <AnswersList answersArray={displayedAnswers} />
                    <hr className={"breakLine"} />

                    <AddAnswerForm />






                    
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {

    return{

        allQuestionsArr : state.questionsReducer.allQuestionsArr,
        allAnswersArr : state.answersReducer.allAnswersArr

    }
}

export default connect(mapStateToProps, null)(DisplayQuestionAnswers);


       