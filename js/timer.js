window.onload = function () {
    const timerElement = document.querySelector('#timer');
    const startButton = document.querySelector('#startButton');
    const pauseButton = document.querySelector('#pauseButton');
    const resetButton = document.querySelector('#resetButton');
    const markDoneButton = document.getElementById("markDone");

    // Load click sound
    const clickSound = new Audio('sounds/click.mp3');

    // Function to play the click sound
    function playClickSound() {
        clickSound.currentTime = 0; // Reset sound to the beginning
        clickSound.play();
    }

    // Update timer display
    function updateTimerDisplay(display, time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Timer functionality
    let timer;
    let remainingTime = 60 * 15; // 15 minutes in seconds
    let isRunning = false;

    function startTimer(display) {
        if (isRunning) return; // Prevent multiple intervals
        isRunning = true;
        timer = setInterval(() => {
            if (remainingTime <= 0) {
                clearInterval(timer);
                display.textContent = "Time's up!";
                display.style.color = "#ff0000";
                display.style.fontWeight = "bold";
            } else {
                remainingTime--;
                updateTimerDisplay(display, remainingTime);
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetTimer(display) {
        clearInterval(timer);
        isRunning = false;
        remainingTime = 60 * 15; // Reset to 15 minutes
        updateTimerDisplay(display, remainingTime);
        display.style.color = ""; // Reset styling
        display.style.fontWeight = "";
    }

    // Timer button event listeners
    startButton.addEventListener('click', () => {
        playClickSound();
        startTimer(timerElement);
    });
    pauseButton.addEventListener('click', () => {
        playClickSound();
        pauseTimer();
    });
    resetButton.addEventListener('click', () => {
        playClickSound();
        resetTimer(timerElement);
    });

    // Initialize display
    updateTimerDisplay(timerElement, remainingTime);

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const content = item.querySelector('.accordion-content');

            // Toggle active class
            item.classList.toggle('active');
        });
    });

    // Check if Day 1 is done and update button
    if (localStorage.getItem("day1Done") === "true") {
        markDoneButton.textContent = "Mark as Uncompleted";  // Change button text
    }

    // Mark as done or uncompleted functionality
    markDoneButton.addEventListener("click", function () {
        const isCompleted = localStorage.getItem("day1Done") === "true";

        if (isCompleted) {
            localStorage.removeItem("day1Done");  // Remove the completion status
            markDoneButton.textContent = "Mark as Done";  // Change button text back
        } else {
            localStorage.setItem("day1Done", "true");  // Mark as done
            markDoneButton.textContent = "Mark as Uncompleted";  // Change button text
        }
    });
};
