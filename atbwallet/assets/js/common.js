$(document).ready(function() {

setTabHeight();

$(window).resize(function() {
	setTabHeight();
});

function setTabHeight() {
	$('.tab-2-links').css('height', $('#main-tab-2').outerHeight());
}

$('.language-left').click(function(e) {
	e.preventDefault();
});

$('.registration, .login').click(function() {
	$.scrollify.disable();
});

$('#registerModal, #loginModal').on('hidden.bs.modal', function () {
    $.scrollify.enable();
})

$('.start-button').click(function(e) {
	e.preventDefault();
});

if ( $(window).width() >= 768 && !detectmob()) {
    $.scrollify({
        section : ".main-tabs",
        scrollSpeed: 500,
    });
}

function detectmob() { 
 if( navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
 
});