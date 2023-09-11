const pickColor = document.getElementById("pickColor")
const eraser = document.getElementById("eraser")
const rainbow = document.getElementById("rainbow")
const defaultColor = document.getElementById("default")
const canvasSize = document.getElementById("canvasSize")
const canvas = document.getElementById("canvas")
const colorPicker = document.getElementById("colorPicker")
const eColor = "#d9d9d9"
const dColor = "#000000"



let pickerColor = "#000000"
let mousedown = false;
let eraserStatus = false;
let rainbowStatus = false;
let dcolorStatus = true;
let pickColorStatus = false;



function initiate(){
    removeAllStates()
    dcolorStatus = true
    defaultColor.classList.add("statusButtonPressed")
}

function animateButton(element, time = 250){
    element.addEventListener("click", ()=> {
        console.log("Animating button")
        element.classList.remove("toolbarButton")
        element.classList.add("toolbarButtonPressed")
        setTimeout(()=> {
            element.classList.add("toolbarButton")
            element.classList.remove("toolbarButtonPressed")
        }, time)
    })
}

function removeAllStates(){
    eraserStatus = false;
    rainbowStatus = false;
    dcolorStatus = false;
    pickColorStatus = false;
    eraser.classList.remove("statusButtonPressed")
    rainbow.classList.remove("statusButtonPressed")
    defaultColor.classList.remove("statusButtonPressed")
    pickColor.classList.remove("statusButtonPressed")
}

function randomColor(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

function buttonStatusCheck(element){
    console.log(eraserStatus)
    console.log(rainbowStatus)
    console.log(dcolorStatus)
    console.log(pickColorStatus)
    if (eraserStatus == true){
        element.style.backgroundColor = eColor;
    } else if (rainbowStatus == true){
        element.style.backgroundColor = randomColor()
    } else if (dcolorStatus == true){
        element.style.backgroundColor = dColor;
    } else if (pickColorStatus == true){
        element.style.backgroundColor = pickerColor;
    }
}

window.onmousedown = ()=> {
    mousedown = true;
}
window.onmouseup = ()=> {
    mousedown = false
}
function pixelHover(element){
    element.addEventListener("mouseover", ()=>{
        if(mousedown == true){
            console.log(mousedown)
            buttonStatusCheck(element)
        }
        element.addEventListener("mousedown", ()=>{
           buttonStatusCheck(element)
        })
            
    })
}

function createGrid(length){
    size = length*length
    if(length<100){
        for(let i = 0; i<size; i++){
            console.log("Creating a \"pixel\"")
            pixel = document.createElement("div")
            pixel.classList.add("pixel")
            pixelHover(pixel)
            canvas.append(pixel)
        }
        canvas.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
        canvas.style.gridTemplateRows = `repeat(${length}, 1fr)`;
    } else {
        alert("Nice try")
    }
    }
    

function destroyGrid(){
    canvas.innerHTML = ''
    initiate()
}



canvasSize.addEventListener("click", ()=> {
    destroyGrid()
    length = parseInt(prompt("What should the width and height be? Input only 1 number, it will be a square."))
    createGrid(length)
})
eraser.addEventListener("click", ()=> {
    removeAllStates()
    eraser.classList.add("statusButtonPressed")
    eraserStatus = true
    
})
defaultColor.addEventListener("click", ()=> {
    removeAllStates()
    defaultColor.classList.add("statusButtonPressed")
    dcolorStatus = true
})

rainbow.addEventListener('click', ()=> {
        removeAllStates()
        rainbow.classList.add("statusButtonPressed")
        rainbowStatus = true;
})

colorPicker.addEventListener("input", ()=> {
    pickerColor = colorPicker.value
})


pickColor.addEventListener("click", () =>{
    removeAllStates()
    pickColor.classList.add("statusButtonPressed")
    pickColorStatus = true
})

animateButton(canvasSize)
initiate()
createGrid(16)

