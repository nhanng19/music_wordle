// var playButton = $('#play');

    // var textReplace = playButton.text();
    // var whenPLay = textReplace.replace("▐▐ Play");
    // playButton.text(whenPLay);

    // $(playButton).on('click', )

// lastAPI = 3fa1d67efdf9fbda6b5c07411588e640;
// http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json'
// get the top artist api 

// http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json
// get top tracks 


var playButton = document.getElementById('play');
var trackList = document.querySelector('.track');


playButton.addEventListener('click', function(){
    playButton.textContent = "▐▐ Play!";
});

fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=taylorswift&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
.then(function (response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for (i=0; i<=4; i++){
        var firstTrack = data['toptracks']['track'][i]['name'];

        trackList[i].innerHTML = firstTrack;
    }
})


