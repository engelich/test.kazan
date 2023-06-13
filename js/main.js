



document.querySelector('.header__burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.header__mobil').classList.toggle('mobiles')
});




const menuBtn = document.querySelector('.header__button');
const menuMobile = document.querySelector('.pop__up');

menuBtn.addEventListener('click',()=>{
  menuMobile.classList.toggle('active');

});
const menuBt = document.querySelector('.pop__up-close');
const menuMobil = document.querySelector('.pop__up');

menuBt.addEventListener('click',()=>{
  menuMobil.classList.toggle('active');
  
});
const menuBtnMobil = document.querySelector('.header__button-mobil');
const menuMobileMobil = document.querySelector('.pop__up');

menuBtnMobil.addEventListener('click',()=>{
  menuMobileMobil.classList.toggle('active');

});

const promoBtn = document.querySelector('.promo__btn');
const promoMobile = document.querySelector('.pop__up');

promoBtn.addEventListener('click',()=>{
  promoMobile.classList.toggle('active');

});
const catalogBtn = document.querySelector('.catalog__btn');
const catalogMobile = document.querySelector('.pop__up');

catalogBtn.addEventListener('click',()=>{
  catalogMobile.classList.toggle('active');

});








