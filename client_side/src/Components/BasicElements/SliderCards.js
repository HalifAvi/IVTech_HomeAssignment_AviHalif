import { useEffect, useState } from 'react';
import '../BasicElementStyle/SliderCards.css';
import Image from "../BasicElements/Image";
import { changeCurrentCaloriesAmount, setOperation } from "../../Redux/Actions/caloriesActions.js";
import { connect } from 'react-redux';
import PopUpMessage from './PopUpMessage';
import { insertNewAddedRecipe, setAllDefaultRecipesArray, insertNotNewRecipeToDaily, decreaseRecpieAmountFromDaily, setToSpecialRecipesArray, setChoosenRecepiesArrayIdx, getMoreRecpieDetails, addRecipeToFavorites, removeRecpieFromFavorites, removeRecpieFromDaily } from "../../Redux/Actions/recipesActions.js";
import Title from './Title';
import RecpieDescriptionCard from "../BasicElements/RecpieDescriptionCard";


                                                    // paramToChange - an obj to change the state of pervious component
const SliderCards = ({changeCurrentCaloriesAmount, paramToChange, getMoreRecpieDetails, insertNewAddedRecipe, userId, todayRecipes, addRecipeToFavorites, setOperation,
                      currentDisplayedRecepies, setToSpecialRecipesArray, allFavoriteRecpies, kindOfPage, removeRecpieFromFavorites, removeRecpieFromDaily,
                      setChoosenRecepiesArrayIdx, insertNotNewRecipeToDaily, decreaseRecpieAmountFromDaily}) => { 
        

    // const [swiperVariable, setSwiperVariable] = useState(true);
    const [popUp, setPopUp] = useState(false);
    const [wantToAdd, setWantToAdd] = useState(false);
    const [wantToRemoveFav, setWantToRemoveFav] = useState(false);
    const [wantToRemoveDaily, setWantToRemoveDaily] = useState(false);
    const [clickedRecipeObj, setClickedRecipeObj] = useState(0);
    const [clickedElement, setClickedElement] = useState('');
    const [message, setMessage] = useState('');
    const [isAlreadyExistInDaily, setIsAlreadyExistInDaily] = useState(0);

    let arrayToDisplay;

    if(kindOfPage=="fav") {

        arrayToDisplay = allFavoriteRecpies;

    } else if(kindOfPage=="today") {

        arrayToDisplay = todayRecipes;

    } else {

        arrayToDisplay = currentDisplayedRecepies;
    }

    
    // To refresh again the displayed cards when back to general recpies
    useEffect(()=>{

        setChoosenRecepiesArrayIdx(0);
        setToSpecialRecipesArray();
        
    }, [])



    useEffect(()=> {

        // We put the Swiper CND script in index.js cause we'll come accross row 17 we'll need Swiper 
        var script = document.createElement("script");                      //  effect: 'coverflow',
        script.innerText = `var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows : true
                        },
                        loop: false,
                    });`;
        script.async = true;

        document.body.appendChild(script);

        return () => {

            document.body.removeChild(script);
        }

    }, [])  


    // In case the answer from the popUp is true : user wants to add
    useEffect(()=>{                                                                     

        async function handleAddRecipe() {

                if(wantToAdd){ 

                    (clickedElement.nextElementSibling).style.display = "block";
        
                    setTimeout(()=>{
        
                        (clickedElement.nextElementSibling).style.display = "none";
        
                    }, 4000);

                    if(isAlreadyExistInDaily==0){ // Want to add to daily + not found in daily already

                        await getMoreRecpieDetails(clickedRecipeObj);  
    
                        await insertNewAddedRecipe(clickedRecipeObj, userId);

                    } else { // Want to add to daily + already found in daily

                        insertNotNewRecipeToDaily(clickedRecipeObj.id, isAlreadyExistInDaily);

                        setIsAlreadyExistInDaily(0);
                    }
        
                    // WAIT !!!!! here till you update the currentCalories cause we want to use it immediatly after to update the displyed recipes
                    const calories = clickedRecipeObj.calories == null ? 
                    
                        (clickedRecipeObj.nutrition.nutrients[0].amount).toFixed(0)

                        :

                        clickedRecipeObj.calories

                    await setOperation("-");

                    await changeCurrentCaloriesAmount(calories);

                    // After click on 'addTopPlate' we want to render the caloriesBar so we set the state
                    // of the component that contains the caloriesBar and because the useEffect of caloriesBar
                    // is not define with [] so eveytime we render it'll render again 
                    const {paintAgainCaloriesBar, setPaintAgainCaloriesBar} = paramToChange;
            
                    setPaintAgainCaloriesBar(!paintAgainCaloriesBar);
        
                    setWantToAdd(false);

                    setTimeout( async ()=>{

                        await setToSpecialRecipesArray(); // Set the recipes array to the current calories limitation

                    }, 3000)
        
                } else if(wantToRemoveFav){

                    await removeRecpieFromFavorites(clickedRecipeObj)

                    setWantToRemoveFav(false);

                } else if(wantToRemoveDaily){

                    if(clickedRecipeObj.recipehowmanyadded > 1) {

                        await decreaseRecpieAmountFromDaily(clickedRecipeObj);

                    } else {

                        await removeRecpieFromDaily(clickedRecipeObj);

                    }

                    await setOperation("+");

                    await changeCurrentCaloriesAmount(clickedRecipeObj.recipecalories);

                    // After click on 'addTopPlate' we want to render the caloriesBar so we set the state
                    // of the component that contains the caloriesBar and because the useEffect of caloriesBar
                    // is not define with [] so eveytime we render it'll render again 
                    const {paintAgainCaloriesBar, setPaintAgainCaloriesBar} = paramToChange;
            
                    setPaintAgainCaloriesBar(!paintAgainCaloriesBar);

                    setWantToRemoveDaily(false);
                }
        }

        handleAddRecipe();

        if(!popUp) {

            setClickableIcons("painted");
        }

    }, [popUp])


    const addRecipeToPlate = (recipeObj, e) => { 
        
        setClickedElement(e.target);

        setClickableIcons("none");

        let answer = isAlreadyAdded(recipeObj.id)

        setIsAlreadyExistInDaily( answer );
        
        answer !==0 ? setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_ADD_EXIST_RECIPE) : setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_ADD_RECIPE);

        setClickedRecipeObj(recipeObj);
        
        setPopUp(true);
    }

    const isAlreadyAdded = (clickedRecipeId) => {

        let answer = 0;

        todayRecipes.forEach(recipe=> { 
            
            if(recipe.recipesn == Number(clickedRecipeId)){

                answer = recipe.recipehowmanyadded;
            }            
        });

        return answer;
    }

    const handleMoreRecpieDetails = async (recipeObj) => { 

        await getMoreRecpieDetails(recipeObj);

        const modal = document.querySelector(".modal");

        modal.showModal();
    }
    
    const handlePressOnLike = async (e, recipeObj) => {   

        if(!(allFavoriteRecpies.some(item=> recipeObj.id === item.recipesn))) {

            e.target.style.color = "#e97e7e";

            (e.target.nextElementSibling).style.display = "block";

            setTimeout(()=>{

                (e.target.nextElementSibling).style.display = "none";

            }, 4000);

            await getMoreRecpieDetails(recipeObj);

            await addRecipeToFavorites(recipeObj);
        }

        else{

            setMessage(process.env.REACT_APP_BASE_MESSAGE_ALREADY_EXIST_TO_FAVORITES);

            setPopUp(true);
        }
    }

    const handlePressOnRemove = (recipeObj) => {       

        kindOfPage=="fav" ? setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_REMOVE_LIKE) : setMessage(process.env.REACT_APP_BASE_MESSAGE_BEFORE_REMOVE_FROM_DAILY)

        setClickedRecipeObj(recipeObj);

        setPopUp(true);
    }


    return(
        
        <section className={"swiper-section pattern-dots-sm slategray h-5"}>

            <div className={"swiper-container"}>
                <div className={"swiper-wrapper"}>
                    {
                        arrayToDisplay.length !== 0 ?

                        (arrayToDisplay).map(recipeObj=>{

                            return ( 
                                <div key={recipeObj.id} className={"swiper-slide"}>
                                    { kindOfPage!=="fav" && kindOfPage!=="today"?
                                    <div>
                                        <i onClick={(e)=>handlePressOnLike(e,recipeObj)} className={"fa fa-heart-o"} aria-hidden={"true"} id={"sliderCards-heart-btt"} style={{color:"white", fontSize:"40px", position:"absolute", bottom:"10px", left: "150px"}}></i>
                                        <div className={"dancing-hearts"}>
                                            <div>
                                                <Image classN={"move-heart move-heart-icon1"} src={"./images/heart2-move.png"} />
                                            </div>
                                            <div>
                                                <Image classN={"move-heart move-heart-icon2"} src={"./images/heart1-move.png"} />
                                            </div>
                                            <div>
                                                <Image classN={"move-heart move-heart-icon3"} src={"./images/heart2-move.png"} />
                                            </div>
                                        </div>
                                    </div>
                                        :
                                        <Image onClickEvent={()=>handlePressOnRemove(recipeObj)} classN={"remove-like-icon-img"} src={process.env.REACT_APP_BASE_REMOVE_FAV_ICON_URL}/>  
                                    }
                                    <Image id={"recipe-img"} src={recipeObj.image || recipeObj.recipeimage}/>
                                    <Title id={"sliderCards-recipe-title"} titleName={recipeObj.title || recipeObj.recipetitle}/>
                                    <div>
                                        <Image id={recipeObj.id} classN={"calories-icon-img"} onClickEvent={kindOfPage!=="fav" && kindOfPage!=="today"?(e)=>addRecipeToPlate(recipeObj, e):null} src={process.env.REACT_APP_BASE_CALORIES_ICON_URL}/>
                                        <div className={"dancing-calories"}>
                                            <div>
                                                <Image classN={"move-calorie move-calorie-icon1"} src={"./images/calories-move.png"} />
                                            </div>
                                            <div>
                                                <Image classN={"move-calorie move-calorie-icon2"} src={"./images/calories-move.png"} />
                                            </div>
                                            <div>
                                                <Image classN={"move-calorie move-calorie-icon3"} src={"./images/calories-move.png"} />
                                            </div>
                                        </div>
                                    </div>
                                    <Title id={"sliderCards-recipe-calories"} titleName={recipeObj.calories || recipeObj.recipecalories || (recipeObj.nutrition.nutrients[0].amount).toFixed(0)}/>
                                    <Title id={"sliderCards-recipe-moreDetails"} classN={"open-button"} onClickEvent={()=>handleMoreRecpieDetails(recipeObj)} titleName={process.env.REACT_APP_BASE_TITLE_GP_TO_RECIPE}/>
                                    { kindOfPage=="today" && recipeObj.recipehowmanyadded > 1 ?<Title id={"sliderCards-recipe-howmanyadded"} titleName={`x${recipeObj.recipehowmanyadded}`}/> : null}
                                    <RecpieDescriptionCard />
                                </div>
                            )
                        }) 

                        :

                        <Title id={"sliderCards-noRecpies-message"} titleName={kindOfPage!=="fav" && kindOfPage!=="today"?process.env.REACT_APP_BASE_NO_RECPIES_GENERAL_MESSAGE:process.env.REACT_APP_BASE_NO_RECPIES_MESSAGE} /> 
                    }
                </div>
            </div>  

            {(popUp) && <PopUpMessage  closePopUp={setPopUp} popUpAnswer={setWantToAdd} popUpAnswerFav={setWantToRemoveFav} popUpAnswerDaily={setWantToRemoveDaily} kindOfPage={kindOfPage} message={message}/>}
          
        </section>
    )
}


const setClickableIcons = (status) => {

    const caloriesIcons = document.querySelectorAll('.calories-icon-img');

    [...caloriesIcons].forEach(element => {

        element.style.pointerEvents = status;
    });
} 


const mapStateToProps = (state) => {

    return{

        userId : state.signInUpReducer.userId,
        todayRecipes : state.recipesReducer.todayRecipes,
        currentDisplayedRecepies : state.recipesReducer.currentDisplayedRecepies,
        currentCaloriesAmount : state.caloriesReducer.currentCaloriesAmount,
        allFavoriteRecpies : state.recipesReducer.allFavoriteRecpies
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        changeCurrentCaloriesAmount : (clickedRecipeObj) => dispatch(changeCurrentCaloriesAmount(clickedRecipeObj)),
        insertNewAddedRecipe : (recipeObj, userId) => dispatch(insertNewAddedRecipe(recipeObj, userId)),
        setAllDefaultRecipesArray : () => dispatch(setAllDefaultRecipesArray()),
        setToSpecialRecipesArray : () => dispatch(setToSpecialRecipesArray()),
        setChoosenRecepiesArrayIdx : (idxArr)=> dispatch(setChoosenRecepiesArrayIdx(idxArr)),
        getMoreRecpieDetails : (recipeObj) => dispatch(getMoreRecpieDetails(recipeObj)),
        addRecipeToFavorites : (recipeObj) => dispatch(addRecipeToFavorites(recipeObj)),
        removeRecpieFromFavorites : (recipeObj) => dispatch(removeRecpieFromFavorites(recipeObj)),
        removeRecpieFromDaily : (recipeObj) => dispatch(removeRecpieFromDaily(recipeObj)),
        setOperation : (operation) => dispatch(setOperation(operation)),
        insertNotNewRecipeToDaily : (recipeObj, userId) => dispatch(insertNotNewRecipeToDaily(recipeObj, userId)),
        decreaseRecpieAmountFromDaily : (recipeObj) => dispatch(decreaseRecpieAmountFromDaily(recipeObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderCards);
