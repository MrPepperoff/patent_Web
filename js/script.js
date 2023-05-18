let welcome = document.querySelector('.welcome');
let btnWelcome = welcome.querySelector('button');
let wrap = document.querySelector('.wrap');

// Анимация курсора
(function(){
    wrap.addEventListener('mousemove', (evt)=>{
            let cursor = document.querySelector('.cursor');
            cursor.style.left = evt.clientX - 25  + 'px';
            cursor.style.top = evt.clientY - 25 + window.pageYOffset + 'px';
        })
})();
// <<Времянка>> переход от первой блока к основному
let close = document.querySelector(".close");
// let body = document.querySelector('body');

btnWelcome.addEventListener('click',(evt)=>{
    evt.target.classList.add('active');
    setTimeout(function() {
        let pEl = welcome.querySelector('p');
        pEl.classList.add('active');
    }, 1000);
    
    setTimeout(function() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        close.classList.add('active');
        console.log("-7" + scrollHeight + "px")
        wrap.style.marginBottom = "-7" + scrollHeight + "px";
        wrap.style.transition = "1s";
        setTimeout(function() {
            for(let i = 0; i < 100; i++){

                setTimeout(function() {
                    // welcome.style.top = `-${i}vh`;
                    wrap.style.top = - i - 1 +`vh`;
                    
                }, 5 * i);

            };
            // body.classList.add('');
            
            console.log(scrollHeight);
            wrap.classList.add('');
        }, 1000);
    wrap.classList.remove('none');
    }, 1000);  
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








// тест


