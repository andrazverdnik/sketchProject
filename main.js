const pickColor = document.getElementById("pickColor")
const eraser = document.getElementById("eraser")
const rainbow = document.getElementById("rainbow")
const defaultColor = document.getElementById("default")
const canvasSize = document.getElementById("canvasSize")
const canvas = document.getElementById("canvas")
const colorPicker = document.getElementById("colorPicker")

let color = "#000000"


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

function pixelHover(element){
    element.addEventListener("mouseover", ()=>{
        element.style.backgroundColor = color;
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
}



canvasSize.addEventListener("click", ()=> {
    destroyGrid()
    length = parseInt(prompt("What should the width and height be? Input only 1 number, it will be a square."))
    createGrid(length)
})
eraser.addEventListener("click", ()=> {
    color = "#d9d9d9"
})
defaultColor.addEventListener("click", ()=> {
    color = "#000000"
})
colorPicker.addEventListener("input", ()=> {
    color = colorPicker.value
})

animateButton(eraser)
animateButton(rainbow)
animateButton(canvasSize)
animateButton(defaultColor)
createGrid(16)

