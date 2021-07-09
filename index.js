const header = document.querySelector('header');
let clasOfHeader = header.className;

header.classList.add('vanish');

window.addEventListener('scroll',() =>{
    if(window.scrollY == 0){
        clasOfHeader == "vanish" ? header : header.classList.replace('init','vanish');
    }else{
        header.classList.replace('vanish','init');
    }
})