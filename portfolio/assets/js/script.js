$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");   
               console.log("hola")
        }else{
            $('.navbar').removeClass("sticky");     
        }
    });

    // toggle menu/navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

});

// animation script
var typed = new Typed (".typing",{
    strings:["Developer","Frontend"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})