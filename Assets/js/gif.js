// define global variables

// create an array of topics

var topics = ["Star Wars", "Shawshank Redemption", "Frozen", "Gladiator", "Emperors New Groove", "Mean Girls", "Layer Cake", "Children of Men", "Toy Story", "Inception"]

// functions

// function to display buttons
function displayButtons() {

    // loop through topics
    topics.forEach(function(movie) {

        // assign button markup
        var button = $("<button>")
        // add button bootstrap
        button.addClass("btn btn-primary m-2")
        // add text to button
        button.text(movie)
        // append button to #buttons
        $("#buttonsCol").append(button); 
    })
}

// function to display new buttons
function displayNewButtons() {
    // var to hold input
    var newMovie = $("#movieForm").val()

    // create new button
    var button = $("<button>")
    button.addClass("btn btn-primary m-2")
    button.text(newMovie)

    // append buttonsCol
    $("#buttonsCol").append(button)

}

// on document ready push topics to buttons
$(document).ready(function() {

    displayButtons()

    // on click push new buttons
    $("#submitButton").on("click", function () {
        displayNewButtons()
    })

})