window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    console.log(document.getElementById("header"))
    //Adding text to the text boxes
    //TODO - make it disapear on click event
    //Need to call the load_text any time the user's focus leaves the box so it shows back up
    load_text();
}

function clearTravelInput() {
    //Function to clear the text box for CInput
    document.getElementById("travelInput").value = "";
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


function Plane(distance) {
    this.emissions = 69.25;
    this.distance = distance;
    this.fuel_usage = 61.55;
}

function Car(distance){
    this.emissions = 70.22;  //emission factor
    this.distance = distance; //distance in miles
    this.fuel_usage = 25.4; //miles per gallon
}

function go(distance, type){
    type = type.toLowerCase()
    switch(type){
        case "plane": 
            var type = new Plane(distance)
            break;
        case "car":
            var type = new Car(distance);
            break;
        default:
            alert("We don't have that, sorry")
    }
    return (type.distance + type.fuel_usage) * type.emissions;
}

function callGo(){
    alert("hello");
    let miles = int(document.getElementById("travelInput").value);
    let method = document.getElementById("travelMethod").value;
    
    // go(miles, method);
    // update(amount);
}