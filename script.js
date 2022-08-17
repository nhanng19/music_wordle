// // lastAPI = 3fa1d67efdf9fbda6b5c07411588e640;
// // wikiApi = 238590f9ae27fc5f5c4912e9a9a31901'

// // http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json'
// // get the top artist api 

// // http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json
// // get top tracks 
//   // if(!firstTrack){
//             //     console.log(firstTrack);
//             // }else{
//             //     console.log("unable to get firstTrack")
//             //     }


// var playButton = $('#play');
// var trackList = $('.track');
// var userInput = $('#guess');
// var enterBtn = $('#enter-button');


// userInput = JSON.stringify(userInput);


// $('#play').on('click', function(){
//     $('#play').text("▐▐ Play!");

// fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=taylorswift&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//         for (i=0; i<4; i++){
//         var firstTrack = data.toptracks.track[i].name;
//         console.log(firstTrack);
          
//         trackList[i].innerHTML = firstTrack;
//         console.log(trackList);
//         }

// })
// .catch(error => window.alert("Oops! Something wrong"));

// });


// $('#enter-button').on("click", taylorSwiftBtn);

// function taylorSwiftBtn(){
//     if ($('#guess').val() === "Taylor Swift"){
//         theWeeknd();
//     } else if ($('#guess').val() === "The Weeknd"){
//         harryStyles();
//     }else if ($('#guess').val() === "Harry Styles"){
//         rihanna();
//     }else if ($('#guess').val() === "Rihanna"){
//         beyonce();
//     }else {
//         fetch('https://en.wikipedia.org/w/api.php?action=query&piprop=original&prop=pageimages&titles=Taylor%20Swift&format=json&origin=*')
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             var imageKey = data.query.pages;
//             var img = imageKey;
//             console.log(img);
//             console.log(imageKey);
//             // var image = data[query][pages][imageKey][original][source]; 
//             var img = $('<img/>',
//             {id: "image",
//             src: img,
//             width: 300
//         })
//         img.appendTo($('#imagediv'));
//             // return again to put more data for taylor 
//         })
        
//     }
//     return
// };


// function theWeeknd(){
//     fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=theweeknd&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//         for (i=0; i<4; i++){
//         var firstTrack = data.toptracks.track[i].name;
//         console.log(firstTrack);
          
//         trackList[i].innerHTML = firstTrack;
//         console.log(trackList);
//         }

// })
// .catch(error => window.alert("Oops! Something wrong"));

// }


// function harryStyles(){
//     fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=harrystyles&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//         for (i=0; i<4; i++){
//         var firstTrack = data.toptracks.track[i].name;
//         console.log(firstTrack);
          
//         trackList[i].innerHTML = firstTrack;
//         console.log(trackList);
//         }

// })
// .catch(error => window.alert("Oops! Something wrong"));
// }

// function rihanna(){
//     fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=rihanna&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//         for (i=0; i<4; i++){
//         var firstTrack = data.toptracks.track[i].name;
//         console.log(firstTrack);
          
//         trackList[i].innerHTML = firstTrack;
//         console.log(trackList);
//         }

// })
// .catch(error => window.alert("Oops! Something wrong"));
// }

// function beyonce(){
//     fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=beyonce&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//         for (i=0; i<4; i++){
//         var firstTrack = data.toptracks.track[i].name;
//         console.log(firstTrack);
          
//         trackList[i].innerHTML = firstTrack;
//         console.log(trackList);
//         }

// })
// .catch(error => window.alert("Oops! Something wrong"));
// }

// lastAPI = 3fa1d67efdf9fbda6b5c07411588e640;
// wikiApi = 238590f9ae27fc5f5c4912e9a9a31901'


// ARRAY OF ARTIST NEED TO MATCH THE NAME IN THE API -- for example if we used harrystyles or taylorswift the answer will be wrong
var artists = ['the weeknd', 'taylor swift', 'harry styles', 'rihanna', 'beyonce']
var artistX = artists[Math.floor(Math.random()*artists.length)];
console.log(artists);
console.log(artistX);
// STORE LOCAL DATA FOR USER ATTEMPTS

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
    
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistX}&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
            for (i=0; i<4; i++){
                // var firstTrack = data.toptracks.track[i].name;
                // console.log(firstTrack);
                document.getElementById("track" + i).innerHTML = data.toptracks.track[i].name
                // trackList[i].innerHTML = firstTrack;
                // console.log(trackList);
            }
            document.getElementById("track1").style.display = "block"
    })
    .catch(error => window.alert("Oops! Something wrong"));
};

$('#enter-button').on("click", guessBtn)
// We need to change these functions for when you get the right answer or wrong answer LINE 47-51
function congratz(){
    alert("congratz")
}

function idiot(){
    alert("you failed to guess the artist")
}

function guessBtn(){
    if ($('#guess').val() === artistX.toLowerCase()){
        congratz()
    }else{
        if(userTurn < 4){
            userTurn = userTurn+1
            document.getElementById("track" + userTurn).style.display = "block"
            console.log(userTurn);
        }else{
            idiot()
        }
    }
  
    return
};
