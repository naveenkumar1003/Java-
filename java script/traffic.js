document.getElementById("stopButton");
document.getElementById("slowButton");
document.getElementById("goButton");

function Red() {
  blacklights();
  document.getElementById("stopLight").style.backgroundColor = "red";
}

function Yellow() {
  blacklights();
  document.getElementById("slowLight").style.backgroundColor = "Yellow";
}
function Green(){
    blacklights();
    document.getElementById("goLight").style.backgroundColor="green";
}

function blacklights() {
  document.getElementById("stopLight").style.backgroundColor = "black";
  document.getElementById("slowLight").style.backgroundColor = "black";
  document.getElementById("goLight").style.backgroundColor = "black";
}
