var lasstScrollTop = 0;
const nav = document.querySelector('.header_area')
const faders = document.querySelectorAll('.fade-in');
const burger = document.querySelector('.burger');
const tabletOpenMenu = document.querySelector('.dd-trigger');
const tabletOpenMenu1 = document.querySelector('.dd-trigger1');
const menuArrow1 = document.querySelector('.arrow1');
const menuArrow2 = document.querySelector('.arrow2');
const menuArrow3 = document.querySelector('.arrow3');
const menuArrow4 = document.querySelector('.arrow4');
const tabletMenuOnOff = document.querySelector('.megamenu');
const tabletMenuOnOff1 = document.querySelector('.megamenu1');
const closeMenuTablet = document.querySelector('.cross-wrap');
const menuAppear = document.querySelector('.classy-menu');
var srollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener("scroll", function () {
    //ẩn hiện header
    var srollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;

    if (srollTop > lasstScrollTop) {
        nav.classList.add('sticky');
    }if(srollTop < 1){

        nav.classList.remove('sticky');
    }
    lasstScrollTop = srollTop;
    // console.log(srollTop);
    srollTopBtn.classList.toggle("active", this.window.scrollY > 300);
})

srollTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

burger.addEventListener('click',()=>{
    burger.classList.toggle('toggle');
    menuAppear.classList.add('menu-on');
});

tabletOpenMenu.addEventListener('click', ()=>{
    // console.log(menuArrow);
    menuArrow1.classList.toggle('click');
    menuArrow2.classList.toggle('click');
    tabletMenuOnOff.classList.toggle('open');
});

tabletOpenMenu1.addEventListener('click', ()=>{
    menuArrow3.classList.toggle('click');
    menuArrow4.classList.toggle('click');
    tabletMenuOnOff1.classList.toggle('open');
});

closeMenuTablet.addEventListener('click',()=>{
    // console.log(menuAppear);
    menuAppear.classList.remove('menu-on');
    burger.classList.toggle('toggle');
})