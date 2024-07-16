$(function(){
    $(".main > li, .sub_bg").hover(function(){
        $(".sub_bg, .sub").stop().slideDown();
    },function(){
        $(".sub_bg, .sub").stop().slideUp();
    })

    $(".move").slick({
        autoplay:true,
        dots:true,
        arrows:false,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        fade:true,
    })
})