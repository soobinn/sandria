
window.onload = function () {

    // 메뉴바 스크롤시
    let menu = document.querySelector('header');
    let menu2 = document.querySelector('.header_wrapper');
    let menu3 = document.querySelector('.bg');
    window.addEventListener("scroll", (event) => {
        let scrollY = this.scrollY;


        if (scrollY >= 100) {
            menu.classList.add("down");
            menu2.classList.add("down2");
            menu3.classList.add("down3");

        } else {

            menu.classList.remove("down");
            menu2.classList.remove("down2");
            menu3.classList.remove("down3");
        }

    });


    // 로그인 회원가입
    document.querySelector('.up').addEventListener('click', function () {


        document.querySelector('.login').classList.toggle('opacity');
        document.querySelector('.sign').classList.toggle('opacity');


    });


    var slides = document.querySelector('.main_slide');
    var slide = document.querySelectorAll('.main_slide_list');
    var crrentIdx = 0;
    var slideCount = slide.length;
    var preBtn = document.querySelector('.slide_btn:nth-child(1)');
    var slideWidth = 100;
    var slideMargin = 0;
    var nextBtn = document.querySelector('.slide_btn:nth-child(2)');

    makeClone();

    function makeClone() {
        for (var i = 0; i < slideCount; i++) {
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
        };

        for (var i = slideCount - 1; i >= 0; i--) {
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        };

        updateWidth();
        setInitialPos();
        setTimeout(function () {


            slides.classList.add('animate');
        }, 100);
    };

    function updateWidth() {

        var currentSlide = document.querySelectorAll('.main_slide_list');
        var newSlideCount = currentSlide.length;
        var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + '%';
        slides.style.width = newWidth;
    };

    function setInitialPos() {

        var initialTranlateValue = -(slideWidth + slideMargin) * slideCount;
        // slides.style.transform = `translate(${initialTranlateValue}%)`

    };


    nextBtn.addEventListener('click', function () {
        moveSlide(crrentIdx + 1);
    });
    preBtn.addEventListener('click', function () {
        moveSlide(crrentIdx - 1);

    });
    function moveSlide(num) {
        slides.style.left = -num * (slideWidth + slideMargin) + '%';
        crrentIdx = num;
        if (crrentIdx == slideCount || crrentIdx == -slideCount) {
            setTimeout(function () {
                slides.classList.remove('animate');
                slides.style.left = '0px';
                crrentIdx = 0;
            }, 500);
            setTimeout(function () {
                slides.classList.add('animate');
            }, 600);
        };

    };

    // 메인슬라이드 setInterval
    let mainSlideInterval = setInterval(function () {
        moveSlide(crrentIdx + 1);
    }, 3000);

    let toggle = false;

    document.querySelector('.slide_toggle').addEventListener('click', function () {

        if (toggle == true) {
            mainSlideInterval = setInterval(function () {
                moveSlide(crrentIdx + 1);
            }, 3000);
            document.querySelector('.toggle_img').src = "imgs/play.png";
            toggle = !toggle;
        } else if (toggle == false) {
            clearInterval(mainSlideInterval)
            toggle = !toggle;
            document.querySelector('.toggle_img').src = "imgs/pause.png";
        }

    });

};







