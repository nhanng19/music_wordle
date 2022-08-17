// lastAPI = 3fa1d67efdf9fbda6b5c07411588e640;
// wikiApi = 238590f9ae27fc5f5c4912e9a9a31901'

// http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json'
// get the top artist api 

// http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json
// get top tracks 
  // if(!firstTrack){
            //     console.log(firstTrack);
            // }else{
            //     console.log("unable to get firstTrack")
            //     }

// global variable for attempts
// global variable for song data - artist infor or song info --- click play button fetch info

// fetch one api at one time -- 


var artists = ["taylorswift", "justinbieber", "theweekend", "rhianna", "michaeljackson"]
var selectedArtists = null
var topTracks = ['1sadfa', '1231', '12312', '234123', '12342134123']
var userTurn = 0

var playButton = $('#play');
var trackList = $('.track');
var userInput = $('#guess');
var enterBtn = $('#enter-button');

userInput = JSON.stringify(userInput);


$('#play').on('click', function(){
    $('#play').text("▐▐ Play!");
    playBtn()
})

function playBtn() {
    // grab random digt
    var randomInt = 5
    selectedArtists = artists[randomInt]

    fetch(f`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${selectedArtists}&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
            for (i=0; i<4; i++){
            var firstTrack = data.toptracks.track[i].name;
            console.log(firstTrack);
            
            trackList[i].innerHTML = firstTrack;
            console.log(trackList);
            
            }

    })
    .catch(error => window.alert("Oops! Something wrong"));
};

$('#enter-button').on("click", guessBtn)

function guessBtn(){
    // var result = input == selectedArtist
    // if match display congrats or something
        // return
    // if not, 
            // if userturn+1 == 4
                // then fetch wikipedia and display wiki to image
                // return
            // if userturn == 5
                // u fail bitch
                // return 
            // take hint using user turn send to li, then increase turn by 1



    if ($('#guess').val() === "Taylor Swift"){
        theWeeknd();
    } else if ($('#guess').val() === "The Weeknd"){
        harryStyles();
    }else if ($('#guess').val() === "Harry Styles"){
        rihanna();
    }else if ($('#guess').val() === "Rihanna"){
        beyonce();
    }else {
        // fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Taylor%20Swift&format=json&origin=*')
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(data){
        //     console.log(data);
        //     // return again to put more data for taylor 
        // })
        alert('Hi')
    }
    return
};


function theWeeknd(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=theweeknd&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
        for (i=0; i<4; i++){
        var firstTrack = data.toptracks.track[i].name;
        console.log(firstTrack);
        trackList[i].innerHTML = firstTrack;
        console.log(trackList);
        }

})
.catch(error => window.alert("Oops! Something wrong"));

}


function harryStyles(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=harrystyles&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
        for (i=0; i<4; i++){
        var firstTrack = data.toptracks.track[i].name;
        console.log(firstTrack);
          
        trackList[i].innerHTML = firstTrack;
        console.log(trackList);
        }

})
.catch(error => window.alert("Oops! Something wrong"));
}

function rihanna(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=rihanna&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
        for (i=0; i<4; i++){
        var firstTrack = data.toptracks.track[i].name;
        console.log(firstTrack);
          
        trackList[i].innerHTML = firstTrack;
        console.log(trackList);
        }

})
.catch(error => window.alert("Oops! Something wrong"));
}

function beyonce(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=beyonce&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
        for (i=0; i<4; i++){
        var firstTrack = data.toptracks.track[i].name;
        console.log(firstTrack);
          
        trackList[i].innerHTML = firstTrack;
        console.log(trackList);
        }

})
.catch(error => window.alert("Oops! Something wrong"));
}



