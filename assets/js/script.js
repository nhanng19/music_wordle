// Define variables for elements and user interface
var playButton = document.getElementById("play");
var trackList = $('.track');
var userInput = document.getElementById("guess");
var enterBtn = $('#enter-button');
var feedback = document.getElementById("feedback")
var targetDiv = document.getElementById("second");
var start = document.getElementById("section");
var restartBtn = document.getElementById("restart");
var userTurn = 0; 
var card = document.querySelector(".card")
// Feedback audio
 
var right = new Audio("assets/js/correct.wav")
var wrong = new Audio("assets/js/error.mp3")
var over = new Audio("assets/js/gameover.wav")

// Take artists' bank and pick a random index

var artists = ['One Direction', 'Katy Perry', 'Justin Bieber', 'Rihanna', 'Ariana Grande', 
"The Weeknd", "Eminem", "Ed Sheeran", "Taylor Swift", "Post Malone", "Bad Bunny", "Billie Eilish", 
"Michael Jackson", "Demi Lovato", "Tyga", "DaBaby", "Young Thug", "Kehlani", "Tory Lanez", 
"Playboi Carti", "Bryson Tiller", "21 Savage", "Kendrick Lamar", "Kanye West", "Travis Scott", 
"Lil Uzi Vert", "Meek Mill", "Lil Baby", "Kid Cudi", "Lil Wayne", "Cardi B", "Migos",
"Gucci Mane", "Roddy Ricch", "XXXTentacion", "6lack", "Sheck Wes", "Juice Wrld", "Nelly", 
"Nicki Minaj", "Iggy Azalea", "Ludacris", "Jay-Z", "Lil Nas X", "Wiz Khalifa", "Trey Songz", 
"Mac Miller", "Big Sean", "ASAP Rocky", "Young Thug", "Lil Pump", "6ix9ine", "Lil Tjay", 
"Pooh Shiesty", "Adele","Shawn Mendes", "Bruno Mars", "Shakira", "Lana Del Rey", "Justin Timberlake", 
"Jason Derulo", "Alicia Keys", "Madonna", "Miley Cyrus", "The Beatles", "Lady Gaga", "Selena Gomez", 
"Celine Dion", "Britney Spears", "SZA", "Mariah Carey", "Chris Brown", "Lil Durk", "Pharrell Williams",
"50 Cent", "Kodak Black", "Chief Keef", "Jeremih"]
var artistX = artists[Math.floor(Math.random()*artists.length)];

// Load landing page and hide game 

targetDiv.style.display = "none";

// Load game and hide landing page 

playButton.onclick = function () {
    if (targetDiv.style.display == "none") {
      targetDiv.style.display = "block";
      start.style.display = "none";
      document.getElementById("guess").select();
    }
  };

// Fetch 4 top tracks from a random artist and appends on list

fetch('https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+artistX+'&limit=4&api_key=3fa1d67efdf9fbda6b5c07411588e640&format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
        for (i=0; i<4; i++){
        var firstTrack = data.toptracks.track[i].name;
        trackList[i].innerHTML = firstTrack;
        }
      })

// Check answer and provide feedback based on users' guess and turn

$('#enter-button').on("click", guessBtn)

function guessBtn(){
    document.getElementById('guess').focus() 
    if ($('#guess').val().toLowerCase() === artistX.toLowerCase() || $('#guess').val().toLowerCase() === artistX.toLowerCase()){
        right.play();
        feedback.innerHTML = "Correct! It's " + artistX + "!"
        restartBtn.style.display = "inline-block";
        track4.style.display = "block";
        var count = 200;
        var defaults = {
          origin: { y: 0.7 }
        };
        // confetti.js runs when user guess right
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
        saveScore();
    }else{
        if(userTurn < 1){    // shake and reveal another song as hint
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block"
            document.getElementById("track" + userTurn).style.animation = "shake 0.5s"
            feedback.innerHTML = "Not quite! Here's a hint.";
            wrong.play()
           
        } else if (userTurn < 2){
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            document.getElementById("track" + userTurn).style.animation = "shake 0.5s"
            feedback.innerHTML = "Hmm. Here's another one."
            wrong.play()
           
        } else if (userTurn < 3){
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            document.getElementById("track" + userTurn).style.animation = "shake 0.5s"
            feedback.innerHTML = "Third time's the charm!"
            wrong.play()
           
        } else if (userTurn < 4){  // shake and reveal artist's picture as hint
            userTurn++
            document.getElementById("track" + userTurn).style.display = "block";
            document.getElementById("track" + userTurn).style.animation = "shake 0.5s"
            feedback.innerHTML = "Look familiar?"
            wrong.play()
       
        } else if (userTurn < 5){
            feedback.innerHTML = "Unlucky!  It's " + artistX + "!"
            document.getElementById("track" + userTurn).style.animation = "shake 0.5s"
            restartBtn.style.display = "inline-block";
            over.play()
        }
    }   
  return
};

// Fetch image from mediaWiki API 

var url = "https://en.wikipedia.org/w/api.php"; 
var noSpace = artistX.replace(/ /g,"%20")
var params = {
    action: "query",
    prop: "pageimages",
    titles: `${noSpace}`,
    format: "json",
    piprop: "original",
};
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var responseQuery = response.query.pages;


        var pageId = Object.keys(responseQuery)
        var pages = response.query.pages[pageId[0]].original.source;

        document.querySelector("#img").src = pages;
        });

// Track how many wins user has

var counter = localStorage.getItem('counter') || 0;

function saveScore() {
    counter ++; 
    window.localStorage.setItem('counter', JSON.stringify(counter)); 
}

// Display how many wins

function showScore() {
  if (counter > 0) {
    document.getElementById("counter").innerHTML = "You've guessed " + localStorage.getItem("counter") + " artists "
  }
} 
showScore();

// Add event listener to check answer when user press enter

userInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") { 
      guessBtn();
  }
});

// Add event listener to start game when user press space

document.addEventListener("keyup", function(e){
  if (targetDiv.style.display == "none") {
    if (e.code === "Space" ) {
      targetDiv.style.display = "block";
      start.style.display = "none";
      document.getElementById("guess").select();
    }
}})





  