let html = document.querySelector('html');
let body = document.querySelector('body');
let welcome = document.querySelector('.welcome');
let btnWelcome = welcome.querySelector('button');
let wrap = document.querySelector('.wrap');
let ascrail2000;
let ascrail2001;
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
    ascrail2001 = document.querySelector('#ascrail2001 div');
    evt.target.classList.add('active');
    setTimeout(function() {
        pEl.classList.add('active');
        setTimeout(function() {
            crossing.classList.add('active');
        }, 500);
        
    }, 1000);
    setTimeout(function() {
        welcome.classList.add('active');
        console.log(ascrail2001);
        ascrail2001.classList.add('active');
        
        // востонавливает прокрутку
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }, 2000);
})





// гамбургер меню
let bar = document.querySelector('#nav_icon');
let radius = document.querySelector('.nav_radius');
let rad_red = document.querySelector('.nav_red');

bar.addEventListener('click', ()=>{
    ascrail2000 = document.querySelector('#ascrail2000 div');
    bar.classList.toggle('open');

    // остановить прокрутку
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
    

    if(radius.classList.contains('active')){

        setTimeout(function(){
            radius.classList.remove('active'); 
            ascrail2000.classList.remove('active');
            ascrail2001.classList.add('active');
        }, 250);

        rad_red.classList.add('active');

        setTimeout(function(){
            rad_red.classList.remove('active');
            
            // запустить прокрутку
            $('html, body').css({
                height: 'auto'
            });
        }, 500);
    }
    else{
        radius.classList.add('active');
        ascrail2000.classList.add('active');
        ascrail2001.classList.remove('active');
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
console.log(client);
console.log(services['client']);
console.log(services['project']);
console.log(services['members']);



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
}


