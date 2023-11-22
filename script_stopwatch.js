var tenms = 0;
var sec = 0;
var min = 0;
var hr = 0;
var check = false;

var fintenms = "";
var finsec = "";
var finmin = "";
var finhr = "";

var stopinter = "";

function restart() {
  sec = 0;
  min = 0;
  hr = 0;
  tenms = 0;
  document.getElementById("StopWatch1").innerHTML = "00:00:00:00";
  console.log("restarted")
}

function play() {
  if (check == false) {
    check = true;
    stopinter = setInterval(tick, 10)
    console.log("check is", check)
  }
  else {
    console.log("Check is already true?")
  }
}

function stop() {
  check = false;
  clearInterval(stopinter)
  console.log("Check is", check)
}

function tick() {
  if (tenms < 100) {
    tenms = tenms + 1;
  }
  if (tenms == 100) {
    tenms = 0
    sec = sec + 1
  }
  if (sec == 60) {
    sec = 0
    min = min + 1
  }
  if (min == 60) {
    min = 0
    hr = hr + 1
  }
  if (tenms < 10) {
    fintenms = "0" + tenms;
  }
  if (tenms >= 10) {
    fintenms = tenms;
  }
  if (sec < 10) {
    finsec = "0" + sec;
  }
  if (sec >= 10) {
    finsec = sec;
  }
  if (min < 10) {
    finmin = "0" + min;
  }
  if (min >= 10) {
    finmin = min;
  }
  if (hr < 10) {
    finhr = "0" + hr;
  }
  if (hr >= 10) {
    finhr = hr;
  }
  document.getElementById("StopWatch1").innerText = finhr + ":" + finmin + ":" + finsec + ":" + fintenms;
  console.log("YEah");
}

function renew(x) {
  if (x == 1) {
    location.replace("digitalwatch.html");
  }
  if (x == 2) {
    location.replace("stopwatch.html");
  }
  if (x == 3) {
    location.replace("timer.html");
  }
}
