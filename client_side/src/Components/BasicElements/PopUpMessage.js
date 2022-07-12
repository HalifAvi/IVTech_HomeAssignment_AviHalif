import '../BasicElementStyle/PopUpMessage.css';
import Title from "../BasicElements/Title"


const PopUpMessage = ({message, closePopUp, popUpAnswer, popUpAnswerFav, popUpAnswerDaily, kindOfPage}) => {

    const handlePopUp = (setPopUpValue, setWantToAddValue) => {

        closePopUp(setPopUpValue);

        if(kindOfPage == "fav"){

            popUpAnswerDaily(false);
            popUpAnswerFav(setWantToAddValue);
            popUpAnswer(false);
        }
        else if(kindOfPage == "today") {

            popUpAnswerDaily(setWantToAddValue);
            popUpAnswerFav(false);
            popUpAnswer(false);
        }
        else { // General recpies

            popUpAnswerDaily(false);
            popUpAnswerFav(false);
            popUpAnswer(setWantToAddValue); 
        }
    }



    return(
        <section className={"popUpMessage-section"}>
            <div className={"popUpMessage-container"}>
                <Title id={"popUpMessage-title"} titleName={message}/> 
                <div>
                    {
                        message !== process.env.REACT_APP_BASE_MESSAGE_ALREADY_EXIST_TO_FAVORITES ? 
                        <label>
                            <input type={"radio"} name={"question"}/>
                            <i onClick={()=>handlePopUp(false, true)} className={"fa fa-check"} aria-hidden={"true"}></i>
                        </label>
                        :
                        null
                    }
                    <label>
                        <input type={"radio"} name={"question"}/>
                        <i onClick={()=>handlePopUp(false, false)} className={"fa fa-times"} aria-hidden={"false"}></i>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default PopUpMessage;




