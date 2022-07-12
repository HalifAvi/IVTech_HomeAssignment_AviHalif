import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const handleAction = async (event,
    formKind, navigate, stateObj, imgValue,
    setMessageAfterSign, setAllUserParamsFromDb,
    setAmountOfCalories, setAllDefaultRecipesArray,
    setTodayRecipesArray, setFavoritesRecpies) => {

    event.preventDefault();

    const { 

        emailSignIn, setEmailSignIn,
        emailSignUp, setEmailSignUp,
        passwordSignIn, setPasswordSignIn,
        passwordSignUp, setPasswordSignUp,
        firstName, setFirstName,
        lastName, setLastName, 
        age, setAge,
        height, setHeight, 
        weight, setWeight,
        gender, setGender,
        activityLevel, setActivityLevel,
        setImgValue

        } = stateObj;

        // Here we have the file with all the details
        // console.log("imgValue", imgValue)

    if(formKind === process.env.REACT_APP_SIGN_UP_BUTTON){

        try{ 

            // Because we also sending an image we need to append everything to formData
            const formData = new FormData();
            formData.append('file', imgValue);
            formData.append('email', emailSignUp);
            formData.append('password', passwordSignUp);
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('age', age);
            formData.append('height', height);
            formData.append('weight', weight);
            formData.append('gender', gender);
            formData.append('activityLevel', activityLevel);


            let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_UP_URL,

                formData
            ,{

                withCredentials: true,
                // The 'Content-type' is according to 'form-data' cause we want to send here also an image
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'multipart/form-data'
                }
            })

            changeMessageBackgroundColor(process.env.REACT_APP_BASE_SUCCESS_STYLE);

            // Dispath the action
            setMessageAfterSign(response.data.msg);

            setAllInputsToEmpty(

                setEmailSignIn, setEmailSignUp, setPasswordSignIn, setPasswordSignUp, setFirstName, setLastName,
                setAge, setHeight, setWeight, setGender, setActivityLevel, setImgValue
            );

            // Navigate to signin in case the registration successfuly
            navigate(process.env.REACT_APP_BASE_SIGN_IN_FORM_PATH);

        }
        catch(e) {

            changeMessageBackgroundColor(process.env.REACT_APP_BASE_FAILD_STYLE);

            // Dispath the action
            setMessageAfterSign(e.response.data.msg);

            setAllInputsToEmpty(

                setEmailSignIn, setEmailSignUp, setPasswordSignIn, setPasswordSignUp, setFirstName, setLastName,
                setAge, setHeight, setWeight, setGender, setActivityLevel, setImgValue
            );
        }

    }else{ // signin!!!

        try{

            let response = await axios.post(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_SIGN_IN_URL,
                {
                    email: emailSignIn, 
                    password: passwordSignIn
                },
                {

                withCredentials: true,
                headers: {

                    'Access-Control-Allow-Origin' : '*',
                    'Content-Type' : 'application/json'
                }
            })


            // Dispath the action
            setMessageAfterSign(response.data.msg);

            setAllInputsToEmpty(

                setEmailSignIn, setEmailSignUp, setPasswordSignIn, setPasswordSignUp, setFirstName, setLastName,
                setAge, setHeight, setWeight, setGender, setActivityLevel, setImgValue
            );


            const decode = jwt_decode(response.data.accessToken);

            // Dispath the action
            await setAllUserParamsFromDb({

                userId : decode.userId,
                email : decode.email,
                gender : decode.gender,
                firstName : decode.firstName,
                lastName : decode.lastName,
    
                age : decode.age,
                height : decode.height,
                weight : decode.weight,
                activityLevel : decode.activityLevel,
    
                fileName : decode.fileName
            }) 

            await setAmountOfCalories({

                dailyCaloriesAmount: decode.dailyCaloriesAmount,
                currentCaloriesAmount: decode.currentCaloriesAmount,
                updateserialnumber: decode.updateserialnumber
            });


            await setFavoritesRecpies(decode.userFavRecipes);

            await setAllDefaultRecipesArray();

            await setTodayRecipesArray(decode.userTodayRecipes);

            // Navigate to main page in case login successfuly
            navigate(process.env.REACT_APP_BASE_LOADING_PAGE_PATH + 
                    process.env.REACT_APP_BASE_MAIN_PATH + "/" +
                    process.env.REACT_APP_BASE_LOADING_MAIN_PAGE_TIME)

        }
        catch(e){

            changeMessageBackgroundColor(process.env.REACT_APP_BASE_FAILD_STYLE);

            // Dispath the action
            setMessageAfterSign(e.response.data.msg);

            setAllInputsToEmpty(

                setEmailSignIn, setEmailSignUp, setPasswordSignIn, setPasswordSignUp, setFirstName, setLastName,
                setAge, setHeight, setWeight, setGender, setActivityLevel, setImgValue
            );
        }
    }
}


const changeMessageBackgroundColor = (style) => {

    const messageTitles = (document.querySelectorAll('#swappingSignBackPanel-signMessage-title'));

    [...messageTitles].map(item=>{

        item.setAttribute("style", style);
    })

}


const setAllInputsToEmpty = ( setEmailSignIn, setEmailSignUp, setPasswordSignIn, setPasswordSignUp, setFirstName, setLastName,
                            setAge, setHeight, setWeight, setGender, setActivityLevel, setImgValue) => {

    setEmailSignIn('');
    setEmailSignUp('');
    setPasswordSignIn('');
    setPasswordSignUp('');
    setFirstName('');
    setLastName(''); 
    setAge('');
    setHeight('');
    setWeight('');
    setGender(process.env.REACT_APP_BASE_GENDER_DEFAULT);
    setActivityLevel(process.env.REACT_APP_BASE_ACTIVITY_LEVEL_DEFAULT);
    setImgValue('');

    const allInputsSign = document.querySelectorAll('input[id="form-input"]');

    [...allInputsSign].forEach(element => {

        element.value = "";
    });         
    
    (document.querySelectorAll('input[type=radio]')[1]).checked = "checked";
    (document.querySelectorAll('input[type=radio]')[6]).checked = "checked";

}
