let header = document.querySelector('.header');
header.onclick = function () {
    // header.style.backgroundColor = 'red';
}

let enter_tasks = document.querySelector('.enter_tasks');
let add_task = document.querySelector('.add_task');


add_task.onfocus = function () {
    enter_tasks.style.border =  '.5px solid red';
    
}