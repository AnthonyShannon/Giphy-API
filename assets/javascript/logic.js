var sportsArray = ["Football", "Soccer", "Baseball", "Gymnastics", "Brazillian Jiu Jitsu", "Mixed Martial Arts"]

function createButtons() {
    $("#sportsButtons").empty();
    for (var i = 0; i < sportsArray.length; i++) {
        var button = $("<button>");
        button.addClass("sports-btn btn btn-dark");
        button.attr("data-name", sportsArray[i]);
        button.text(sportsArray[i]);
        console.log(sportsArray[i])
        $("#sportsButtons").append(button);
    }
}
createButtons();
$("#addBtn").on("click", function (event) {
    event.preventDefault();
    var sports = $(".addSport").val().trim();
    sportsArray.push(sports);
    createButtons();
})

$(".sports-btn").on("click", function () {
    var sportSelection = $(this).text()
    console.log(sportSelection);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportSelection + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            $(".gifArea").empty();
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var sportGif = $("<img>");
                    gifDiv.append(p);
                    sportGif.attr("src", results[i].images.fixed_height_still.url);
                    sportGif.attr("data-state", "still")
                    sportGif.attr("data-animate", results[i].images.fixed_height.url)
                    sportGif.attr("data-still", results[i].images.fixed_height_still.url)
                    gifDiv.append(sportGif);    
                    $(".gifArea").prepend(gifDiv);
                    sportGif.on("click", function(){
                        console.log($(this))
                        var state = $(this).attr("data-state");
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                            console.log($(this))
                          } else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                          }
                        
                    })

                }
            }
        })
})

