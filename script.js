// ARRAY OF ARTIST NEED TO MATCH THE NAME IN THE API -- for example if we used harrystyles or taylorswift the answer will be wrong
var artists = ['theweeknd', 'taylorswift', 'harrystyles', 'rihanna', 'beyonce']
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
        localStorage.setItem('saveartist', artistX);
            for (i=0; i<4; i++){
                var firstTrack = data.toptracks.track[i].name;
                console.log(firstTrack);
                // document.getElementById("track" + i).innerHTML = data.toptracks.track[i].name
                trackList[i].innerHTML = firstTrack;
                console.log(trackList);
            }
            document.getElementById("track1").style.display = "block"
    })
    .catch(error => window.alert("Oops! Something wrong"));
};

$('#enter-button').on("click", guessBtn);
// // We need to change these functions for when you get the right answer or wrong answer LINE 47-51
function congratz(){
    alert("congratz");
}

function idiot(){
    alert("you failed to guess the artist");
}

function guessBtn(){
        var result = ["theweeknd', 'taylorswift', 'harrystyles', 'rihanna', 'beyonce"];
        var answer = $('#guess').val();
        localStorage.setItem('userInput', answer);
        for (i=0; i<result.length; i++){
            var saveArtist = localStorage.getItem('saveartist');
            if (saveArtist == result[i]){
                var theResult = result[i];
                console.log(theResult);
            }  
        }
        var userInputSlice = localStorage.getItem('userInput');
        userInputSlice = userInputSlice.replace(" ", '').toLowerCase();
        if (userInputSlice == theResult){
            congratz();
        }
    }
    //     }else{
    //         if(userTurn < 4){
    //         userTurn = userTurn+1
    //         document.getElementById("track" + userTurn).style.display = "block"
    //         console.log(userTurn);
    //         }else{
    //         idiot()
    //         }
    //     }
  
    // return
// };

        