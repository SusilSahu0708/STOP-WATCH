const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const miliseconds = document.querySelector(".miliseconds");

const resetBtn = document.querySelector(".resetBtn");
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");

let interval = null;

let miliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;


startBtn.addEventListener("click", () => {
    startStopWatch();
})

resetBtn.addEventListener("click", () => {
    resetStopWatch();
})

pauseBtn.addEventListener("click", () => {
    pauseStopWatch();
     changeBtn("pause");

})

// ! Update the Stopwatch.

const updateStopWatch = () => {
    miliseconds.textContent = 
    miliSecond < 10 ? "0" + miliSecond : miliSecond;
    seconds.textContent = 
    second < 10 ? "0" + second : second;
    minutes.textContent = 
    minute < 10 ? "0" + minute : minute;
    hours.textContent = 
    hour < 10 ? "0" + hour : hour;
}


// ! Reset the stopwatch.
const resetStopWatch = () => {

    changeBtn("reset");

    clearInterval(interval);
    interval = null;

    miliSecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    
    updateStopWatch();
}


// ! Start the stop watch.
const startStopWatch = () => {

    changeBtn("start");

    if(interval) return


    interval = setInterval(() => {
        miliSecond++;
        
        if(miliSecond > 99) {
            miliSecond = 0;
            second++;
        }

        if(second > 59) {
            second = 0;
            minute++;
        }

        if(minute > 59) {
            minute = 0;
            hour++;
        }

        updateStopWatch();
        
    }, 10)
}

// ! Pause the stop watch.
const pauseStopWatch = () => {
    clearInterval(interval);  
    interval = null;
}

// ! Change the color of button.

const changeBtn = (btnName) => {
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.remove("btn-click");
    })

    document.querySelector( '.'+ btnName + "Btn").classList.add("btn-click");
}