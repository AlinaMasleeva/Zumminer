$(function() {
    initDonuts('donut');
});

function initDonuts(className) {
    var donuts = $('.' + className);

    for (var i = 0; i < donuts.length; i++) {
        var el = donuts[i];

        drawDonut(el);
    }
}

function drawDonut(el) {

    var options = {
        month:  el.getAttribute('data-month') || 1,
        size: el.getAttribute('data-size') || 60,
        lineWidth: el.getAttribute('data-line') || 3,
        rotate: el.getAttribute('data-rotate') || 0
    }

    var canvas = document.createElement('canvas');
    var span = document.createElement('span');
    span.textContent = options.month;
        
    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    //imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options.size - options.lineWidth) / 2;

    var drawCircle = function(color, lineWidth, month) {
            month = Math.min(Math.max(0, month || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * month, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
    }; 

    drawCircle('rgba(239, 239, 239, 0.6)', options.lineWidth, 12 / 12);
    drawCircle('#5b6cc2', options.lineWidth, options.month / 12);
}