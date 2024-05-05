let hamburger_wrapper = document.getElementById("hamburger_wrapper");
let hamburger_icon = document.getElementById("hamburger_icon");
let span1_icon = document.querySelector('#hamburger_wrapper #hamburger_icon span:nth-child(1)');
let span2_icon = document.querySelector('#hamburger_wrapper #hamburger_icon span:nth-child(2)');
let span3_icon = document.querySelector('#hamburger_wrapper #hamburger_icon span:nth-child(3)');


hamburger_wrapper.onclick = function () {
    hamburger_wrapper.classList.toggle('active');
};

