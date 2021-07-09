const header = document.querySelector('header');
const dMenu = document.querySelector('#dMenu');
const sm = document.querySelector('#social-media');
let clasOfHeader = header.className;



sm.className = "smHide"
header.classList.add('vanish');

window.addEventListener('scroll',() =>{
    if(window.scrollY == 0){
        clasOfHeader == "vanish" ? header : header.classList.replace('init','vanish');
        dMenu.classList.replace("dMD","dMP");
        sm.classList.replace('smShow','smHide')
    }else{
        header.classList.replace('vanish','init');
    }
})

dMenu.addEventListener('click', () => {
    if(header.className == "vanish"){
        console.log('is already vanish')
    }else{
        dMenu.className == "dMP" ? dMenu.classList.replace('dMP','dMD'): dMenu.classList.replace('dMD','dMP') ;
        sm.className == "smHide" ? sm.style.display = "flex": sm;
        sm.className == "smHide" ? sm.classList.replace('smHide','smShow'): sm.classList.replace('smShow','smHide');
    }
})