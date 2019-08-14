
    // window.onload = function() {
    //     displayWindowSize()
    // }

    // when resizing the view the reallocatePixels no longer works!

var displayWindowSize = function() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var pixelSize = 20*20
    var spacing = 10
    var windowArea = (w-spacing) * (h-spacing)
    var numberOfPixels = Math.floor(windowArea / pixelSize)
    createBoard(numberOfPixels)
}
var createBoard = function(numOfPixels){
    document.querySelector(".div-container").innerHTML = ""
    for (i=0; i < numOfPixels; i++) {
        var divObjects = document.createElement('div')
        var divContainer = document.querySelector(".div-container")
        divObjects.classList.add("style","pixel")
        divContainer.appendChild(divObjects)
    }
    // debugger
    pixels = reallocatePixels()
}

var reallocatePixels = function() {
    return document.querySelectorAll(".pixel")
}

    
displayWindowSize.call()

var pixels


colorButton = document.querySelector("#color-btn")
colorInput = document.querySelector("#color-selection")
userColor = "grey"

// // creates container

var changeColor = function(event) {
    userColor = colorInput.value
    event.preventDefault()
    colorButton.style.background = userColor
}

colorButton.addEventListener('click', changeColor)


var handleClick = function(event){
    event.target.style.background = userColor
}

var movie_button = document.querySelector('#movie-btn')

var clearPixels = function() {
    pixels.forEach(function(pixel) {
        pixel.classList.remove("style")
        pixel.classList.add("clear")
    })
}

var movieClick = function (event) {
    event.preventDefault()
    var searchTerm = document.querySelector("#search-field").value
    var div = document.querySelector(".div-container")
    var options = {
        url: `http://www.omdbapi.com/?t=${ searchTerm }&apikey=2f6435d9&page=1`
    }
    
    $.ajax(options).done(function(resp) {
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
