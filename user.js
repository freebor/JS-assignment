const done = () =>{
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let userDisplay = document.getElementById('userDisplay');
    let myDate = document.getElementById('myDate');
    let timeNow = new Date().getHours();

    const greeting = () => {
    
        if (timeNow >= 6 && timeNow < 12) {
            return "Good Morning"
        }else if (timeNow >= 12 && timeNow < 18) {
            return "Good Afternoon"
        }else{
            return "Good Evening"
        }
    }

    userDisplay.innerHTML = greeting() + "<br> " + firstName.value + " " + lastName.value ;
}

