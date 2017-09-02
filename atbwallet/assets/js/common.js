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

$('#registerModal, #loginModal, #recoveryModal, #recoveryModal-2').on('hidden.bs.modal', function () {
    $.scrollify.enable();
});

$('.registration, .login, .forgot-link, .recovery-button, .registration-a').click(function() {
  $.scrollify.disable();
});

$('#recoveryModal, #recoveryModal-2, #loginModalSuccess').on('shown.bs.modal', function () {
    $.scrollify.disable();
});

$('.start-button').click(function(e) {
	e.preventDefault();
});

if ( $(window).width() >= 768 && !detectmob()) {
    $.scrollify({
        section : ".main-tabs",
        scrollSpeed: 1000,
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