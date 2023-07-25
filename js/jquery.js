jQuery(document).ready(function () {


    $('.content4_box_slide a:gt(0)').hide();
    setInterval(function () {

        $('.content4_box_slide a:first-child').fadeOut(500)
            .next('a')
            .fadeIn(500)
            .end()
            .appendTo('.content4_box_slide')

    }, 2500);

    $('.main_menu_list').mouseover(function () {



        $('.sub_menu').stop().slideDown(400);
        $('.bg').stop().slideDown(500);
    }).mouseout(function () {

        $('.sub_menu').stop().slideUp(400);
        $('.bg').stop().slideUp(500);
    });

});