function newAudio(audio) {
    audio = new Audio(audio)
    audio.play();
}

function playAudio() {
    newAudio("media/bells.mp3");
}

function timer() {
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    let date = new Date("June 30, 2023 16:03").getTimezoneOffset();
    let now = new Date().getTimezoneOffset();
    let distance = date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = (`<br>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</br>`);

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "THE SEA HAS ARRIVED.";
    }
}

function eye() {
    let eye = document.getElementById("eye");
    let random = Math.floor(Math.random() * 1000)

    eye.style.left = (`${random}px`)
    eye.style.right = (`${random}px`)
    eye.style.top = (`${random}px`)
    eye.style.bottom = (`${random}px`)
}

setInterval(timer, 1000);
setInterval(eye, 1000);
