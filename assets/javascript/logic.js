var sportsArray = ["Football", "Soccer", "Baseball", "Gymnastics", "Jiu Jitsu", "Mixed Martial Arts"]

function createButtons() {
    $("#sportsButtons").empty();
    for (var i = 0; i < sportsArray.length; i++) {
        var a = $("<button>");
        a.addClass("sports-btn btn btn-dark");
        a.attr("data-name", sportsArray[i]);
        a.text(sportsArray[i]);
        console.log(sportsArray[i])
        $("#sportsButtons").append(a);
    }
}
$("#addBtn").on("click", function(event) {
    event.preventDefault();
    var sports = $(".addSport").val().trim();
    sportsArray.push(sports);
    createButtons();
})
createButtons();

var sportSelect = $(".btn").text()


$(".sports-btn").click(function(){
    console.log(sportSelect)
})

