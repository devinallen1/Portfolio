window.addEventListener("load", startGame);

let stopWatch;
let wordCount = 0;
let isPlaying = false;
let isGameOver = false;
let hasTimeStarted = false;
let gameOver = false;
let min = 0;
let sec = 0;
let mil = 0;
let userInput = "";
let parsedWord = "";

//const userInput = document.querySelector("#wordInput");
const currentWord = document.querySelector("#currentWord");
const scoreDisplay = document.querySelector("#seconds");
const message = document.querySelector("#message");

let words = [
  "good",
  "dad",
  "lucky",
  "help",
  "mississippi",
  "halo",
  "dark",
  "woods"
];

//Game initializer ************************
function startGame() 
{ 
  DisplayWord(words);
  
  if (!isPlaying) 
  {
    window.addEventListener("keydown", startRound);  
  }
}

//STARTROUND ***************************
function startRound()
{
  isPlaying = true;
  if (!hasTimeStarted) 
  {
    stopWatch = setInterval(Timer, 10);
    hasTimeStarted = true;
  }
  window.addEventListener("keypress", InputParser);
}

//TIMER ******************************
function Timer()
{
  mil++;
  if (mil == 100) 
  { 
    mil = 0;
    sec++;
  }
  if (sec == 60) 
  {
    sec = 0;
    min++;
  }
 
  document.getElementById("seconds").innerHTML = min + "." + sec + "." + mil;
}

//DISPLAYWORD *****************************
function DisplayWord(words) 
{
  const randomIndex = Math.floor(Math.random() * words.length); //Creates the random array index
  
  WordParser(words[randomIndex]);
}

//WORDCHECK *******************************
function wordCheck()
{
 let curLength = userInput.length - 1;
 let match = false;

 if (userInput[curLength] == parsedWord[curLength]) 
 {
   match = true;
   parsedWord[curLength].bold();//ToDo: Get the bold working
   currentWord.innerHTML = parsedWord;
 }else
 {
   clearInterval(stopWatch);
   message.innerHTML = "GAME OVER"
 }
 if (curLength == parsedWord.length - 1 && match == true) 
 {
   wordCount++;
   userInput = "";
   parsedWord = "";
   DisplayWord(words);   
 }
}

//INPUTPARSER **************************
function InputParser(event)
{
  userInput += String.fromCharCode(event.charCode);
  console.log(userInput);
  wordCheck();
}

function WordParser(word)
{
  parsedWord = word.split("");
  currentWord.innerHTML = parsedWord; 
  console.log(parsedWord);
}
