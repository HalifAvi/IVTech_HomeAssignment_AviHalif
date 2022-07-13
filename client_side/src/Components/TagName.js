import React from "react";
import "./ComponentsStyle/TagName.css";



const TagName = ({tagName}) => {

    return(
        <>
            {
                <h3 id={"tagName"}>{tagName}</h3>
            }   
        </>
    )
}

export default TagName;


       