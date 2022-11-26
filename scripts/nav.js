const burger = document.querySelector('#togglenav');
const nav = document.querySelector('#nav-link-id');

const navSlide = () => {
    burger.addEventListener('click', () =>  {
        //toggle nav
        nav.classList.toggle('nav-active');
    });

}

navSlide();