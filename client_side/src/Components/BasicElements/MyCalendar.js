import 'react-calendar/dist/Calendar.css';
import '../BasicElementStyle/MyCalendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { connect } from 'react-redux';
import {setSpecificDayUserValuesNutrition} from "../../Redux/Actions/calendarActions.js"



const MyCalendar = ({setSpecificDayUserValuesNutrition}) => {

    const [date, setDate] = useState('');

    const onChange = date => {

        setSpecificDayUserValuesNutrition(formatDate(date), date);
    }

    return(

        <div className={"calendar-section pattern-dots-sm slategray h-5"}>
                <Calendar onChange={onChange} value={date} />
        </div>

    )
}


const mapDispatchToProps = (dispatch) => {

    return{

        setSpecificDayUserValuesNutrition : (formatDate, date) => dispatch(setSpecificDayUserValuesNutrition(formatDate, date))
    }
}



export default connect(null, mapDispatchToProps)(MyCalendar);




function formatDate(date) {
    
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


