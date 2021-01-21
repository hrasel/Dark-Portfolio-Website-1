const navBtn = document.querySelector('.nav-btn');
const navBtnBurger = document.querySelector('.nav-btn-burger');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

let showMenu = false;

function fadeIn(){
  let i;
}

navBtn = addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    navBtnBurger.classList.add('open');
    navMenu.classList.add('open');
    navMenuItems.forEach(item => item.classList.add('open'));
    navMenuItems.forEach(item => item.fadeIn)

    showMenu = true;
  } else{
    navBtnBurger.classList.remove('open');
    navMenu.classList.remove('open');
    navMenuItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}