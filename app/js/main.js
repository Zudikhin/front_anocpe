$(document).ready(function () {
    "use strict";

    $(".header_block_burger").click(function() {
        $(this).toggleClass("active");
    });

    if($(window).width() > 1199) {
        $('#fullpage').fullpage({
            normalScrollElements: '.offering_block_wrap'
        });
        $(".offering_block_wrap").scroll(function() {
            console.log($(this).scrollTop());
            console.log($(this).innerHeight());
            console.log($(this)[0].scrollHeight);
            if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                $("#fullpage").fullpage.moveTo($(this).index() + 3);
            } else if($(this).scrollTop() == 0) {
                $("#fullpage").fullpage.moveTo($(this).index() + 1);
            }
        });
    }

});