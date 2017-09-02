$(document).ready(function() {

    createSlickAll();

    if ( $(window).width() > 768 ) {
        setMaxSliderHeihgt('atb-slider-all');
    }

    $('#recovery-modal, #login-modal').on('shown.bs.modal', function () {
      $('body').addClass('modal-open');
    });

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

    $(window).on( 'resize', createSlickInvest );
    $(window).on( 'resize', createSlickCloud );
    $(window).on( 'resize', createSlickAll );

    $('.mining-slider').contents().filter(function(){
        return (this.nodeType == 3);
    }).remove();

    $('.slider-image-info a').click(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      if($(this).hasClass('all-media')) {
        $('#ninja-slider .slider-inner ul li').show();
        $('#thumbnail-slider .inner ul li').show();
      } else if($(this).hasClass('all-video')) {
        $('#ninja-slider .slider-inner ul li:not(.video)').hide();
        $('#thumbnail-slider .inner ul li:not(.video)').hide();
        $('#ninja-slider .slider-inner ul li.video').show();
        $('#thumbnail-slider .inner ul li.video').show();
      } else if($(this).hasClass('all-photo')) {
        $('#ninja-slider .slider-inner ul li:not(.video)').show();
        $('#thumbnail-slider .inner ul li:not(.video)').show();
        $('#ninja-slider .slider-inner ul li.video').hide();
        $('#thumbnail-slider .inner ul li.video').hide();
      }
    });

    function createSlickAll() {
        $('.atb-slider-all').hasClass('slick-initialized') ? $('.atb-slider-all')[0].slick.unslick() : '';
        $('.atb-slider-all').not('.slick-initialized').slick({
          appendArrows: $('.slider-arrows'),
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
    }

    function createSlickInvest() {
        $('.atb-slider-invest').hasClass('slick-initialized') ? $('.atb-slider-invest')[0].slick.unslick() : '';
        $('.atb-slider-invest').not('.slick-initialized').slick({
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
    }

    function createSlickCloud() {
        $('.atb-slider-cloud').hasClass('slick-initialized') ? $('.atb-slider-cloud')[0].slick.unslick() : '';
        $('.atb-slider-cloud').not('.slick-initialized').slick({
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
    }

    $('.slider-invest-switcher').click(function(e) {        
        e.preventDefault();
        $(this).addClass('active');
        $('.slider-cloud-switcher').removeClass('active');
        $('.slider-all-switcher').removeClass('active');
        $('#main-tab-10 .atb-slider-all, #main-tab-10 .atb-slider-cloud, #main-tab-10 .slider-arrows-cloud, #main-tab-10 .slider-arrows').addClass('hidden');
        $('#main-tab-10 .atb-slider-invest, #main-tab-10 .slider-arrows-invest').removeClass('hidden');
        setMaxSliderHeihgt('atb-slider-invest');
        createSlickInvest();
        createSlickAll();
        createSlickCloud();
        
    });
    $('.slider-cloud-switcher').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.slider-invest-switcher').removeClass('active');
        $('.slider-all-switcher').removeClass('active');
        $('#main-tab-10 .atb-slider-all, #main-tab-10 .atb-slider-invest, #main-tab-10 .slider-arrows-invest, #main-tab-10 .slider-arrows').addClass('hidden');
        $('#main-tab-10 .atb-slider-cloud, #main-tab-10 .slider-arrows-cloud').removeClass('hidden');
        setMaxSliderHeihgt('atb-slider-cloud');
        createSlickInvest();
        createSlickAll();
        createSlickCloud();

    });
    $('.slider-all-switcher').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.slider-cloud-switcher').removeClass('active');
        $('.slider-invest-switcher').removeClass('active');
        $('#main-tab-10 .atb-slider-invest, #main-tab-10 .atb-slider-cloud, #main-tab-10 .slider-arrows-cloud, #main-tab-10 .slider-arrows-invest').addClass('hidden');
        $('#main-tab-10 .atb-slider-all, #main-tab-10 .slider-arrows').removeClass('hidden');
        createSlickInvest();
        createSlickAll();
        createSlickCloud();
    });

    // Alina's code for switchers and tabs in Profile settings Popup

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
});