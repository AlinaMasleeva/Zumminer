$(document).ready(function() {
    if ( $(window).width() > 768 ) {
        setMaxSliderHeihgt('atb-slider-all');
    }

    function setMaxSliderHeihgt(sliderSelector) {
        $('.' + sliderSelector).each(function(){  
             var $columns = $('.slider-item',this);
             var maxHeight = Math.max.apply(Math, $columns.map(function(){
                 return $(this).height();
             }).get());
             $columns.height(maxHeight);
        });
    }

    $(".mining-left-button").click(function(){
	   $("#ninja-slider-prev").trigger('click');
	   return false;
	});
    $(".mining-right-button").click(function(){
       $("#ninja-slider-next").trigger('click');
       return false;
    });

    $('.slider-invest-switcher').click(function(e) {        
        e.preventDefault();
        $(this).addClass('active');
        $('.slider-cloud-switcher').removeClass('active');
        $('.slider-all-switcher').removeClass('active');
        $('#main-tab-10 .atb-slider-all, #main-tab-10 .atb-slider-cloud, #main-tab-10 .slider-arrows-cloud, #main-tab-10 .slider-arrows').addClass('hidden');
        $('#main-tab-10 .atb-slider-invest, #main-tab-10 .slider-arrows-invest').removeClass('hidden');
        setMaxSliderHeihgt('atb-slider-invest');
        $('.atb-slider-invest').slick({
              appendArrows: $('.slider-arrows-invest'),
              centerMode: true,
              infinite: true,
              slidesToShow: 3,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                  }
                }
              ]
            });
    });
    $('.slider-cloud-switcher').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.slider-invest-switcher').removeClass('active');
        $('.slider-all-switcher').removeClass('active');
        $('#main-tab-10 .atb-slider-all, #main-tab-10 .atb-slider-invest, #main-tab-10 .slider-arrows-invest, #main-tab-10 .slider-arrows').addClass('hidden');
        $('#main-tab-10 .atb-slider-cloud, #main-tab-10 .slider-arrows-cloud').removeClass('hidden');
        setMaxSliderHeihgt('atb-slider-cloud');
        $('.atb-slider-cloud').slick({
              appendArrows: $('.slider-arrows-cloud'),
              centerMode: true,
              infinite: true,
              slidesToShow: 3,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 1
                  }
                }
              ]
            });
    });
    $('.slider-all-switcher').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.slider-cloud-switcher').removeClass('active');
        $('.slider-invest-switcher').removeClass('active');
        $('#main-tab-10 .atb-slider-invest, #main-tab-10 .atb-slider-cloud, #main-tab-10 .slider-arrows-cloud, #main-tab-10 .slider-arrows-invest').addClass('hidden');
        $('#main-tab-10 .atb-slider-all, #main-tab-10 .slider-arrows').removeClass('hidden');
    });

    // Tabs in popup Profile settings

    $('#settingsProfile a.switch-tab').click(function (e) {
      var self = $(this);
      
      e.preventDefault();
      self.tab('show');

      if (self.attr("href")==="#verification") {
        $(".info-modal-dialog").removeClass("hidden");
      } else {
        $(".info-modal-dialog").addClass("hidden");
      }
    })

    // Accordion in popup Profile settings

    // var acc = document.getElementsByClassName("accordion");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].onclick = function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight){
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + "px";
    //     } 
    //   }
    // }
});