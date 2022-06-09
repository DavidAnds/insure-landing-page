const navBtn = document.querySelector('.navigation__menu-btn');
const navMb = document.querySelector('.navigation__mb');

navBtn.addEventListener('click', () => {
    navMb.classList.toggle('navigation__mb--active')
    if(navMb.classList.contains('navigation__mb--active')){
        navBtn.innerHTML = ` <img src="./images/icon-close.svg" alt="close icon menu">`
    } else {
        navBtn.innerHTML = ` <img src="./images/icon-hamburger.svg" alt="hamburger icon menu">`
    }
})