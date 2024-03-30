// Variables
//let workCountdown = 25 * 60; // Timer 25 mins by default (Mins * 60 Secs)
//let breakCountdown = 5 * 60; // Timer 5 mins by default (Mins * 60 Secs)
let workTimerActive = false;
let breakTimerActive = false;

function startWorkTimer() {
    console.log("startWorkTimer()...");

    //let workCountdown = parseRawTime(document.getElementById('workTimeDisplay').innerHTML);

    if (!workTimerActive) {
        workTimer = setInterval("decreaseWorkTime()", 1000);
        workTimerActive = true;
        console.log("Work timer started");
    }
    // if (breakTimerActive) {setInterval(decreaseTime(timerID, breakCountdown, breakTimerActive), 1000); console.log("Break timer started")}
}

function pauseWorkTimer() {} // ???

function parseRawTime(rawTime) {
    console.log("Parsing rawTime...")
    console.log("rawTime: " + rawTime);

    rawSecs = rawTime.substring(rawTime.indexOf(':')+1, rawTime.length);
    console.log("Seconds: " + rawSecs);

    rawMins = rawTime.substring(0, rawTime.indexOf(':'));
    console.log("Mins: " + rawMins);

    formattedTime = parseInt(rawSecs) + parseInt(rawMins * 60);
    console.log("formattedTime: " + formattedTime);
    return formattedTime;
}

function decreaseWorkTime() {
    currentTime = document.getElementById('workTimeDisplay').innerHTML;

    console.log("Current workTimeDisplay: " + currentTime);

    currentSecs = currentTime.substring(currentTime.indexOf(':')+1, currentTime.length);
    console.log("Current work Seconds: " + currentSecs);

    currentMins = currentTime.substring(0, currentTime.indexOf(':'));
    console.log("Current work Mins: " + currentMins);

    currentSecs = parseInt(currentSecs);
    currentMins = parseInt(currentMins);

    if (currentSecs > 0) {
        currentSecs--;
    }

    else if (currentMins == 0) {
        deactivateTimer('workTimeDisplay');
        activateTimer('breakTimeDisplay');
        startBreakTimer();
    }

    else {
        currentMins--; 
        currentSecs = 59;
    }
    
    document.getElementById('workTimeDisplay').textContent = currentMins + ":" + currentSecs;
}

function activateTimer(id) {
    document.getElementById(id).setAttribute("class", "activeTimer");
}

function deactivateTimer(id) {
    document.getElementById(id).setAttribute("class", "inactiveTimer");
}