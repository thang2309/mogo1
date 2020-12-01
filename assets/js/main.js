$(window).scroll(function() {
    if ($(window).scrollTop() >= 700) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});