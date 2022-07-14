import React from "react";
import TagName from "./TagName";


const QuestionTags = ({tags}) => {

    return(
            <div>
                {
                    (tags.split(',')).map((tagName, idx) => {

                        return <TagName key={idx} tagName={tagName}/>
                    })
                }
            </div>
    )
}

export default QuestionTags;

