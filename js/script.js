var running;
var display = document.querySelector(".time");
var seconds = convertToSeconds(display);
var actualStage = document.querySelector("#modus-text").innerHTML
var hadBreak = false;

let sideButton = document.querySelectorAll(".side-button");
console.log(sideButton)


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
    running = setInterval(run, 100);
}

function pause(){
    let playButton = document.querySelector("#start-button");
    let iconPlayButton = document.querySelector("#icon-start-button");
    playButton.setAttribute("onclick", "start();");
    iconPlayButton.setAttribute("src", "static/image/play.svg");
    display.style.fontWeight = "normal";
    clearInterval(running);
}


function run(){
    display.innerHTML = getTimer()
    seconds --;
}

function getTimer(){
    let minutes = (seconds/60).toString().split(".")[0]
    let displayMinutes = minutes % 60 < 10 ? "0" + minutes % 60 : seconds % 60;
    let displaySeconds = seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60;
    if (displayMinutes.toString() === "00" && displaySeconds.toString() === "00"){
        changeStage();
    }else{
        return (displayMinutes + " " + displaySeconds);
    }
}

function changeStage(){
    let modus_image = document.getElementById("modus-img");
    let body = document.querySelector("body");
    let buttonContainer = document.querySelector(".buttons-container");
    let sideButton = document.querySelectorAll(".side-button");
    let mainButton = document.querySelector("#start-button")
    let modus = document.querySelector(".modus")
    if (actualStage === "Focus"){
        if (hadBreak){
            actualStage = "Long Break";
            seconds = 180;
            hadBreak = false;
            modus.style.color = "var(--long-second-color)";
            modus.style.background = "var(--long-third-color)";
            modus.style.border = "var(--long-second-color) solid 2px";
            body.style.background = "var(--long-main-color)";
            buttonContainer.style.color = "var(--long-second-color)";
            mainButton.style.background = "var(--long-bg-button-color)";
            display.style.color = "var(--long-second-color)";
            sideButton[0].style.background = "var(--long-third-color)";
            sideButton[1].style.background = "var(--long-third-color)";
            modus_image.setAttribute("src", "static/image/coffee.svg");
        }else{
            actualStage = "Break";
            seconds = 120;
            hadBreak = true;
            modus.style.color = "var(--break-second-color)";
            modus.style.background = "var(--break-third-color)";
            modus.style.border = "var(--break-second-color) solid 2px";
            body.style.background = "var(--break-main-color)";
            buttonContainer.style.color = "var(--break-second-color)";
            mainButton.style.background = "var(--break-bg-button-color)";
            display.style.color = "var(--break-second-color)";
            sideButton[0].style.background = "var(--break-third-color)";
            sideButton[1].style.background = "var(--break-third-color)";
            modus_image.setAttribute("src", "static/image/coffee.svg");
        }
    }else{
        actualStage = "Focus"
        seconds = 60;
        modus.style.color = "var(--normal-second-color)";
        modus.style.background = "var(--normal-third-color)";
        modus.style.border = "var(--normal-second-color) solid 2px";
        body.style.background = "var(--normal-main-color)";
        buttonContainer.style.color = "var(--normal-second-color)";
        mainButton.style.background = "var(--normal-bg-button-color)";
        display.style.color = "var(--normal-second-color)";
        sideButton[0].style.background = "var(--normal-third-color)";
        sideButton[1].style.background = "var(--normal-third-color)";
        modus_image.setAttribute("src", "static/image/brain.svg");
    }
}