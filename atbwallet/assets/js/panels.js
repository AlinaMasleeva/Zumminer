$(document).ready(function() {

    $('.panel-title a').click(function() {
        var that = $(this);
        that.hasClass('collapsed') ? that.closest('.panel-default').siblings().hide() : that.closest('.panel-default').siblings().show();
    });

    $('.panel-body .close-accordion').click(function() {
        $(this).closest('.panel-default').siblings().show();
    });

    if ($(window).width() > 1200) {
        $('.nav-tabs').hover(function() {
            openNav();
        });
        $('.left-menu').mouseleave(function() {
            closeNav();
        });
    }    

    function openNav() {
        $('.left-menu').addClass('active');
    }

    function closeNav() {
        $('.left-menu').removeClass('active');
    }
 
});