let prevTime = 0;
let countClicks = 0;
let currentTime = 0;
let bpm = 0;
let timeDifference = 0;
let bpmTotal = 0;
let bpmFinal = 0;

    let beatsPerMinute = {
    show: function() {
        if (prevTime === 0) {
        prevTime = Date.now();
        } else if ((Date.now()-prevTime) > 2200) {
        this.reset();
        } else {
        currentTime = Date.now();
        timeDifference = currentTime - prevTime;
        prevTime = currentTime;
        bpm = 60 / timeDifference;
        bpmTotal = bpmTotal + bpm;
        countClicks++;
        bpmFinal = (bpmTotal / countClicks) * 1000;

        let result = document.getElementById('result');
        result.innerHTML = bpmFinal.toFixed(0);
        }
    },
    reset: function() {
        prevTime = 0;
        bpm = 0;
        bpmTotal = 0;
        bpmFinal = 0;
        countClicks = 0;

        let result = document.getElementById('result');
        result.innerHTML = '-';
        }
}