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
    text1.style.marginRight = value *3 + 'px'
    text2.style.marginLeft = value *3 + 'px'
    btn.style.marginTop = value + 'px'
    phone.style.right = value * 0.2 + 'px';
    chat.style.bottom = value * 0.25  + 'px';
    papka.style.left = value *0.17 + 'px';
    list.style.right = value * 0.05 + 'px';
    case1.style.right = value * -0.1 + 'px'
})

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 1,
    loop:true,
    spaceBetween: 100,
});
