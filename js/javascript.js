
window.onload = function () {
    // 여기에다가 script 코드 작성
    // var count = 0;

    // var next = document.querySelector('.next');
    // var before = document.querySelector('.before');
    // var img = document.querySelector('.slide_img');
    // var list = document.querySelector('.slide_list');

    // next.addEventListener('click', function () {

    //     if (count == 0) {

    //         count += 1;
    //         list.style.marginLeft = `-${count}00%`;
    //         list.style.transition = '0.5s';
    //         // console.log(count)
    //     } else if (count == 1) {

    //         count += 1;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count)

    //     } else if (count == 2) {
    //         count = 0;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count)

    //     }

    // });
    // before.addEventListener('click', function () {

    //     if (count == 2) {

    //         count -= 1;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count)
    //     } else if (count == 1) {

    //         count -= 1;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count)

    //     } else if (count == 0) {
    //         count = 2;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count);

    //     }

    // });

    // //  자동슬라이드 fadein으로 만들고싶음
    // setInterval(function () {


    //     if (count == 0) {

    //         count += 1;
    //         list.style.marginLeft = `-${count}00%`;
    //         list.style.transition = "0.8s";
    //         // console.log(count)
    //     } else if (count == 1) {

    //         count += 1;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count)

    //     } else if (count == 2) {
    //         count = 0;
    //         list.style.marginLeft = `-${count}00%`;
    //         // console.log(count);

    //     }
    // }, 5000)


    // class CardFlipOnScroll {
    //     constructor(wrapper, sticky) {
    //         this.wrapper = wrapper;
    //         this.sticky = sticky;
    //         this.cards = sticky.querySelectorAll('.card video');
    //         this.length = this.cards.length;

    //         this.start = 0
    //         this.end = 0
    //         this.step = 0
    //     }

    //     init() {
    //         this.start = this.wrapper.offsetTop
    //         this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight
    //         this.step = (this.end - this.start) / (this.length *1.3)
    //     }

    //     animate() {
    //         this.cards.forEach((card, i) => {
    //             const s = this.start + this.step * i
    //             const e = s + this.step * (this.length/10)

    //             if (scrollY <= s) {
    //                 card.style.marginTop = `


    //                 ${280 + -(scrollY - (e - this.step)) / this.step * 180}px
    //               `


    //             } else if (scrollY > s && scrollY <= e - this.step) {
    //                 card.style.marginTop = `


    //                 ${280 + -(scrollY - (e - this.step)) / this.step * 300}px
    //               `

    //             } else if (scrollY > e - this.step && scrollY <= e) {

    //                 card.style.marginTop = `


    //                 ${300 + -(scrollY - (e - this.step)) / this.step * 300}px
    //           `


    //             } else if (scrollY > e) {
    //                 card.style.marginTop = `0px`
    //             }
    //         })
    //     }
    // }

    // const mainContent1 = document.querySelector('.main-content-1')
    // const sticky = document.querySelector('.sticky')
    // const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
    // cardFlipOnScroll.init()

    // window.addEventListener('scroll', () => {
    //     cardFlipOnScroll.animate()
    // })


    // 메뉴바 스크롤시
    let menu = document.querySelector('header');
    let menu2 = document.querySelector('.header_wrapper');
    let menu3 = document.querySelector('.bg');
    window.addEventListener("scroll", (event) => {
        let scrollY = this.scrollY;
      

        if(scrollY >= 100){
           menu.classList.add("down");
           menu2.classList.add("down2");
           menu3.classList.add("down3");

        }else{

            menu.classList.remove("down");
            menu2.classList.remove("down2");
            menu3.classList.remove("down3");
        }
       
    });


    // 로그인 회원가입
    document.querySelector('.up').addEventListener('click',function(){


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







