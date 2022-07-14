import React from "react";
import "./ComponentsStyle/Title.css";


const QuestionTitle = ({title}) => {

    return(
            <div id={"title"}>
                <h1>
                    {title}
                </h1>
            </div>
    )
}

export default QuestionTitle;

