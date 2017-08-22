$(document).ready(function() {
    if ( $(window).width() > 768 ) {
        $('.atb-slider').each(function(){  
             var $columns = $('.slider-item',this);
             var maxHeight = Math.max.apply(Math, $columns.map(function(){
                 return $(this).height();
             }).get());
             $columns.height(maxHeight);
        });
    }
});