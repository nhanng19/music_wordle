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


var playButton = document.getElementById('play');
var trackList = document.getElementsByClassName('track');
var userInput = document.getElementById('guess');
var enterBtn = document.getElementById('enter-button');




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


enterBtn.addEventListener("click", taylorSwiftBtn)

function taylorSwiftBtn(){
    if (userInput.value === "Taylor Swift"){
        theWeeknd();
        userInput.value = " ";
    } else {
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

// // not working bc need to assign function to each event listener 
enterBtn.addEventListener("click", theWeeknBtn);

function theWeeknBtn(){
    if (userInput.value === "The Weeknd"){
        billieEilish();
        userInput.value = " ";
    } else {
        fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Taylor%20Swift&format=json&origin=*')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            // return again to put more data for taylor 
        })
    }
};

// function billieEilish(){
//     fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=billieeilish&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
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

// enterBtn.addEventListener("click", function (){
//     if (userInput.value === "Billie Eilish"){
//         harryStyles();
//         userInput.value = " ";
//     } else {
//         fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Taylor%20Swift&format=json&origin=*')
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             // return again to put more data for taylor 
//         })
//     }
// })

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

// enterBtn.addEventListener("click", function (){
//     if (userInput.value === "Harry Styles"){
//         rihanna();
//         userInput.value = " ";
//     } else {
//         fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Taylor%20Swift&format=json&origin=*')
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             // return again to put more data for taylor 
//         })
//     }
// })

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

// enterBtn.addEventListener("click", function (){
//     if (userInput.value === "Harry Styles"){
//         rihanna();
//         userInput.value = " ";
//     } else {
//         fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Taylor%20Swift&format=json&origin=*')
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             // return again to put more data for taylor 
//         })
//     }
// })


