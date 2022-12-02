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

//scroll reveal
ScrollReveal().reveal(".cards",{
    interval: 200,
    easing: 'ease-out',
    scale: 1.2,
    reset: true ,
    duration: 600,
    desktop: false
});

ScrollReveal().reveal(".ed-card",{
    interval: 200,
    easing: 'ease',
    origin:'bottom',
    distance:'80px',
    reset: true,
    duration: 600,
    desktop: false
});

