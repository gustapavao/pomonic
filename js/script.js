var running;
var display = document.querySelector(".time");
var seconds = convertToSeconds(display);
var actualStage = document.querySelector("#modus-text").innerHTML
var hadBreak;
var menu = document.querySelector(".menu")
var longBreaktime;
var breaktime;


function convertToSeconds(element){
    let minutes = element.innerHTML.split(" ")
    return minutes[0] * 60;
}


function start(){
    let playButton = document.querySelector("#start-button");
    let iconPlayButton = document.querySelector("#icon-start-button");
    playButton.setAttribute("onclick", "pause();");
    iconPlayButton.setAttribute("src", "static/image/pause.svg");
    display.style.fontWeight = "bold";
    running = setInterval(run, 1000);
}

function pause(){
    let playButton = document.querySelector("#start-button");
    let iconPlayButton = document.querySelector("#icon-start-button");
    playButton.setAttribute("onclick", "start();");
    iconPlayButton.setAttribute("src", "static/image/play.svg");
    display.style.fontWeight = "normal";
    clearInterval(running);
}

function fastFoward(){
    changeStage();
    pause();
}

function run(){
    display.innerHTML = getTimer()
    seconds --;
}

function getTimer(){
    let minutes = (seconds/60).toString().split(".")[0]
    console.log(minutes)
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    console.log("display", displayMinutes)
    let displaySeconds = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
    if (displayMinutes.toString() === "00" && displaySeconds.toString() === "00"){
        changeStage();
    }else{
        return (displayMinutes + " " + displaySeconds);
    }
}

function changeStage(){
    if (actualStage === "Focus"){
        if (hadBreak){
            actualStage = "Long Break";
            seconds = 15 * 60;
            hadBreak = false;
            changeStyle("long");
        }else{
            actualStage = "Break";
            seconds = 5*60;
            hadBreak = true;
            changeStyle("break");
        }
    }else{
        actualStage = "Focus";
        seconds = 25 * 60;
        changeStyle("normal");
    }
}

function changeStyle(stage){
    let modus_image = document.getElementById("modus-img");
    let body = document.querySelector("body");
    let buttonContainer = document.querySelector(".buttons-container");
    let sideButton = document.querySelectorAll(".side-button");
    let mainButton = document.querySelector("#start-button");
    let modus = document.querySelector(".modus");
    let modus_text = document.querySelector("#modus-text");
    let logo = document.querySelector("#logo");

    let icon = stage === "normal" ? "brain" : "coffee";
    let modusText = stage === "normal" ? "Focus" : "Break";

    logo.style.color = `var(--${stage}-second-color)`;
    modus_text.innerHTML = `${modusText}`;
    modus.style.color = `var(--${stage}-second-color)`;
    modus.style.background = `var(--${stage}-third-color)`;
    modus.style.border = `var(--${stage}-second-color) solid 2px`;
    body.style.background = `var(--${stage}-main-color)`;
    buttonContainer.style.color = `var(--${stage}-second-color)`;
    mainButton.style.background = `var(--${stage}-bg-button-color)`;
    display.style.color = `var(--${stage}-second-color)`;
    sideButton[0].style.background = `var(--${stage}-third-color)`;
    sideButton[1].style.background = `var(--${stage}-third-color)`;
    modus_image.setAttribute("src", `static/image/${icon}.svg`);
}

// function openMenu(){
//     menu.style.opacity = 1;
//     menu.style.pointerEvents = "auto";
// }

// function closeWindow(){
//     menu.style.opacity = 0;
//     menu.style.pointerEvents = "none";
//     if (document.querySelector("#focusl") != 25){
//         seconds = document.querySelector("#focusl")
//         console.log(seconds)
//     }


// }