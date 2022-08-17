// lastAPI = 3fa1d67efdf9fbda6b5c07411588e640;
// wikiApi = 238590f9ae27fc5f5c4912e9a9a31901

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



var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    prop: "pageimages",
    titles: "Taylor Swift",
    format: "json",
    piprop: "original",

};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        console.log(pages)
        // for (var page in pages) {
        //     console.log(page.thumbnail);
            // for (var img of pages[page].thumbnail) {
            //     console.log(img);
                // document.querySelector("#img1").src = img.title;
            // }
        // }
    })
    .catch(function(error){console.log(error);});

// var reader = new FileReader();
// reader.readAsDataURL(blob);
// reader.onloadend = function() {
//     var base64data = reader.result;
//     console.log(base64data);
// }

// function blobToBase64(blob) {
//     return new Promise((resolve, _) => {
//         const reader = new FileReader();
//         reader.onloadend = () => resolve(reader.result);
//         reader.readAsDataURL(blob);
//     });
// }



// fetch(taylorSwiftImg)
//     .then(response => response.blob())
//     .then(imageBlob => {
//         console.log(taylorSwiftImg);
//         var imageObjecturl = URL.createObjectURL(imageBlob);
//         console.log(imageObjecturl);
//         document.querySelector("#img1").src = imageObjecturl;
//     });











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


$('#enter-button').on("click", taylorSwiftBtn)

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



