export const getLevel = (activityScale) => {

    switch(activityScale){

        case process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LOW : 

            return '1';

        case process.env.REACT_APP_BASE_ACTIVITY_LEVEL_LIGHT : 

            return '2';

        case process.env.REACT_APP_BASE_ACTIVITY_LEVEL_MODERATE : 

            return '3';

        case process.env.REACT_APP_BASE_ACTIVITY_LEVEL_HIGH : 

            return '4';

        case process.env.REACT_APP_BASE_ACTIVITY_LEVEL_VERY_HIGH : 

            return '5';
    }
}