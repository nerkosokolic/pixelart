colorInput = document.querySelector("#color-selection")
colorButton = document.querySelector("#color-btn")

var changeColor = function() {
    alert("works")
}


for (i=0; i < 3000; i++) {
    var divContainer = document.querySelector(".div-container")
    var divObjects = document.createElement('div')
    divObjects.classList.add("red")
    divContainer.appendChild(divObjects)
}


colorButton.addEventListener('click', changeColor)

