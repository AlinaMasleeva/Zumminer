$(document).ready(function() {

    $('.referral-table td, .referral-table th').click(function() {
        $(this).toggleClass('active');
    });

    setTabHeight();

    $(window).resize(function () {
        setTabHeight();
    });

    function setTabHeight() {
        var tabSelect = $('.referral-tabs .tab-pane');
        $(window).width() > 768 ? tabSelect.css('height', $('.referral-tabs .nav-tabs').outerHeight()) : tabSelect.css('height', 'auto');
    }
 
});