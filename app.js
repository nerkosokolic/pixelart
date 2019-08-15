
var displayWindowSize = () => {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var pixelWidth = 20;
    var pixelHeight = 20;
    var windowArea = (w) * (h)
    var numberOfPixels = Math.floor(w / pixelWidth) * Math.floor(h / pixelHeight)

    createBoard(numberOfPixels)
}
var createBoard = (numOfPixels) => {
    document.querySelector(".div-container").innerHTML = ""
    for (i=0; i < numOfPixels; i++) {
        var divObjects = document.createElement('div')
        var divContainer = document.querySelector(".div-container")
        divObjects.classList.add("style","pixel")
        divContainer.addEventListener('mouseover', handleClick)
        divContainer.appendChild(divObjects)
    }
    pixels = reallocatePixels.call()
}

var reallocatePixels = () => document.querySelectorAll(".pixel")

    
displayWindowSize.call()

var pixels


colorButton = document.querySelector("#color-btn")
colorInput = document.querySelector("#color-selection")
userColor = "grey"

// // creates container

var changeColor = (event) => {
    userColor = colorInput.value
    event.preventDefault()
    colorButton.style.background = userColor
}

colorButton.addEventListener('click', changeColor)


var handleClick = (event) => { 
    if (event.target.classList.contains("pixel")) {
        event.target.style.background = userColor
    }
}

var movie_button = document.querySelector('#movie-btn')

var clearPixels = function() {
    pixels.forEach((pixel) => {
        pixel.classList.remove("style")
        pixel.classList.add("clear")
    })
}

var movieClick = (event) => {
    event.preventDefault()
    var searchTerm = document.querySelector("#search-field").value
    var div = document.querySelector(".div-container")
    var options = {
        url: `http://www.omdbapi.com/?t=${ searchTerm }&apikey=2f6435d9&page=1`
    }
    
    $.ajax(options).done((resp) => {
        clearPixels()
        div.classList.add("background")
        div.style.backgroundImage = `url('${resp.Poster}')`
    })
}

movie_button.addEventListener('click', movieClick)



window.addEventListener("resize", displayWindowSize);


pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', handleClick)
})
