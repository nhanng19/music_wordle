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


var playButton = $('#play');
var trackList = $('.track');
var userInput = $('#guess');
var enterBtn = $('#enter-button');

userInput = JSON.stringify(userInput);


$('#play').on('click', function(){
    $('#play').text("▐▐ Play!");

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


$('#enter-button').on("click", taylorSwiftBtn);

function taylorSwiftBtn(){
    if ($('#guess').val() === "Taylor Swift"){
        theWeeknd();
    } else if ($('#guess').val() === "The Weeknd"){
        harryStyles();
    }else if ($('#guess').val() === "Harry Styles"){
        rihanna();
    }else if ($('#guess').val() === "Rihanna"){
        beyonce();
    }else {
        fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Taylor%20Swift&format=json&origin=*')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // return again to put more data for taylor 
        })
        
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



