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
    var boundary = 100;
    if ((width + amount) < boundary){
        width+=amount;
        element.style.width = width + '%'; 
    }
    }

class Plane {
     constructor(value) {
        this.value = value;
        this.fuel_usage = 51;
    }
}

class Car{
    constructor(value){
        this.value = value; //distance in miles
        this.fuel_usage = 25.4; //miles per gallon
    }
}




class Transport{
    constructor(value, type){
        this.value = value;
        this.type = type;
        this.fuel_usage;
    }
    calcCF(){
        switch(this.type){
            case "plane": 
                load_text(); 
                this.fuel_usage = 51;
                return (this.value / this.fuel_usage) * 21;
            case "car":
                load_text();   
                this.fuel_usage = 25.4;
                return (this.value / this.fuel_usage) * 20;
            case "bus":
                load_text();   
                this.fuel_usage = 32.9;
                return (this.value / this.fuel_usage) * 20;
            default:
                alert("We don't have that, sorry")
        }
    }
}

class Plastic {
    constructor(value, type){
        this.value = value;
        this.type = type;
    }
    calcCF(){
        switch(this.type){
            case "eightOz":
                return this.value * ((8*.5)/50.72);
            case "twelveOz":
                return this.value * ((12*.5)/50.72);
            case "thirtyTwoOz":
                return this.value * ((32*.5)/50.72);
        }
    }
}

function createObject(value, type){
    value = parseInt(value);
    error = document.getElementById("error");
    if (isNaN(value)) {
        error.innerHTML = "Please enter a number!";
    }
    else {
        error.innerHTML = "";
        var transportArr = ['car', 'plane', 'bus']
        var plasticArr = ['eightOz', 'twelveOz', 'thirtyTwoOz']
        if (transportArr.indexOf(type) != -1){
            var myTransport = new Transport(value, type);
            update(.5 * myTransport.calcCF());
        }
        else if (plasticArr.indexOf(type) != -1){
            var myPlas = new Plastic(value, type);
            update(.5 * myPlas.calcCF());
        }
    }
}