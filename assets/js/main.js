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
        z2.style.borderBottom = "none";
        z3.style.borderBottom = "none";
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
        z1.style.borderBottom = "none";
        z3.style.borderBottom = "none";
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
        z2.style.borderBottom = "none";
        z1.style.borderBottom = "none";
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


AOS.init({
  easing: 'ease-in-out-sine',
  once :  true
});


// var wwd = document.getElementById("what-we-do__content__text1");
// var btns = wwd.getElementsByClassName("text");
// var deleteActive = wwd.getElementsByClassName("text active");
// console.log(deleteActive);


// // Cách 1

// // for(var i = 0 ; i < btns.length ; i++){
// //   btns[i].addEventListener("click" , function(){
// //     var current = document.getElementsByClassName("active");
// //     current[0].className = current[0].className.replace(" active" , "");
// //     console.log(this.className);

// //     this.className += " active";

// //     console.log(this.className);
// //   });
// // }


// // Cách 2
// var selected = document.getElementsByClassName("active");

// function myFunction(){
//   if(selected.length == 0){
//     item.className += " active"; 
//   }

//   // if(selected.className == "active"){
//   //   selected.className = "text";
//   //  }
// }
// Array.from(btns).forEach(item => {
//   item.addEventListener("click", () => {

//       if(selected.length != 0 && selected.length == 1){
//         console.log(selected.length);
//         selected[0].className = selected[0].className.replace(" active", "");
//         item.className += " active"; 
//       }
      
//       // console.log((item.className === "text active").length );
//   });
// });



// function myFunction(){
//   if(deleteActive.className === "text active")
//   {
//     console.log(deleteActive + " a");
//     deleteActive = "text";
//     console.log(deleteActive + " b");
//   }
//   else
//   {
//    console.log(deleteActive.className + " c");
//     deleteActive.className = "text";
//     console.log(deleteActive + " d");
//   }
//  }