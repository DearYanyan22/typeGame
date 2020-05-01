window.addEventListener("load",autoCount)

const leftTime = document.querySelector("#leftTime")
const totalTime = document.querySelector("#totalTime")
const totalScore = document.querySelector("#totalScore")
const gameDisplay = document.querySelector("#gameDisplay")
const currentWord = document.querySelector("#currentWord")
const inputWord = document.querySelector("#inputWord")
const easyButton = document.querySelector("#easy")
const mediumButton = document.querySelector("#medium")
const hardButton = document.querySelector("#hard")
let score = 0


let isPlaying;


const mode = {
	easy: 5,
	medium: 4,
	hard: 3
}



const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'tree',
  'score',
  'railway',
  'pizza',
  'happy',
   'buy',
   'sold',
   'school',
   'therefore',
   'thus',
   'cart',
   'candle',
    'google',
    'fire',
    'quarantine',
    'coronavirus',
    'think',
    'cousin',
    'math',
    'english',
    'miss',
    'confirm',
    'case',
    'tennessee',
    'missouri',
    'louisiana',
    'mississippi',
    'torado',
    'floor',
    'death',
    'sunflower',
    'wide',
    'ablutophobia',
    'bicrescentic',
    'cycloganoidei',
    'brilliant',
    'become',
    'alter',
    'each',
    'town',
    'vacation',
    'probably',
    'might'


];





function startMatch() {
  if (matchWord()) {
  	isPlaying = true;
  	window.time = window.currentlevel + 1
    
    
    showWord(words);
    inputWord.value = '';
    score++;
    
    var barLength = (score/words.length)*100



	$("#bar").width(barLength+ "%");

    totalScore.innerHTML = score
    totalScore.classList.add("totalScore");
  

  }

  else{
  	isPlaying = false;
  }


}

//Match word
function matchWord(){
	if(inputWord.value === currentWord.innerHTML){
		gameDisplay.innerHTML = "Correct! Next!"
		
		 return true;

	}else{
		gameDisplay.innerHTML = '';
		 return false;
	}
}


function countDown(){
	

	if(window.time> 0){ window.time --;
	leftTime.innerHTML = window.time;}
	else if(window.time === 0) {
	 	isPlaying = false;
	 	leftTime.innerHTML = window.time;
	 	
	 	

	 }else(  leftTime.innerHTML = "")

}

function autoCount(){
	cd = setInterval(countDown, 1000);
}


function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}


function checkStatus() {

	
  if (!isPlaying && leftTime.innerHTML == 0) {


    gameDisplay.innerHTML = 'Game Over!!!';
     


    score = 0;
    $("#bar").width("0%");
    totalScore.innerHTML = score
   
  }
}
	


//easy mode

function easyMode(){
	

//on click, stop auto counting
	clearInterval(cd)
	showWord(words)
// Time change to 8


   var currentlevel= mode.easy;

   let time = currentlevel
// make the local varivale to global variable 
   window.time =  time
   window.currentlevel = currentlevel
   leftTime.innerHTML = time
   totalTime.innerHTML = currentlevel
  
//on focus to start

inputWord.addEventListener("focus",autoCount)

 inputWord.addEventListener("input",startMatch);
 setInterval(checkStatus, 50);
  gameDisplay.innerHTML= " "
   
     
    
  

}

function mediumMode(){

 
//on click, stop auto counting

	clearInterval(cd)
	showWord(words)
// Time change to 8

   var currentlevel= mode.medium;

   let time = currentlevel
// make the local varivale to global variable 
   window.time =  time
   window.currentlevel = currentlevel
   leftTime.innerHTML = time
   totalTime.innerHTML = currentlevel
  
//on focus to start

inputWord.addEventListener("focus",autoCount)

 inputWord.addEventListener("input",startMatch);
 setInterval(checkStatus, 50);
 gameDisplay.innerHTML= " "
   
    
}


function hardMode(){
//on click, stop auto counting
	clearInterval(cd)
	showWord(words)
// Time change to 8

   var currentlevel= mode.hard;

   let time = currentlevel
// make the local varivale to global variable 
   window.time =  time
   window.currentlevel = currentlevel
   leftTime.innerHTML = time
   totalTime.innerHTML = currentlevel
  
//on focus to start

inputWord.addEventListener("focus",autoCount)

 inputWord.addEventListener("input",startMatch);
 setInterval(checkStatus, 50);
 gameDisplay.innerHTML= " "
   
    
}




