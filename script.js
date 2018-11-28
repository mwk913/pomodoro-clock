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
  endTime(); // ends on 0 time
  
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
  resetTimer();
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
    clearInterval(x);
    alert("break time");
    }
}

function playSound(){
  audio = document.querySelector('audio')
  audio.currentTime = 0;
  audio.play();
}













