const sizeinput = document.getElementById("size");
const weightinput = document.getElementById("weight");
const percentinput = document.getElementById("percent");
const rotateinput = document.getElementById("rotate");
const sizeinput2 = document.getElementById("size2");
const weightinput2 = document.getElementById("weight2");
const percentinput2 = document.getElementById("percent2");
const colorinput = document.getElementById("inputcolor1");
const colorinput2 = document.getElementById("inputcolor2");
const svg = document.querySelector("svg");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const catcircle1 = document.querySelector(".ccircle1");
const catcircle2 = document.querySelector(".ccircle2");
const textareaforcopy = document.createElement('textarea');
var color = "#048998"
var color2 = "#E9E4E6";
var linecap = "round"
var linecap2 = "round"
 
//events

sizeinput.addEventListener("input", setsize);
weightinput.addEventListener("input", setweight);
percentinput.addEventListener("input", setpercent);
sizeinput2.addEventListener("input", setsize2);
weightinput2.addEventListener("input", setweight2);
percentinput2.addEventListener("input", setpercent2);
colorinput.addEventListener("input", setcolor)
colorinput2.addEventListener("input", setcolor2)
rotateinput.addEventListener("input", setrotate);

//circle1

function setsize(){
    var r = sizeinput.value / 6.28318;
    circle1.setAttribute("r", r)
    circle1.setAttribute("stroke-dasharray", [percentinput.value * sizeinput.value / 100, sizeinput.value]);
    document.getElementById("textsize").innerText = Math.round(r * 2);
}

function setweight(){
    circle1.setAttribute("stroke-width", weightinput.value);
    document.getElementById("textweight").innerText = weightinput.value;
}

function setpercent(){
    circle1.setAttribute("stroke-dasharray", [percentinput.value * sizeinput.value / 100, sizeinput.value]);
    document.getElementById("textpercent").innerText = percentinput.value + "%";
}

function setrotate(){
    svg.setAttribute("transform", ["rotate(" + rotateinput.value + ")"]);
    document.getElementById("textrotate").innerText = rotateinput.value + "°";
}

function setcolor(){
    color = colorinput.value;
    if(colorinput.value.charAt(0) !== "#"){
        color = "#" + colorinput.value;
    }
    circle1.setAttribute("stroke", color);
}

function check(){
    const checkBox = document.getElementById("switch");
    if (checkBox.checked == true && percentinput.value < 96){
            circle1.setAttribute("stroke-linecap", "square");
            linecap = "square";
    }else{
        circle1.setAttribute("stroke-linecap", "round");
        linecap = "round";
    }
}

//circle2

function setsize2(){
    var r = sizeinput2.value / 6.28318;
    circle2.setAttribute("r", r)
    circle2.setAttribute("stroke-dasharray", [percentinput2.value * sizeinput2.value / 100, sizeinput2.value]);
    document.getElementById("textsize2").innerText = Math.round(r * 2);
}

function setweight2(){
    circle2.setAttribute("stroke-width", weightinput2.value);
    document.getElementById("textweight2").innerText = weightinput2.value;
}

function setpercent2(){
    circle2.setAttribute("stroke-dasharray", [percentinput2.value * sizeinput2.value / 100, sizeinput2.value]);
    document.getElementById("textpercent2").innerText = percentinput2.value + "%";
}

function setcolor2(){
    color2 = colorinput2.value;
    if(colorinput2.value.charAt(0) !== "#"){
        color2 = "#" + colorinput2.value;
    }
    circle2.setAttribute("stroke", color2);
}

function check2(){
    const checkBox2 = document.getElementById("switch2");
    if (checkBox2.checked == true && percentinput2.value < 96){
            circle2.setAttribute("stroke-linecap", "square");
            linecap2 = "square";
    }else{
        circle2.setAttribute("stroke-linecap", "round");
        linecap2 = "round";
    }
}

//switch

function ccircle1(){
    catcircle1.classList.toggle("categorycheck");
    catcircle1.classList.remove("notcategorycheck");
    catcircle2.classList.toggle("notcategorycheck");
    catcircle2.classList.remove("categorycheck");
    document.querySelector(".menagment3").classList.toggle("sleep");
    document.querySelector(".menagment2").classList.remove("sleep");
    catcircle1.disabled = true;
    catcircle2.disabled = false;
}
function ccircle2(){
    catcircle2.classList.toggle("categorycheck");
    catcircle2.classList.remove("notcategorycheck");
    catcircle1.classList.toggle("notcategorycheck");
    catcircle1.classList.remove("categorycheck");
    document.querySelector(".menagment2").classList.toggle("sleep");
    document.querySelector(".menagment3").classList.remove("sleep");
    catcircle2.disabled = true;
    catcircle1.disabled = false;
}

//popup
function openpopup() {
    document.getElementById("backgraundpopup").style.display = "block";

    //create code
    document.querySelector(".token1").innerText = '<svg transform="rotate(' + rotateinput.value + ')">';
    document.querySelector(".token2").innerText = '    <circle r="' + sizeinput2.value / 6.28318 + '" cx="50%" cy="50%" fill="none" class="circle2" stroke="' + color2 + '" stroke-width="' +  weightinput2.value + '" stroke-linecap="' + linecap2 + '" stroke-dasharray="' + percentinput2.value * sizeinput2.value / 100 + ", " + sizeinput2.value + '"/>';
    document.querySelector(".token3").innerText = '    <circle r="' + sizeinput.value / 6.28318 + '" cx="50%" cy="50%" fill="none" class="circle1" stroke="' + color + '" stroke-width="' +  weightinput.value + '" stroke-linecap="' + linecap + '" stroke-dasharray="' + percentinput.value * sizeinput.value / 100 + ", " + sizeinput.value + '"/>';
    document.querySelector(".token4").innerText = '</svg>';
    document.querySelector(".token5").innerText = '<style>';
    document.querySelector(".token6").innerText = '    svg{';
    document.querySelector(".token7").innerText = '        width: 600px;';
    document.querySelector(".token8").innerText = '        height: 600px;';
    document.querySelector(".token9").innerText = '    }';
    document.querySelector(".token10").innerText = '</style>';
}
window.onclick = function(event) {
  if (event.target == document.getElementById("backgraundpopup")) {
    document.getElementById("backgraundpopup").style.display = "none";
  }
}


function gotogithub(){
    window.open("https://github.com/granacik320")
}
function copy(){
    textareaforcopy.textContent = document.querySelector("pre").textContent;
    document.body.append(textareaforcopy);
    textareaforcopy.select()
    document.execCommand("copy");
}
