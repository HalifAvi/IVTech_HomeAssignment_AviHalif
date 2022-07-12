

export const getColor = (percentCaloriesAmount) => {


    if (percentCaloriesAmount < 0.33) {

        return "var(--clr-red)";
    }
    else if (0.66 > percentCaloriesAmount > 0.33) {

        return "var(--clr-yellow)";
    }
    else {

        return "var(--clr-green)";
    }
}

export const setCircleInterval = (dailyCaloriesAmount, currentCaloriesAmount, percentCaloriesAmount, movementNumbers) => {

    const strokeDashoffset = movementNumbers? 
    
    process.env.REACT_APP_BASE_FULL_CIRCLE_VALUE-process.env.REACT_APP_BASE_FULL_CIRCLE_VALUE*(percentCaloriesAmount) 
    :
    process.env.REACT_APP_BASE_FULL_SMALL_CIRCLE_VALUE-process.env.REACT_APP_BASE_FULL_SMALL_CIRCLE_VALUE*(percentCaloriesAmount) 


    // Creating a style element
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    document.head.appendChild(styleSheet);

    // Adding The Keyframes
    /* for input of 65% : 472-472*0.65 = 165.2 => 165 */
    styleSheet.sheet.insertRule(`
        
            @keyframes anim {

                    100%{ stroke-dashoffset: ${strokeDashoffset}; }
        
            }`, styleSheet.length);



    let currentCaloriesAmountDiv = document.getElementById("caloriesScale-number-div");

    if(currentCaloriesAmountDiv === null) {

        currentCaloriesAmountDiv = document.getElementById("caloriesScale-small-number-div");
    }

    let counter = 0;

    if(movementNumbers) {

        setInterval(()=> {

            if(currentCaloriesAmount == 0 && counter == currentCaloriesAmount) {
    
                currentCaloriesAmountDiv.innerHTML = `0/${dailyCaloriesAmount}`; 
                clearInterval();
            }
            else if(counter == currentCaloriesAmount) {
    
                clearInterval();
            }
            else {
    
                counter += 1;
                currentCaloriesAmountDiv.innerHTML = `${counter}/${dailyCaloriesAmount}`; 
            }
        
        }, 0.009)
    } 
    else {

        currentCaloriesAmountDiv.innerHTML = `${currentCaloriesAmount}/${dailyCaloriesAmount}`; 
    }
}