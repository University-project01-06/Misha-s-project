$(function(){
    $('.btn').click(function(){
        $('#exampleModal').arcticmodal();
    });
    $(".down-angel").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $(".up-angel").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 2500);
    });
    $(".arrow__down").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $('.slider').slick({
        speed:500,
        dots:true,
        waitForAnimate:false,
        infinite:true,
        autoplay:false,
        draggable:false,
        swipe:true,
    });
    $(".arrow-alt").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});
$(function () {
    $(window).scroll(function() {
	    $('.heading-second-section').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("flipInX");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.title__wrapper').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("bounceIn");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.title__wrapper__line').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("bounceIn");
	        }
	    });
    });
	$(window).scroll(function() {
	    $('#posibilities .native__right').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRightBig");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('#posibilities .native__left').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.developer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
    });
    $(document).ready(function($) {
        $('.btn').click(function() {
            $('.popup-fade').fadeIn();
            return false;
        });	
        $('.btn').click(function() {
            $('.popup-fade').fadeIn();
            return false;
        });	
        
        $('.popup-close').click(function() {
            $(this).parents('.popup-fade').fadeOut();
            return false;
        });		
     
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').fadeOut();
            }
        });
        
        $('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();					
            }
        });
    });
})
let popup = document.querySelector('.menu');
let open = document.querySelector('.check');
menu.style.display = 'none'
open.addEventListener("click",function() {
    if(popup.style.display == 'none')  popup.style.display = 'block';
    else popup.style.display = 'none'

  });

