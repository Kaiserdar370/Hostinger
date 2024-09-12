// Set the date for the countdown (set 2 days from now)
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 2);

let countdownTimer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("claimButton").innerHTML = "Offer Expired";
        document.getElementById("claimButton").style.backgroundColor = "#d3d3d3";
        document.getElementById("claimButton").style.pointerEvents = "none";
    }
}, 1000);
