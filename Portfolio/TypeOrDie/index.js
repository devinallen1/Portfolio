window.addEventListener("load", startGame);

let userName = "";
let userScore = 0;
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
let parsedWord2 = "";
let parsedWord3= "";
let parsedWord4 = "";
let parsedWord5 = "";
let curWordIndex = 0;
let curWordIndex2 = 0;
let curWordIndex3 = 0;
let curWordIndex4 = 0;
let curWordIndex5 = 0;
let countDown = 0;
let countDown2 = 0;
let countDown3 = 0;
let countDown4 = 0;
let countDown5 = 0;


//const userInput = document.querySelector("#wordInput");
let currentWord = document.querySelector("#currentWord");
let scoreDisplay = document.querySelector("#seconds");
let message = document.querySelector("#message");

let words =["hello", "jo", "mississippi", " help", "good", "young", "complete", "wonderful", "need"];

//Game initializer ************************
function startGame() //init
{ 
  uName.innerHTML = userName;
  DisplayWord(words, 1);
  DisplayWord(words, 2);
  DisplayWord(words, 3);
  DisplayWord(words, 4);
  DisplayWord(words, 5);
  countDown = parsedWord.length + 5;
  countDown2 = parsedWord2.length + 5;
  countDown3 = parsedWord3.length + 5;
  countDown4 = parsedWord4.length + 5;
  countDown5 = parsedWord5.length + 5;
  if (!isPlaying) 
  {
    window.addEventListener("keydown", startRound); 
    setInterval(CalculateWordTimer, 1000); 
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
  userScore = min + ":" + sec + "." + mil;
  
}
//COUNTDOWN TIMER ***************************
function CoundownTimer()
{
 
}

//DISPLAY WORD *****************************
function DisplayWord(words, index) 
{
  const randomIndex = Math.floor(Math.random() * words.length); //Creates the random array index
  WordParser(words[randomIndex], index);
}

//WORD CHECK *******************************
function wordCheck()
{
 let curLength = userInput.length - 1;
 //let match = false;
 let userTemp = userInput[curLength]; 
 let parseCheck = parsedWord[curWordIndex];//ToDo: to make this work: a variable to keep trak of the index for each word
 let parseCheck2 = parsedWord2[curWordIndex2];
 let parseCheck3 = parsedWord3[curWordIndex3];
 let parseCheck4 = parsedWord4[curWordIndex4];
 let parseCheck5 = parsedWord5[curWordIndex5];

 
 if (userTemp == parseCheck) 
 {
  //match = true;
  //parsedWord[curLength].bold();//ToDo: Get the bold working
  //currentWord.innerHTML = parsedWord;
  curWordIndex++;
  
  if (curWordIndex -1 == parsedWord.length - 1) 
   {
     
    curWordIndex = 0;
    DisplayWord(words, 1);  
   }
 }else{curWordIndex = 0;}
 if (userTemp == parseCheck2) 
 {
   //match = true;
   //currentWord2.innerHTML = parsedWord2;
   curWordIndex2++;
   if (curWordIndex2 -1 == parsedWord2.length - 1) 
   {
    curWordIndex2 = 0;
    DisplayWord(words, 2);  
    
   }
 }else{curWordIndex2 = 0;}
 if (userTemp == parseCheck3) 
 {
   //match = true;
   //currentWord3.innerHTML = parsedWord;
   curWordIndex3++;
   if (curWordIndex3 -1 == parsedWord3.length - 1) 
   {
    curWordIndex5 = 0;
    DisplayWord(words, 3);
      
   }
 }else{curWordIndex3 = 0;}
 if (userTemp == parseCheck4) 
 {
   //match = true;
   //currentWord4.innerHTML = parsedWord4;
   curWordIndex4++;
   if (curWordIndex4 -1 == parsedWord4.length - 1) 
   {
    curWordIndex4 = 0;
    DisplayWord(words, 4); 
    
   }
 }else{curWordIndex4 = 0;}
 if (userTemp == parseCheck5) 
 {
   //match = true;
   //currentWord5.innerHTML = parsedWord5;
   curWordIndex5++;
   if (curWordIndex5 -1 == parsedWord5.length - 1) 
   {
    curWordIndex5 = 0;
    DisplayWord(words, 5);
    

   }
 }else{curWordIndex5 = 0;}
//  else
//  {
//    clearInterval(stopWatch);
//    message.innerHTML = "GAME OVER"
//  }
//  if (curLength == parsedWord.length - 1 && match == true) 
//  {
//    wordCount++;
//    userInput = "";
//    parsedWord = "";
//    DisplayWord(words);   

//  }
}

//INPUT PARSER **************************
function InputParser(event)
{
  userInput += String.fromCharCode(event.charCode);
  
  wordCheck();
}
// Word Parser **************************
function WordParser(word, index)
{
  switch (index) {
    case 1:
      parsedWord = word.split("");
      currentWord.innerHTML = parsedWord;
      
      break;
    case 2:
      parsedWord2 = word.split("");
      currentWord2.innerHTML = parsedWord2;
      break;
    case 3:
      parsedWord3 = word.split("");
      currentWord3.innerHTML = parsedWord3;
      break;
    case 4:
      parsedWord4 = word.split("");
      currentWord4.innerHTML = parsedWord4;
      break;
    case 5:
      parsedWord5 = word.split("");
      currentWord5.innerHTML = parsedWord5;
      break;
  
    default:
      break;
  }
  
}

//CALCULATE WORD TIMER ************************
function CalculateWordTimer() //ToDo: create the function
{
  if(isPlaying){

    if (countDown > 0) {
      countDown--;
    }else if (countDown == 0) {
      clearInterval(stopWatch);
      message.innerHTML = "GAME OVER"
    }
    if (countDown2 > 0) {
      countDown2--;
    }else if (countDown2 == 0) {
      clearInterval(stopWatch);
      message.innerHTML = "GAME OVER"
    }
    if (countDown3 > 0) {
      countDown3--;
    }else if (countDown3 == 0) {
      clearInterval(stopWatch);
      message.innerHTML = "GAME OVER"
    }
    if (countDown4 > 0) {
      countDown4--;
    }else if (countDown4 == 0) {
      clearInterval(stopWatch);
      message.innerHTML = "GAME OVER"
    }
    if (countDown5 > 0) {
      countDown5--;
    }else if (countDown5 == 0) {
      clearInterval(stopWatch);
      message.innerHTML = "GAME OVER"
    }
    row.innerHTML = countDown;
    row2.innerHTML = countDown2;
    row3.innerHTML = countDown3;
    row4.innerHTML = countDown4;
    row5.innerHTML = countDown5;
  }
}