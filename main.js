var scrollToTop = document.querySelector('.scroll-to-top');

//Header-Scroll
window.onscroll = function () {

    var headerPosition = document.querySelector('.header');

    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        headerPosition.style.backgroundColor = '#142333';
        scrollToTop.style.opacity = '1';
    }
    else {
        headerPosition.style.backgroundColor = 'transparent';
        scrollToTop.style.opacity = '0';
    }
};

function goToTop() {
    $('html, body').animate({scrollTop:0});
}

//Fade in
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
    if(scroll >= 200) {
        $(".txt-2").addClass("show-item");
    }

    if (scroll >= 500 ) {
        $(".txt-3").addClass("show-item");
    }

    if (scroll >= 900 ) {
        $(".box-figure").addClass("show-item");
    }

    if (scroll >= 1700 ) {
        $(".txt-4").addClass("show-item");
    }

    if (scroll >= 1990 ) {
        $(".title").addClass("show-item");
    }

    if (scroll >= 2200 ) {
        $(".txt-5").addClass("show-item");
    }

    if (scroll >= 2400 ) {
        $(".txt-6").addClass("show-item");
    }

    if (scroll >= 2600 ) {
        $(".txt-7").addClass("show-item");
    }

    if (scroll >= 2800 ) {
        $(".txt-8").addClass("show-item");
    }

    if (scroll >= 2800 ) {
        $(".box-right").addClass("show-item");
    }

    if (scroll >= 3200 ) {
        $(".txt-9").addClass("show-item");
    }

    if (scroll >= 3500 ) {
        $(".txt-10").addClass("show-item");
    }

    if (scroll >= 3600 ) {
        $(".txt-11").addClass("show-item");
    }

    if (scroll >= 4000 ) {
        $(".box-right").addClass("show-item");
    }
});

//Scroll-spy

$(document).ready(function () {
    $(".nav-bar .home").on("click", function (e) {
        $('html, boy').animate({scrollTop: 0}, 200);
    });

    $(".nav-bar .service-link").on("click", function (e) {
        $('html, boy').animate({scrollTop: 900}, 200);
    });

    $(".nav-bar .social-link").on("click", function (e) {
        $('html, boy').animate({scrollTop: 1600}, 200);
    });

    $(".nav-bar .client-link").on("click", function (e) {
        $('html, boy').animate({scrollTop: 2300}, 200);
    });
});