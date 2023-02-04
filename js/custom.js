$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            dots: true,
            nav: false,
            loop: true
        }
    }
})


$('.yoga-slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 3,
    dots: false,
    nav: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        600: {
            items: 1,
            dots: true,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})


$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

    
//menu
(() =>{

const openNavMenu = document.querySelector(".open-nav-menu"),
closeNavMenu = document.querySelector(".close-nav-menu"),
navMenu = document.querySelector(".nav-menu"),
menuOverlay = document.querySelector(".menu-overlay"),
mediaSize = 991;

openNavMenu.addEventListener("click", toggleNav);
closeNavMenu.addEventListener("click", toggleNav);

menuOverlay.addEventListener("click", toggleNav);

function toggleNav() {
navMenu.classList.toggle("open");
menuOverlay.classList.toggle("active");
document.body.classList.toggle("hidden-scrolling");
}

function resizeFix(){
 // if navMenu is open ,close it
 if(navMenu.classList.contains("open")){
    toggleNav();
 }
}

window.addEventListener("resize", function(){
 if(this.innerWidth > mediaSize){
    resizeFix();
 }
});

})();




  