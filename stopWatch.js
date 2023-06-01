var displayHours =document.getElementById('displayHours');
var displayMinutes =document.getElementById('displayMinutes');
var displaySeconds =document.getElementById('displaySeconds');
var startButton =document.getElementById('startbtn');
var pauseButton =document.getElementById('pausebtn');
var resetButton =document.getElementById('resetbtn');
var hours, minutes , seconds ;
 
hours = 0 ;
minutes = 0;
seconds = 0 ;
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
    (seconds++) ;
    if (seconds == 60){
        minutes ++ ;
        seconds = 0
    }
    else if(minutes == 60){
        hours ++ ;
        minutes = 0
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