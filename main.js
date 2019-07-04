
//arrays of musicians name
const names = [
    "Beyonce",
    "Eminem",
    "Ludacris",
    "Shakira",
    "Nelly",
    "Rihanna",
    "Outkast",
    "Coldplay",
    "Adele",
    "Drake",
    "Usher",
    "Ashanti",
    "Timbaland",
    "Daughtry",
    "Maxwell"
  ];
  
  let wordLetters = document.getElementById("currentWord");
  let wrongletter = document.getElementById("wrongLetters");
  let GuessRemains = document.getElementById("remainingGuess");
  let correctWords = document.getElementById("totalWins");
  let wrongWords = document.getElementById("totalLoss");
  let musicianImg = document.getElementById("image");
  let maxLives = 12;
  let letterDash;
  let incorrectLetter;
  let rightLetter;
  let wins = 0;
  let losses = 0;
  let start = document.getElementById("startGame");
  start.textContent = "Begin by pressing any key";
  //game
  //game function{
  function Game() {
    letterDash = [];
    incorrectLetter = [];
    maxLives = 12;
    computerRandPick = names[
      Math.floor(Math.random() * names.length)
    ].toLowerCase();
    chosenWord = computerRandPick.split("");
  
    for (var i = 0; i < chosenWord.length; i++) {
      letterDash[i] = "_";
    }
    wordLetters.textContent = letterDash.join(" ");
    wrongletter.textContent = "Wrong Letters: ";
    GuessRemains.textContent = "Lives left: " + maxLives;
    correctWords.textContent = "Wins: " + wins;
    wrongWords.textContent = "Losses: " + losses;
    beginGame();
  }
  
  
  
  function beginGame() {
    document.onkeyup = function(event) {
      let userGuess = event.key;
      start.textContent = "";
  
      rightLetter = chosenWord.includes(userGuess);
      if (rightLetter) {
        for (var j = 0; j < computerRandPick.length; j++) {
          var comPick = computerRandPick[j];
          if (comPick === userGuess) letterDash[j] = comPick;
          wordLetters.textContent = letterDash.join(" ");
          score();
        }
      } else if (incorrectLetter.indexOf(userGuess) === -1) {
        incorrectLetter.push(userGuess);
        maxLives--;
        score();
      }
  
      wrongletter.textContent = "wrong letters:  " + incorrectLetter.toString();
      GuessRemains.textContent = "lives remaining: " + maxLives;
    };
  }
  
  function score() {
    if (chosenWord.toString() === letterDash.toString()) {
      wins++;
    
      start.textContent = `Congratulations You're ${computerRandPick} right!!`;
  
      Game();
    } else if (maxLives === 0) {
      losses++;
      
      start.textContent = `Sorry, you got it ${computerRandPick} wrong`;
  
      Game();
    }
  }
  
  Game();
  score();
  