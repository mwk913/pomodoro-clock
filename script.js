//Globals
let counter = 0;
let timerMins = 25; // change this to change mins //example: 17 = 17 mins, 18 = 18 mins, etc.
let timeleft = 60 * timerMins;
let pause = false;

//Initial Display 
document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);

//Functions
function convertSeconds(time){
 var min = Math.floor(time / 60);
 var sec = time % 60;
 return min + ":" + ("0" + sec).slice(-2);
} 

function Timer(){
  counter++;
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
}

function startTimer(){
  if (counter == 0 || pause == true){
    x = setInterval(Timer, 1000)
  }else{
    return;
  }
  pause = false;
}

function pauseTimer(){
  pause = true;
  clearInterval(x)
}

function stopTimer(){
  clearInterval(x)
  updateTimer();
}

function updateTimer(){
  counter = 0;
  timerMins = 25; 
  timeleft = 60 * timerMins;
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
}










