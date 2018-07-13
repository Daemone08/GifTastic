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
            // clear div
            $("#gifCol").empty()
            // store pick moviename value
            var userMovie = $(this).attr("data-moviename")
            console.log(userMovie)
            console.log("works")
            // assign a queryUrl var to store concatinated url
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userMovie + "&api_key=tszRTJReTLMA8ZDEga5LbwuYn7rI6lmh&limit=10"
            console.log(queryURL)

            // AJAX Call
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {

                console.log(response)

                // store data
                var results = response.data

                // loop through results
                for (var i = 0; i < results.length; i++) {

                    var stillUrl = results[i].images.fixed_height_still.url
                    // image tag for gifs
                    var gifImage = $("<img class='gifResults'>");
                    gifImage.attr("src", stillUrl)
                    gifImage.attr("data-state", "still")
                    gifImage.attr("data-still", stillUrl)
                    id = "gif" + i
                    // apply unique IDs
                    gifImage.attr("id", id)
                    var deleteUrl = stillUrl.slice(0, -6)

                    console.log(deleteUrl)
                    var animateUrl = (deleteUrl + ".gif")
                    gifImage.attr("data-animate", animateUrl)
                    console.log(animateUrl)


                    // paragraph to push under gif
                    var p = $("<p>").text("Rating: " + results[i].rating)

                    // append html div
                    $("#gifCol").append(gifImage)
                    $("#gifCol").append(p)

                    // onclick to pause and start
                    $("#" + id).on("click", function() {
                        console.log("works")

                        // check and store state
                        var state = $(this).attr("data-state");
                        // Alternate states
                        if (state == "still") {
                          $(this).attr("src", $(this).attr("data-animate"));
                          $(this).attr("data-state", "animate");
                        } 
                        else {
                          $(this).attr("src", $(this).attr("data-still"));
                          $(this).attr("data-state", "still");
                        }
                      });
                }

            })
    })
})