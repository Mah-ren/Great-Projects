let title = document.getElementById('title');
let err_internet = document.getElementById('err_internet');
let online_offline = document.getElementsByClassName('online_offline');
let btn_reload = document.getElementById('reload');
let ul = document.querySelector('ul');
let try_ = document.getElementById('try');

onload = function(){
    if(navigator.onLine)
        online();
    else
        offline();

}

addEventListener('online', function(){
    online();
})

addEventListener('offline', function(){
    offline();
})

btn_reload.addEventListener('click', function(){
    window.location.reload();
})

function online(){
    title.innerHTML = 'online now';
    title.style.backgroundColor = 'green';
    btn_reload.classList.add('hide');
    ul.classList.add('hide');
    try_.classList.add('hide');
    err_internet.classList.add('hide');
    title.style.borderRadius = '10px';
    title.style.padding = '10px';

}

function offline(){
    title.innerHTML = 'offline now';
    title.style.backgroundColor = 'online';
    online_offline.classList.remove('hide');


}



