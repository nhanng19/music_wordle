var playButton = document.getElementById("play");
var trackList = $('.track');
var userInput = document.getElementById("guess");
var enterBtn = $('#enter-button');
var feedback = document.getElementById("feedback")
var targetDiv= document.getElementById("second");
var start = document.getElementById("section");
var restartBtn = document.getElementById("restart");
targetDiv.style.display = "none";
var artists = ['One Direction', 'Katy Perry', 'Justin Bieber', 'Rihanna', 'Beyonce', 'Ariana Grande', 'Drake', 
"The Weeknd", "Eminem", "Ed Sheeran", "Taylor Swift", "Post Malone", "Bad Bunny", "Billie Eilish", "Michael Jackson", "Demi Lovato",
"Tyga", "DaBaby", "Young Thug", "Niki", "Kehlani", "Tory Lanez", "Gunna", "Playboi Carti", "Bryson Tiller", "21 Savage", "Kendrick Lamar", 
"Kanye West", "Travis Scott", "Lil Uzi Vert", "Future", "Meek Mill", "Lil Baby", "Kid Cudi", "Pitbull", "Lil Wayne", "Cardi B", "Jhene Aiko", "Migos",
"Gucci Mane", "Pop Smoke", "Roddy Ricch", "XXXTENTACION", "Lil Yatchy", "6lack", "Sheck Wes"]
var artistX = artists[Math.floor(Math.random()*artists.length)];
console.log(artists);
console.log(artistX);
var userTurn = 0;

var right = new Audio("assets/js/correct.wav")
var wrong = new Audio("assets/js/error.mp3")
playButton.onclick = function () {
    if (targetDiv.style.display == "none") {
      targetDiv.style.display = "block";
      start.style.display = "none";
    }
  };

fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+artistX+'&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
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

$('#enter-button').on("click", guessBtn)



function guessBtn(){
    if ($('#guess').val() === artistX.toLowerCase() || $('#guess').val() === artistX){
        right.play();
        feedback.innerHTML = "Correct! It's " + artistX + "!"
        restartBtn.style.display = "inline-block";
        track4.style.display = "block";
        var count = 200;
        var defaults = {
          origin: { y: 0.7 }
        };
        
        function fire(particleRatio, opts) {
          confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
          }));
        }
        
        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
    }else{
        if(userTurn < 1){
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            feedback.innerHTML = "Not quite! Here's a hint.";
            wrong.play()
            console.log(userTurn);
        } else if (userTurn < 2){
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            feedback.innerHTML = "Hmm. Here's another one."
            wrong.play()
            console.log(userTurn);
        } else if (userTurn < 3){
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            feedback.innerHTML = "Third time's the charm!"
            wrong.play()
            console.log(userTurn);
        } else if (userTurn < 4){
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            feedback.innerHTML = "Look familiar?"
            wrong.play()
            console.log(userTurn);
        } else if (userTurn < 5){
            feedback.innerHTML = "The answer was " + artistX + "!"
            restartBtn.style.display = "inline-block";
            wrong.play()
        }
    }   
  
    return
};

userInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
      guessBtn();
  }
});

document.addEventListener("keydown", function(e){
  if (targetDiv.style.display == "none") {
    if (e.code === "Space") {
      targetDiv.style.display = "block";
      start.style.display = "none";
    }
}})


var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    prop: "pageimages",
    titles: "The Weekend",
    format: "json",
    piprop: "original",

};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var responseQuery = response.query.pages;
        console.log(responseQuery);
        var pages = response.query.pages[responseQuery].original.source;
        console.log(pages);
        document.querySelector("#img1").src = pages;
        

    })
    .catch(function(error){console.log(error);});