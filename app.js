
colorButton = document.querySelector("#color-btn")
colorInput = document.querySelector("#color-selection")
userColor = "green"

// creates container

for (i=0; i < 306; i++) {
    var divContainer = document.querySelector(".div-container")
    var divObjects = document.createElement('div')
    divObjects.classList.add("style","pixel")
    divContainer.appendChild(divObjects)
}

var changeColor = function(event) {
    userColor = colorInput.value
    event.preventDefault()
    colorButton.style.background = userColor
}

colorButton.addEventListener('click', changeColor)


var pixels = document.querySelectorAll(".pixel")
var handleClick = function(event){
    event.target.style.background = userColor
}

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', handleClick)
})


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
        div.style.backgroundImage = `url('${resp.Poster}')`
    })
}
// `${mov.Title} : ${mov.Year}`
movie_button.addEventListener('click', movieClick)
