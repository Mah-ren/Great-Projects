let main = document.getElementById('main');
let stars = document.getElementById('stars');
let name_behind_moon = document.getElementById('name_behind_moon');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let last_mountain = document.getElementById('last_mountain');




onscroll = function(){
    
    let value = this.scrollY;
    moon.style.top = value * 4 + 'px';
    stars.style.left = value + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 2 + 'px';
    boat.style.left = value * 3 + 'px';
    boat.style.top = value + 'px';
    river.style.top = value + 'px';

    name_behind_moon.style.fontSize = value + 'px';
    if(this.scrollY >= 101)
        main.style.background = 'linear-gradient(#04a3ff, #00d0ff64)';
    else
        main.style.background = 'linear-gradient(to bottom, #200017 , #200016 )';
    if(this.scrollY >= 50){
        name_behind_moon.style.fontSize = '60px';
        name_behind_moon.style.position = 'fixed';
        if(this.scrollY >= 380){
            name_behind_moon.style.display = 'none';
        }
        else
            name_behind_moon.style.display = 'block';
    }

    //! storing the scrolly in the localstorage
    // this.localStorage.setItem('scrolly', JSON.stringify(value));

    
}


let home = document.getElementById('home');
let content = document.getElementById('content');

home:onclick = function(){
    content.style.width = '80%';
    // this.scrollY = JSON.parse(localStorage.scrolly);
}