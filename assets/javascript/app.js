var topics = [];

function horrorMovieGif() {

  var title = $(this).attr("data-search");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=A9wDVM3lKqUEjnnlYAa7ZgfpVWLSSaMu&q=" + title + "&limit=10";

  $.ajax({

    url: queryURL,
    method: "GET"

  }).then(function(response) {
    console.log(response);

    var result = response.data;
    for (i = 0; i < result.length; i++) {
      
      var gifDiv = $("<div>");
      var movieImage = $("<img>");
      var rating = result[i].rating;
      var p = $("<p>").text("Rating: " + rating);

      movieImage.addClass("scaryGif")
      movieImage.attr("src", result[i].images.fixed_height.url);
      movieImage.attr("src", result[i].images.fixed_height_still.url);
      movieImage.attr("data-still", "still");

      gifDiv.append(movieImage);
      gifDiv.append(p);

      $("#horrorGifs").prepend(gifDiv);

    }
  });
}

$("#addMovie").on("click", function(event) {
  event.preventDefault()

  var newMovie = $("#buttonInsert").val().trim();
  topics.push(newMovie);
  $("#buttonInsert").val("");

  showButtons()

})

function button() {

  $("#horrorButtons").empty();
  for (var i =0; i < topics.length; i++) {

    var newButton = $("<button class='btn btn-primary'>");
    newButton.attr("id", "movie")


  }
}






// on click for buttons on page
// on click for images / switches animation
// add a catagory


// Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
// We chose animals for our theme, but you can make a list to your own liking.
// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.