//! to change the header background randomly
let header = document.getElementById('header');

let getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let changeHeaderBackground = function () {
    // header.style.backgroundColor = `hsl(${getRandomNumber(0, 10)}, 100%, 50%)`;
}

setInterval(changeHeaderBackground, 1000);

header.addEventListener('click', function () {
    changeHeaderBackground();
})

let card_info = document.getElementById('card_info');
let cards = document.querySelectorAll('#card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        let card_info = card.querySelector('#card_info');
        // card_info.classList.toggle('-bottom-80');
        card_info.classList.toggle('bottom-4');
        card.classList.toggle('bg-[#0ef]');
    });
})
   
//! heart fall
{let heart_wrapper = document.getElementById('heart_wrapper');
let btn_certificate = document.getElementById('btn_certificate');

let Congratulations = () => {
    let heart_emojis = ['&#128153;', '&#128154;', '&#128155;','&#128156;', '&#129505;'];
    let heart_container = document.createElement("div");
    heart_container.classList.add('container');
    heart_wrapper.appendChild(heart_container);
    let createRandomHeart = function () {

        let heart = document.createElement("div");
        heart.innerHTML = heart_emojis[getRandomNumber(0,4)];
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.position = 'fixed';
        heart.style.animationDuration = `${getRandomNumber(.5, 1)}s`;
        heart_container.appendChild(heart);
    };

    let repeatCreateRandomHeart = setInterval(() => {
        createRandomHeart();
    }, 10);

    setTimeout(() => {
        clearInterval(repeatCreateRandomHeart);
    }, 2000);
    setTimeout(() => {
        heart_container.remove();
    }, 4000);
}

btn_certificate.addEventListener('click', () => {
    Congratulations();
}) 

header.onclick = function () {
    Congratulations();
}}
