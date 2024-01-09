window.addEventListener("load", ()=>{
// canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.75;
canvas.height = window.innerHeight * 0.75;


// heading color
const heading = document.querySelector("h1"); 


// select
const selectButton = document.getElementById("choose-colors");
selectButton.addEventListener("change", ()=>{
    const optionIndex = selectButton.selectedIndex;
    const text = selectButton.options[optionIndex].text;
    if(text === "Choose Color"){
        ctx.strokeStyle = "transparent";
        heading.style.color = "black";
    }else{
        ctx.strokeStyle = text;
        heading.style.color = text;
        console.log(text);
    }
});

// start app coding
let painting = false;

function start(){
    painting = true;
    draw(Event);
}

function end(){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(!painting) return;
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.lineTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
    
}

canvas.addEventListener("mousedown",start);
canvas.addEventListener("mouseup",end);
canvas.addEventListener("mousemove",draw);
window.addEventListener("mouseup",end);

// clear canvas
const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

// eraser
const eraser = document.getElementById("eraser");
function erase(){
    ctx.strokeStyle = "white";
}
eraser.addEventListener("click", erase);

})

