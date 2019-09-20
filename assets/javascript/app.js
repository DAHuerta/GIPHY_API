$(document).ready(function() {
  showButton();

  $(document).on("click", ".scaryGif", gifState);
  $(document).on("click", "#movie", getData);
  
});
 
  function getData(){

      var title = $(this).attr("data-search");
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=A9wDVM3lKqUEjnnlYAa7ZgfpVWLSSaMu&q=" + title + "&limit=10";

      $.ajax({
        
        url: queryURL,
        method: "GET",
        success: horrorMovieGif,
        
      }).then(function(response) {
        console.log(response);
      });
    
    }  

  function horrorMovieGif(response) {

      var result = response.data;
      for (i = 0; i < result.length; i++) {
      
        var gifDiv = $("<div>");
        var movieImage = $("<img>");
        var rating = result[i].rating;
        var p = $("<p>").text("Rating: " + rating);
      
        movieImage.addClass("scaryGif")
        movieImage.attr("src", result[i].images.fixed_height_still.url);
        movieImage.attr("data-state", "still");
        movieImage.attr("data-animate", result[i].images.fixed_height.url)
        movieImage.attr("data-still", result[i].images.fixed_height_still.url)
        
        gifDiv.append(movieImage);
        gifDiv.append(p);
      
        $("#horrorGifs").prepend(gifDiv);
      
    };
  };  
  
  function showButton() {
    var topics = [];
    $("#addMovie").on("click", function(event) {
      event.preventDefault();
      var newMovie = $("#buttonInsert").val().trim();
      topics.push(newMovie);
      $("#buttonInsert").val(topics[i]);      
      $(".horrorButtons").empty();

      for (var i = 0; i < topics.length; i++) {
        
        var newButton = $("<button>");
        newButton.addClass("btn btn-primary");
        newButton.attr("id", "movie");
        newButton.attr("data-search", topics[i]);
        newButton.text(topics[i]);
        $(".horrorButtons").append(newButton);

      };
    }); 
    

  };
  
  function gifState() {
    
    var state = $(this).attr("data-state");

    if (state === "still") {

      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
      
    } else {
      
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
      
    };
  };

