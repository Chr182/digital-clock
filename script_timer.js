var sec = 0;
var min = 0;
var hr = 0;
var check = false;
var counter = false;

var finsec = "";
var finmin = "";
var finhr = "";

var stopinter = "";

function restart() {
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("Timer1").innerHTML = "00:00:00";
  console.log("restarted")
  forcestop()
}

function play() {
  if (check == false && counter == true) {
    check = true;
    stopinter = setInterval(tick, 1000)
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

function forcestop() {
    check = false;
    clearInterval(stopinter)
    console.log("Check is", check)
    counter = false;
  }

function tick() {
  if (sec > -1) {
    sec = sec - 1;
  }
  if (sec == 0 && min == 0 && hr == 0) {
    forcestop()
  }
  if (sec == -1 && min != 0) {
    sec = 59
    min = min -1
  }
  if (sec == -1 && min == 0) {
    sec = 59
    min = 59
    hr = hr -1
  }
  if (min == -1 && hr != 0) {
    min = 59
    hr = hr - 1
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
  document.getElementById("Timer1").innerText = finhr + ":" + finmin + ":" + finsec;
  console.log("YEah");
}

function menu(x) {
    var time = sec + min * 60 + hr * 3600
    if (check == false) {
        if (x == 1  && hr !=99) {
            hr = hr + 1
        }
        if (x == 2 && min != 59) {
            min = min + 1
        }
        if (x == 3 && sec != 59) {
            sec = sec + 1
        }
        if (x == 4 && hr != 0) {
            hr = hr - 1
        }
        if (x == 5 && min != 0) {
            min = min - 1
        }
        if (x == 6 && sec != 0) {
            sec = sec - 1
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
        document.getElementById("Timer1").innerText = finhr + ":" + finmin + ":" + finsec;
        console.log("YEah");
    }
    if (time != 0) {
        counter = true;
    }
    if (time == 0) {
        counter = false;
    }
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