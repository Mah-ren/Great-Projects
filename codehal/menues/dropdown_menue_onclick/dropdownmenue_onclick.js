let menue_wrapper = document.getElementById('menue_wrapper');
let dropdown_menue = document.getElementById('dropdown_menue');
let icon_down_arrow = document.getElementById('icon_down_arrow');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let items = document.getElementById('items');

dropdown_menue.addEventListener('click', () => {
    dropdown_menue.classList.toggle('active');
})
