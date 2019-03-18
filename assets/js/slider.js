$(document).ready();
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        animationLoop: false,
        pausePlay: true,
        start: function(slider){
            $('body').removeClass('loading');
        }

/*
itemWidth: 210,
itemMargin: 5,
*/
});
});


/*
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});*/
