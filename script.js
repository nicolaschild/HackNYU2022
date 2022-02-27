window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    //Adding text to the text boxes
    //TODO - make it disapear on click event
    //Need to call the load_text any time the user's focus leaves the box so it shows back up
    load_text();
    document.getElementById("travelInput").addEventListener("click", clearTravelInput);
    document.getElementById("plasticInput").addEventListener("click", clearPlasticInput);
    document.getElementById("electricalInput").addEventListener("click", clearElectricalInput);
}

function clearTravelInput() {
    //Function to clear the text box for CInput
    document.getElementById("travelInput").value = "";
 }

 function clearPlasticInput() {
    //Function to clear the text box for CInput
    document.getElementById("plasticInput").value = "";
 }

 function clearElectricalInput() {
    //Function to clear the text box for CInput
    document.getElementById("electricalInput").value = "";
 }


function load_text() {
    document.getElementById("travelInput").value = "miles";
    document.getElementById("plasticInput").value = "# of bottles";
    document.getElementById("electricalInput").value = "minutes ran";
}

var width = 1
function update(amount) {
    //Updates the status bar by 1%! Have at it Ty
    //Call it in domLoaded to use it, could even loop through it to set to desired amount
    var element = document.getElementById("progressBar");   
    width+=amount;
    element.style.width = width + '%'; 
    }

class Plane {
     constructor(distance) {
        this.distance = distance;
        this.fuel_usage = 61.55;
    }
}

class Car{
    constructor(distance){
        this.distance = distance; //distance in miles
        this.fuel_usage = 25.4; //miles per gallon
    }
}


function go(distance, type){
    type = type.toLowerCase()
    var myObject;
    switch(type){
        case "plane": 
            myObject = new Plane(distance)
            break;
        case "car":
            myObject = new Car(distance);
            break;
        default:
            alert("We don't have that, sorry")
    }
    load_text();
    return (myObject.distance / myObject.fuel_usage) * 20;
}

function callGo(){
    let miles = parseInt(document.getElementById("travelInput").value);
    let method = document.getElementById("travelMethod").value;
    //Need to check if miles is NaN, then we can throw an error and not call the function
    error = document.getElementById("error");
    if (isNaN(miles)) {
       error.innerHTML = "Please enter a number!";
    }
    else {
       error.innerHTML = "";
       var amount = .1 * go(miles, method);
       update(amount);
    }
}