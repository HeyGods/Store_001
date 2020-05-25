// function navFun() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// var trigger = $('.language_selector');
// var list = $('.languages');

// trigger.click(function () {
//     trigger.toggleClass('active');
//     list.slideToggle(200);
// });

// // this is optional to close the list while the new page is loading
// list.click(function () {
//     trigger.click();
// });


const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === lastClone.id) {
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();



// Popup
$('.trigger-popup').click(function () {
    var $id_popup = $(this).attr('data-popup');
    // console.log($id_popup);
    $('.' + $id_popup).toggleClass('active');
    $('body').addClass('no-scroll');
});
$('.popup .overlay').click(function () {
    $('.popup').removeClass('active');
    $('body').removeClass('no-scroll');
});
// $('.close-popup').click(function () {
//     $(this).parents('.popup').removeClass('active');
//     $('body').removeClass('no-scroll');
// });

// $(document).ready(function () {
//     $("#change_langgue").hover(function () {
//         $(this).css("visibility", "visible");
//     }, function () {
//         $(this).css("visibility", "hidden");
//     });
// });


// show list ul_show_menu
$('.check_show_menu').click(function (event) {
    $(this).next('.ul_show_menu').toggle();
});

// change transform
$('#menu_page').click(function () {
    // $("#trans").style.transform = "rotate(90deg)";
    if (document.getElementById("trans").style.transform != "rotate(90deg)") {
        document.getElementById("trans").style.transform = "rotate(90deg)";
    } else
        document.getElementById("trans").style.transform = "none";
});
