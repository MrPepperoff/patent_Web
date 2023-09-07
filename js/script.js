let html = document.querySelector('html');
let body = document.querySelector('body');
let welcome = document.querySelector('.welcome');
let btnWelcome = welcome.querySelector('button');
let wrap = document.querySelector('.wrap');
// scroll 
jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

// прокрутка страницы в самый низ
// Window.scrollTo()прокручивает до определенного набора координат в документе.

// отменяет прокрутку до нажатия на кнопку 

// Анимация курсора
(function(){
    wrap.addEventListener('mousemove', (evt)=>{
            let cursor = document.querySelector('.cursor');
            cursor.style.left = evt.clientX - 25  + 'px';
            cursor.style.top = evt.clientY - 25 + window.pageYOffset + 'px';
            
            // console.log(window.pageYOffset);
        })
})();

// Полностью переписать переход от welcome к wrap
// проблема: экран скачет
// 
let pEl = welcome.querySelector('p');
let crossing = document.querySelector('.crossing');

btnWelcome.addEventListener('click', (evt)=>{
    evt.target.classList.add('active');
    setTimeout(function() {
        pEl.classList.add('active');
        setTimeout(function() {
            crossing.classList.add('active');
        }, 500);
        
    }, 1000);
    setTimeout(function() {
        welcome.classList.add('active');     
    }, 2000);
})





// гамбургер меню
let bar = document.querySelector('#nav_icon');
let radius = document.querySelector('.nav__radius');
let rad_red = document.querySelector('.nav__red');

bar.addEventListener('click', ()=>{
    bar.classList.toggle('open');

    if(radius.classList.contains('active')){

        setTimeout(function(){
            radius.classList.remove('active'); 
        }, 250);

        rad_red.classList.add('active');
        setTimeout(function(){
            rad_red.classList.remove('active');
        }, 500);
    }
    else{
        radius.classList.add('active');
    }
})
// работа подменю
let menu = document.querySelector('#menu span');
let submenu = document.querySelector('#submenu');
    menu.addEventListener('click',()=>{
        submenu.classList.toggle('active');
    })

// Services бегущие цифры

let client = document.querySelector("#client");
let project = document.querySelector("#project");
let members = document.querySelector("#members");

let services = {'client': 10, 'project': 950, 'members': 40};
// console.log(client);
// console.log(services['client']);
// console.log(services['project']);
// console.log(services['members']);



for(let i = 0; services['client'] >= i; i++){
    setTimeout( function(){
        client.innerHTML = i;
    }, 1000*i);
}
for(let i = 0; services['project'] >= i; i++){
    setTimeout( function(){
        project.innerHTML = i;
    }, 10*i);
}
for(let i = 0; services['members'] >= i; i++){
    setTimeout( function(){
        members.innerHTML = i;
    }, 250*i);
}









// При прокрутке выделяет фиксированную панели
let fixedBar = document.querySelector('#fixedBar');
// .pageYOffset;

window.addEventListener('scroll',()=>{
    let pageY = window.scrollY;
    console.log(pageY);
    if(pageY >= 100){
        fixedBar.style.transition = '0.2s';
        fixedBar.style.background = '#1d1e20';
    }
    else{
        fixedBar.style.background = 'transparent';
    }
});

// линяя прогресса #about
let procents = document.querySelectorAll('#about .procent');
let progresses =document.querySelectorAll('.progress');

for(let i = 0; i <procents.length; i++){
    progresses[i].style.width = procents[i].innerHTML
}


