import React from "react";
import "./ComponentsStyle/AuthorAndDate.css";


const AuthorAndDate = ({element}) => {

    return(
            <div>
                <p id={"authorAndDate"}>
                    {`--- asked ${(element.createdAt).substring(0, (element.createdAt).indexOf("T"))} by ${element.nickname} ---`}
                </p>
            </div>
    )
}

export default AuthorAndDate;

