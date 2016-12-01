// ES5 Pragma
"use strict";

// Ensure the library object is instantiated
var FTBB = FTBB || {};

(function () {
    // Populate the made with love p tag
    $("#made-with-love").html("Made With <a href=\"https://github.com/DJSymBiotiX/heart.js\">" + HEART_JS_HEART + "</a> by <a href=\"https://github.com/DJSymBiotiX\">Fernando Chorney</a>");

    // Set up a function to give you random numbers
    var get_random_val = function(low, high) {
        return Math.floor((Math.random() * high) + 1);
    };

    var get_random_item = function(items) {
        return items[get_random_val(0, items.length -1)];
    };

    // Grab the result text objects
    var result_answer = $("#result-answer");
    var result_text = $("#result-text");

    // Get the users current time
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();

    // Grab the randomly generated string data
    var sport = get_random_item(FTBB.sports);
    var adj = get_random_item(FTBB.adj);
    var adj_2 = get_random_item(FTBB.adj);
    var fucking = get_random_val(1, 10) > 5 ? "Fucking " : "";

    // See if we have a bomber schedule for today
    var bs = FTBB.schedule;
    var data = undefined;
    if (bs[year] && bs[year][month] && bs[year][month][date] && bs[year][month][date][place] == 'Home') {
        // Game today, get some data and display a message
        data = bs[year][month][date];
        result_answer.html("NO YOU SHOULDN'T!");
        result_answer.css("color", "red");
        result_text.html("The " + fucking + adj + " " + sport + " Fans Will Be In All The Parking Spots Tonight. Stay Home, Don't Even Bother!");
    } else {
        // No game today
        result_answer.html("YES YOU SHOULD!");
        result_answer.css("color", "blue");
        result_text.html("The " + fucking + adj + " " + sport + " Fans Won't Be Taking Up All The Parking Tonight!");
    }
}());
