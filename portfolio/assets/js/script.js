$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");   
         
        }else{
            $('.navbar').removeClass("sticky");     
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");   
        }else{
            $('.scroll-up-btn').removeClass("show");   
        }
    });

    // slide-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });   

    // toggle menu/navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

// carousel    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })


});

// animation script
var typed = new Typed (".typing",{
    strings:["Developer","Frontend"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed (".typingContactMe",{
    strings:["For hire","To learn"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


// scroll animation
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay:100


});

// about
ScrollReveal().reveal('.about .max-width .title ', { delay: 400, origin: 'left'});
ScrollReveal().reveal('.about .max-width p ', { delay: 600, origin: 'left'});
ScrollReveal().reveal('.about .max-width img', { delay: 600, origin: 'left'});
ScrollReveal().reveal('.about .max-width .cv', { delay: 600, origin: 'left'});

// my projects
ScrollReveal().reveal('.projects .max-width .title ', { delay: 500, origin: 'left',interval: 200});

ScrollReveal().reveal('.contact .max-width .title ', { delay: 500, origin: 'left',interval: 400});
// contact