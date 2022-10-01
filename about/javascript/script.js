function tpMenu() {
    const link = document.querySelector('.links');

    if (link.style.display === "none") {
        link.style.display = "block";
    }
    else {
        link.style.display = "none";
    }
}

tpMenu()

// Variable
const accordion = document.getElementsByClassName('content')

//This allows us to loop through all of our classes under the accordion class
for(i=0; i < accordion.length; i++) {
    //We then add a click event to each class 
    accordion[i].addEventListener('click', function () {
        //The toggle will add the active and remove the active when clicking
        this.classList.toggle('active')
    })
}


