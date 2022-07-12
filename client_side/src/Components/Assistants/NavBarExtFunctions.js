export const moveIndicator = (e) => {

    let marker = document.querySelector('#navBar-marker'); 

    if(e.firstElementChild.className !== "fa fa-sign-out") {
        
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';

    } else {

        marker.style.left = 430 + 'px';
        marker.style.width = e.offsetWidth + 'px';
    }
}


// Add active class in hovered list item
export const activeLink = (id) => {

    let li_s = document.querySelectorAll('li'); 

    let liArray = Array.from(li_s);
        
    liArray.forEach(item=> item.classList.remove('active'));

    liArray[id].className = "active";
}












 