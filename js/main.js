stage = document.querySelector('#start-button')["name"];
switch (stage){
    case "paused":
        var defaultTime = 25;
        break;
    case "playing":
        var defaultTime = 5;
        break;
    case "paused2":
        var defaultTime = 25;
        break;
    case "playing2":
        var defaultTime = 15;
        break;
    default:
        var defaultTime = 25;
        break;
}
let time = defaultTime * 60
const countHTML = document.getElementById("time");

function change_state() {
    let actualState = document.querySelector('#start-button');
    let modus = document.getElementById("modus-text");
    if (running){

    }else {
        if (actualState["name"] === "paused") {
            actualState.setAttribute("name", "playing");
            modus.innerHTML = "Focus";
            setInterval(updateTime, 1000);

        } else if (actualState["name"] === "playing") {
            actualState.setAttribute("name", "paused2");
            modus.innerHTML = "Break";
            setInterval(updateTime, 1000)
        } else if (actualState["name"] === "paused2") {
            actualState.setAttribute("name", "playing2");
            modus.innerHTML = "Focus";
            setInterval(updateTime, 1000)
        } else {
            actualState.setAttribute("name", "paused");
            modus.innerHTML = "Long Break";
            setInterval(updateTime, 1000)
        }
    }
}

function running(){
    let mainButton = document.querySelector("#start-button");
}

function updateTime(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countHTML.innerHTML = `${minutes} ${seconds}`
    time--;
}