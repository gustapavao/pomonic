var display = document.querySelector(".time");
var seconds = convertToSeconds(display);



function convertToSeconds(element){
    let minutes = element.innerHTML.split(" ")
    return minutes[0] * 60;
}


function start(){
    setInterval(run, 1000);
}


function run(){
    display.innerHTML = getTimer()
    console.log(seconds % 60);
    seconds --;
}

function getTimer(){
    let displayMinutes = (seconds/60).toString().split(".")[0]
    let displaySeconds = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
    return (displayMinutes + " " + displaySeconds);
}