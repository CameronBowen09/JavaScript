//document.getElementById("lefteye").style.backgroundColor = "pink";
document.getElementById("head").style.transform = "rotate(-20deg)";
//document.getElementById("body").style.border = "10px black solid";
document.getElementById("mouth").style.borderRadius = "10px";
//document.getElementById("righteye").style.border = "8px yellow dotted";
//document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
document.getElementById("body").style.color = "purple";
//document.getElementById("head").style.borderTop = "10px black solid";
//document.getElementById("head").style.transform = "rotate(-20deg)";
document.getElementById("nose").style.borderRadius = "30%";
//document.getElementById("rightarm").style.backgroundColor = "yellow";
document.getElementById("mouth").style.backgroundColor = "red";

var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveUpDownArm);


function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 5) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }

}

function moveUpDownArm(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 30) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 36) {
            clearInterval(id);
        }
    }

}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 20) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}