// lastAPI = 3fa1d67efdf9fbda6b5c07411588e640;

// http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json'
// get the top artist api 

// http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json
// get top tracks 
  // if(!firstTrack){
            //     console.log(firstTrack);
            // }else{
            //     console.log("unable to get firstTrack")
            //     }


var playButton = document.getElementById('play');
var trackList = document.getElementsByClassName('track');
var userInput = document.getElementsByClassName('guess');
var enterBtn = document.getElementsByClassName('enter');

userInput = '';


playButton.addEventListener('click', function(){
    playButton.textContent = "▐▐ Play!"

fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=taylorswift&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
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
});
