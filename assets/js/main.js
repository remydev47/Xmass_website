/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'), // Corrected ID
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click each navlink, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-christmas')

const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is Greater tha 50 viewport, add the scroll-header class to the Header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)