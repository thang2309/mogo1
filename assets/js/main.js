$(document).ready(function() {
    $('.use-slick-01').slick({
        dots: true,
    });
});
var x1 = document.getElementById("text-01");
var y1 = document.getElementById("icon-tranform-01");
var z1 = document.getElementById("text__title-01");

var x2 = document.getElementById("text-02");
var y2 = document.getElementById("icon-tranform-02");
var z2 = document.getElementById("text__title-02");


var x3 = document.getElementById("text-03");
var y3 = document.getElementById("icon-tranform-03");
var z3 = document.getElementById("text__title-03");


function myFunction1() {
    if (x1.style.display === "block") {
        y1.style.transform = "rotate(0deg)";
        x1.style.display = "none";
        z1.style.borderBottom = "none";
    } else {
        x1.style.display = "block";
        y1.style.transform = "rotate(180deg)";
        z1.style.borderBottom = "1px solid #cccccc";
        x2.style.display = "none";
        x3.style.display = "none";
        y2.style.transform = "rotate(0deg)";
        y3.style.transform = "rotate(0deg)";
    }
}

function myFunction2() {
    if (x2.style.display === "block") {
        x2.style.display = "none";
        y2.style.transform = "rotate(0deg)";
        z2.style.borderBottom = "none";

    } else {
        x2.style.display = "block";
        y2.style.transform = "rotate(180deg)";
        z2.style.borderBottom = "1px solid #cccccc";
        x1.style.display = "none";
        y1.style.transform = "rotate(0deg)";
        x3.style.display = "none";
        y3.style.transform = "rotate(0deg)";
    }
}

function myFunction3() {
    if (x3.style.display === "block") {
        x3.style.display = "none";
        y3.style.transform = "rotate(0deg)";
        z3.style.borderBottom = "none";

    } else {
        z3.style.borderBottom = "1px solid #cccccc";
        x3.style.display = "block";
        y3.style.transform = "rotate(180deg)";
        x1.style.display = "none";
        y1.style.transform = "rotate(0deg)";
        x2.style.display = "none";
        y2.style.transform = "rotate(0deg)";
    }
}
$(document).ready(function() {
    $('.use-slick').slick({
        dots: true,
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 700) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
    });
});


// $('body').imagesLoaded(function() {
//     $('div.work').GridHorizontal({
//         item: '.item',
//         minWidth: 380,
//         maxRowHeight: 310,
//         gutter: -1,
//     })
// });