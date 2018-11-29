var env = require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);
   
var searchSong = function (song) {
    spotify.search({ type: 'track', query: song, limit: 2})
    .then(function(response) {
        var songs = response.tracks.items;
        console.log(songs);
    })
    .catch(function(err) {
      console.log(err);
    });
}

var concerThis = function (artist) {
    axios({
        method:'get',
        url:"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
        responseType:'stream'
      })
        .then(function(response) {
            console.log(response);
        // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      });
}
// searchSong();

var userInput1 = process.argv[2];
var userInput2 = process.argv[3]

function userInput(userInput1, userInput2) {
//     concert-this

// spotify-this-song
    if (userInput1 === "concert-this") {
        concerThis(userInput2);

    } else if (userInput1 === "spotify-this-song") {
        searchSong(userInput2);
       
    } else if (userInput1 === "movie-this") {
        console.log("movie-this");
    } else if (userInput1 === "do-what-it-says") {
        console.log("do-what-it-says");
    } else {
        console.log("Please enter a valid choice");
    }
}

userInput(userInput1, userInput2); 
