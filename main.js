const pickColor = document.getElementById("pickColor")
const eraser = document.getElementById("eraser")
const rainbow = document.getElementById("rainbow")
const canvasSize = document.getElementById("canvasSize")

function animateButton(element, time = 250){
    element.addEventListener("click", ()=> {
        element.classList.remove("toolbarButton")
        element.classList.add("toolbarButtonPressed")
        setTimeout(()=> {
            element.classList.add("toolbarButton")
            element.classList.remove("toolbarButtonPressed")
        }, time)
    })
}

animateButton(pickColor)
animateButton(eraser)
animateButton(rainbow)
animateButton(canvasSize)


