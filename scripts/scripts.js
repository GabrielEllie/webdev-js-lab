/****************** YOUR NAME: Gabriel Ellison Barillos


/****************** create variables ******************/

var modelName = document.getElementById("model-text").innerHTML;
var duration = document.getElementById("duration-text").innerHTML;


/****************** helper function ******************/


function recalculate() {
    var costLabel = document.getElementById("calculated-cost");
    var newTotal = 0

    if (modelName == "Model XYZ") {
        newTotal = duration * 100;
    } else if (modelName == "Model CPRG") {
        newTotal = duration * 213;
    }

    costLabel.innerHTML = newTotal;
}

/****************** model button logic ******************/

var modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName == "Model XYZ") {
        modelName = "Model CPRG";
    } else if (modelName == "Model CPRG") {
        modelName = "Model XYZ";
    }
    modelText.innerHTML = modelName;
    recalculate()
}
modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/

var durationButton =  document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    duration = prompt("Enter new duration: ");
    durationText.innerHTML = duration;
    recalculate();
}
durationButton.addEventListener("click", changeDuration);

