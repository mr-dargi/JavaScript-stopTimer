let [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

const displayTimer = () => {
    milliSeconds += 10;

    if(milliSeconds == 1000) {
        milliSeconds = 0;
        seconds++;

        if(seconds == 60) {
            seconds = 0;
            minutes++;

            if(minutes == 60) {
                minutes = 0;
                hours++; 
            }
        }
    }


    let ms = milliSeconds < 10 ? "00" + milliSeconds : milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}


document.getElementById("startTimer").addEventListener("click", () => {
    if(int !== null){
        clearInterval(int);
    }

    int = setInterval(displayTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(int);
})



document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(int);
    [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00 : 000";
})



