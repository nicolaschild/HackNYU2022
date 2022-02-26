window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    console.log(document.getElementById("header"))
    //Adding text to the text boxes
    //TODO - make it disapear on click event
    //Need to call the load_text any time the user's focus leaves the box so it shows back up
    load_text();
}


function load_text() {
    document.getElementById("travelInput").value = "miles";
    document.getElementById("plasticInput").value = "# of bottles";
    document.getElementById("electricalInput").value = "minutes ran";
}


function update() {
    //Updates the status bar by 1%! Have at it Ty
    //Call it in domLoaded to use it, could even loop through it to set to desired amount
    var element = document.getElementById("progressBar");   
    var width = 1;
    width++;
    element.style.width = width + '%'; 
    }
/*
    

    class transportation(CarbonFootPrint):
        
        def go(self, kilometers, type):
            (dis + fuel use) * emission_factor
    
        

*/

