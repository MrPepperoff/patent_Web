let html = document.querySelector('html');
let body = document.querySelector('body');
let welcome = document.querySelector('.welcome');
let btnWelcome = welcome.querySelector('button');
let wrap = document.querySelector('.wrap');
let nicescrollRails;
// прокрутка страницы в самый низ

// отменяет прокрутку до нажатия на кнопку 
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });

// Анимация курсора
(function(){
    wrap.addEventListener('mousemove', (evt)=>{

            let cursor = document.querySelector('.cursor');
            cursor.style.left = evt.clientX - 25  + 'px';
            cursor.style.top = evt.clientY - 25 + window.pageYOffset + 'px';
        })
})();

// Полностью переписать переход от welcome к wrap
// проблема: экран скачет
// 
let pEl = welcome.querySelector('p');
let crossing = document.querySelector('.crossing');
btnWelcome.addEventListener('click', (evt)=>{
    nicescrollRails = document.querySelector('.nicescroll-rails div');
    evt.target.classList.add('active');
    setTimeout(function() {
        pEl.classList.add('active');
        setTimeout(function() {
            crossing.classList.add('active');
        }, 500);
        
    }, 1000);
    setTimeout(function() {
        welcome.classList.add('active');
        nicescrollRails.classList.add('active');
        
        // востонавливает прокрутку
        $('html, body').css({
            height: 'auto'
        });
    }, 2000);
})





// Анимация кнопки гамбургер меню
let bar = document.querySelector('#nav_icon');
bar.addEventListener('click', ()=>{
    bar.classList.toggle('open');
})



// При прокрутке выделяет фиксированную панели
let fixedBar = document.querySelector('#fixedBar');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= 100){
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
    console.log(procents[i].innerHTML);
    console.log(progresses[i]);
}


