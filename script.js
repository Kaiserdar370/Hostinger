// Set the initial countdown duration in seconds (e.g., 48 hours)
let countdownDuration = 48 * 60 * 60; // 48 hours in seconds

// Function to format time (pad with leading zero if needed)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Countdown Timer Logic
function startCountdown(duration) {
    let remainingTime = duration;

    // Update countdown every second
    let countdownInterval = setInterval(function() {
        // Calculate days, hours, minutes, and seconds
        let days = Math.floor(remainingTime / (60 * 60 * 24));
        let hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        let seconds = remainingTime % 60;

        // Display the countdown on the page
        document.getElementById('days').textContent = formatTime(days);
        document.getElementById('hours').textContent = formatTime(hours);
        document.getElementById('minutes').textContent = formatTime(minutes);
        document.getElementById('seconds').textContent = formatTime(seconds);

        // Decrement the remaining time
        remainingTime--;

        // If countdown ends, restart it
        if (remainingTime < 0) {
            clearInterval(countdownInterval); // Stop the interval
            startCountdown(countdownDuration); // Restart the countdown
        }
    }, 1000);
}

// Start the countdown with the initial duration
startCountdown(countdownDuration);
