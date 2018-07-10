// define global variables

// create an array of topics

var topics = ["Star Wars", "Shawshank Redemption", "Frozen", "Gladiator", "Emperors New Groove", "Mean Girls", "Layer Cake", "Children of Men", "Toy Story", "Inception"]

// functions -------------------

// function to display buttons
function displayButtons() {

    // loop through topics
    topics.forEach(function(movie) {

        // assign button markup
        var button = $("<button>")
        // add button bootstrap
        button.addClass("btn btn-primary m-2 movieButton")
        // add attribute to identify each button
        button.attr("data-moviename", movie);
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
    button.addClass("btn btn-primary m-2 movieButton")
    button.attr("data-moviename", newMovie)
    button.text(newMovie)

    // append buttonsCol
    $("#buttonsCol").append(button)

}

// listeners -------------------

// on document ready push topics to buttons and listen for clicks
$(document).ready(function() {

    displayButtons()

    // on click push new buttons
    $("#submitButton").on("click", function () {
        displayNewButtons()
    })

    // button on click AJAX call
    $(document).on("click", ".movieButton", function() {
            // store pick moviename value
            var userMovie = $(this).attr("data-moviename")
            console.log(userMovie)
            console.log("works")
            // assign a queryUrl var to store concatinated url
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userMovie + "&api_key=tszRTJReTLMA8ZDEga5LbwuYn7rI6lmh&limit=10"
            console.log(queryURL)

            // AJAX Call
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {

                console.log(response)

            })
    })
})