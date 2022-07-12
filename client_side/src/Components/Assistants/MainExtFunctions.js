

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];



    export const getCurrentDate = () => {

        let date = new Date();
        let dayDate = date.getDate();

        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getYear();

        if(year<1000)
            year+=1900;
        
        if(dayDate<10)
        dayDate = "0" + dayDate;

        return `${days[day]}, ${months[month]} ${dayDate} / ${year}`;
    }






    