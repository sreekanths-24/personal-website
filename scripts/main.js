//navbar toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click', () =>  {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) =>{
            if(link.style.animation ){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`; 

            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });

}

//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//typed
var typed = new Typed('.typing', {
    strings: [
        'am Sreekanth S.', 
        'am a Front End Developer.', 
        'am a Computer Science Engineer.',
        'love learning new things.',
        'am into Web Development.',
        'am into Artificial Intelligence.',
        'am into Cloud Computing.'
    ],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: "_"
  });

// vanilla tilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    scale: 2
  });

//parallax effect
// const parallax = document.getElementById("parallax")

// window.addEventListener("scroll", function(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.9 + "px";
// })

navSlide();