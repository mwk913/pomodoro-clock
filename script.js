//Globals
let counter = 0;
let timerMins = 25;// change this to change mins //example: 17 = 17 mins, 18 = 18 mins, etc.
let timeleft = 60 * timerMins;
let breakMins = 5;
let pause = false;
let stopTopButtons = true;
let sessionReset = false;
let breakReset = true;


//Set Top Displays
document.getElementById("top-session-mins").innerHTML = timerMins;
document.getElementById("top-break-mins").innerHTML = breakMins;

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
  endTime(); // ends on 0 time
}

function startTimer(){
  if (counter == 0 || pause == true){
    x = setInterval(Timer, 1000)
  }else{
    return;
  }
  pause = false;
  stopTopButtons = false;
  breakReset = false;
}

function pauseTimer(){
  pause = true;
  clearInterval(x)
}

function stopTimer(){
  timerMins = 25;
  breakMins = 5;
  document.getElementById("top-session-mins").innerHTML = timerMins;
  document.getElementById("top-break-mins").innerHTML = breakMins;
  clearInterval(x)
  resetTimer();
  document.getElementById('bottom-session1').innerHTML = "Session"
  stopTopButtons = true;
}

function resetTimer(){
  counter = 0;
  timerMins = 25; 
  timeleft = 60 * timerMins;
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
}

function endTime(){
  if ((timeleft-counter) <= 3 && (timeleft-counter) >= 1){
    playSound();
  }else if ((timeleft-counter) === 0){
    getBreakDisplay();
    }
}

function playSound(){
  audio = document.querySelector('audio')
  audio.currentTime = 0;
  audio.play();
}

function addTimerMins() {
  if (timerMins <= 59 && stopTopButtons == true){
  document.getElementById("top-session-mins").innerHTML = ++timerMins;
  timeleft = 60 * timerMins;
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
  }
}

function subTimerMins(){
  if (timerMins >= 2 && stopTopButtons == true){
  document.getElementById("top-session-mins").innerHTML = --timerMins;
  timeleft = 60 * timerMins;
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
  }else{
    endTime();
  }
}

function addBreakMins(){
  if (stopTopButtons == true){
    if(breakMins >= 2 && breakMins <= 10){
      document.getElementById("top-break-mins").innerHTML = --breakMins;
    }
  }
}

function subBreakMins(){
  if (stopTopButtons == true) {
    if (breakMins >= 1 && breakMins <= 9){
      document.getElementById("top-break-mins").innerHTML = ++breakMins;
    }
  }
}

function getBreakDisplay(){
  clearInterval(x);
  counter = 0
  timeleft = 60 * breakMins;
  document.getElementById('bottom-session1').innerHTML = "Break"
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
  if (sessionReset == false && breakReset == false){
    startTimer();
    sessionReset = true;
  }else{
    clearInterval(x)
    refreshSession();
  }
}

function refreshSession(){
  sessionReset = false;
  counter = 0;
  timerMins; 
  timeleft = 60 * timerMins;
  document.getElementById('bottom-session1').innerHTML = "Session"
  document.getElementById('timer').innerHTML = convertSeconds(timeleft - counter);
}













