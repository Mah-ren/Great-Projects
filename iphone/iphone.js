let gold  = document.getElementById('gold');
let light_blue = document.getElementById('light_blue');
let gray = document.getElementById('gray');
let white = document.getElementById('white');
let red = document.getElementById('red');
let photo = document.getElementById('photo');

if(localStorage.length > 0){
    photo.src = localStorage.img_src;
    document.body.style.backgroundColor = localStorage.background_color;
}

function setBackgroundColor (background_color, img_src="imgs/0.png"){
    document.body.style.backgroundColor = background_color;
    photo.src =  img_src;
    localStorage.setItem('img_src', img_src);
    localStorage.setItem('background_color', background_color);
}







