$(document).ready(function () {
    "use strict";

    $(".header_block_burger").click(function() {
        $(this).toggleClass("active");
    });

    // if($(window).width() > 1199) {
    //     $(".offering_block_wrap_scroll").scroll(function() {
    //         if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    //             $("#fullpage").fullpage.moveTo($(this).index() + 2);
    //         } else if($(this).scrollTop() == 0) {
    //             $("#fullpage").fullpage.moveTo($(this).index() + 0);
    //         }
    //     });
    //     $(".project_block_wrap").scroll(function() {
    //         if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    //             $("#fullpage").fullpage.moveTo($(this).index() + 4);
    //         } else if($(this).scrollTop() == 0) {
    //             $("#fullpage").fullpage.moveTo($(this).index() + 2);
    //         }
    //     });
    // }

    if($(window).width() > 1199) {
        $(".offering_block_wrap_scroll").mCustomScrollbar({
            callbacks:{
                onScroll:function() {
                    var scroll = this.mcs.topPct;
                    if(scroll == 0) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 0);
                    } else if(scroll == 100) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 2);
                    }
                }
            }
        });
        $(".project_block_wrap").mCustomScrollbar({
            callbacks:{
                onScroll:function() {
                    var scroll = this.mcs.topPct;
                    if(scroll == 0) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 2);
                    } else if(scroll == 100) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 4);
                    }
                }
            }
        });
    }

    $(".geography_block_map_dot").click(function() {
        if($(window).width() < 1200) {
            $(".geography_block_map_dot").removeClass("active");
            $(this).addClass("active");
            var attr = $(this).attr("data-target");
            $(".geography_block_info_item").removeClass('active');
            $(`#${attr}`).addClass("active");
        }
    });

    $(".geography_block_map_dot").hover(function() {
        if($(window).width() > 1200) {
            $(".geography_block_map_dot").removeClass("active");
            $(this).addClass("active");
            var attr = $(this).attr("data-target");
            $(".geography_block_info_item").removeClass('active');
            $(`#${attr}`).addClass("active");
        }
    });

    $(".modal_back").click(function() {
        $(this).removeClass("active");
        $(".modal_info").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });

    $(".modal_info_close").click(function() {
        $(".modal_back").removeClass("active");
        $(".modal_info").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });

    $(".offering_block_wrap_list_item").click(function() {
        $(".modal_info").removeClass("active");
        $(".modal_back").addClass("active");
        var attr = $(this).attr("data-target");
        $(`#${attr}`).addClass("active");
        $("body").addClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
    });

    if($(window).width() > 1200) {
        $('#fullpage').fullpage({
            normalScrollElements: '.offering_block_wrap'
        });
    } else {
        $('#fullpage').fullpage();
    }

});