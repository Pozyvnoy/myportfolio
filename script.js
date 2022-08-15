let stars = document.getElementById("stars")
let mntbhnd = document.getElementById("mountbeh")
let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let btn = document.getElementById("header_button")
let phone = document.getElementById("phone")
let list = document.getElementById("list")
let papka = document.getElementById("papka")
let case1 = document.getElementById("case")
let chat = document.getElementById("chat")
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    mntbhnd.style.marginTop = value * 0.25 + 'px'
    stars.style.left = value * 0.25 + 'px';
    text1.style.marginRight = value *2 + 'px'
    text2.style.marginLeft = value *2 + 'px'
    btn.style.marginTop = value + 'px'
    phone.style.left = value * 0.25 + 'px';
    list.style.left = value + 'px';
    chat.style.left = value * 0.25 + 'px';
    papka.style.left = value + 'px';
    case1.style.marginRight = value + 'px'
})

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 1,
    loop:true,
    spaceBetween: 60,
});
