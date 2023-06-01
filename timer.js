var displayHours =document.getElementById('displayHours');
var displayMinutes =document.getElementById('displayMinutes');
var displaySeconds =document.getElementById('displaySeconds');
var startButton =document.getElementById('startbtn');
var pauseButton =document.getElementById('pausebtn');
var resetButton =document.getElementById('resetbtn');
var hours, minutes , seconds ;
 
hours = +prompt("enter the no. of hours") ;
minutes = +prompt("enter the no.of minutes");
seconds = 60 ;
var interval ;


 startButton.disabled = false;
 pauseButton.disabled = false;
 resetButton.disabled = true;
function rendervals(){
    displayHours.innerHTML = hours;
    displayMinutes.innerHTML = minutes ;
    displaySeconds.innerHTML = seconds;

}

function Timer(){
  if (seconds >0) {
    seconds--;
  }
   else if (seconds == 0 && minutes >0){
        minutes -- ;
        seconds = 59
    }
    else if(minutes == 0 && hours >0){
        hours -- ;
       }

    else if (hours == 0 ){
        minutes = 59 ;
        if(minutes=0){
            seconds = 59;
            if(seconds = 0 ){
                clearInterval(interval)
            }
        }
    }
    rendervals()
}

function startStopWatch(){
    interval = setInterval(function(){
        Timer();
    },1000)
    startButton.disabled = true;
    pauseButton.disabled =false;
    resetButton.disabled = false;
  
}
function pauseStopWatch(){
    clearInterval(interval)

    startButton.disabled = true;
    pauseButton.disabled =false;
    resetButton.disabled = false;
}
function resetStopWatch(){
    hours = 0 ;
    minutes = 0 ;
    seconds = 0 ;
    rendervals()

    
    startButton.disabled = false;
    pauseButton.disabled =false;
    resetButton.disabled = true;   
}