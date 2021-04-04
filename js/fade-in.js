var margin = 250
var onSmallerDevice = window.innerWidth <= 1024;

$(window).resize(() => {
    onSmallerDevice = window.innerWidth <= 1024;
})

var sectionsLeft = [
    '#appointment-description',
    '#doctor-description',
    '#newsletter',
    '#about-description',
    '#newsletter-a'
]

var sectionsRight = [
    '#bot-description',
    '#diagnosis-description',
    '#contact'
]

var sectionsAuto = [
    '#ref-content-surround',
    '#appointment-content-surround'
]

if (screen.width <= 1024) {
    sectionsLeft.forEach((element) => {
        sectionsAuto.push(element);
        $(element).css('margin-left', '0px')
        $(element).css('margin-right', '0px')
    })

    sectionsRight.forEach((element) => {
        sectionsAuto.push(element);
        $(element).css('margin-right', '0px')
        $(element).css('margin-left', '0px')
    });

    sectionsRight = [];
    sectionsLeft = [];
}

function fadeIn() {
    sectionsLeft.forEach((section) => {
        try {
            if (($(window).scrollTop() > $(section).offset().top - (window.innerHeight - margin))) {
                if ($(section).css('opacity') == 0 || $(section).css('margin-left') == '-200px') {
                    $(section).css('opacity', 1);
                    $(section).css('margin-left', '0px')
                    $(section).css('margin-right', '0px')
                }
            }
        } catch {}
    })

    sectionsRight.forEach((section) => {
        try {
            if (($(window).scrollTop() > $(section).offset().top - (window.innerHeight - margin))) {
                if ($(section).css('opacity') == 0 || $(section).css('margin-right') == '-200px') {
                    $(section).css('opacity', 1);
                    $(section).css('margin-right', '0px')
                    $(section).css('margin-left', '0px')
                }
            }
        } catch {}
    })

    sectionsAuto.forEach((section) => {
        try {
            if (($(window).scrollTop() > $(section).offset().top - (window.innerHeight - margin))) {
                if ($(section).css('opacity') == 0 || $(section).css('opacity') == 0) {
                    $(section).css('opacity', 1);
                }
            }
        } catch {}
    
        $('.doctorbox').each(function( ) {
            try {
                if (($(window).scrollTop() > $(this).offset().top - (window.innerHeight - margin))) {
                    if ($(this).css('opacity') == 0 || $(this).css('opacity') == 0) {
                        $(this).css('opacity', 1);
                        $(this).css('transform', 'scale(1, 1)');
                    }
                }
            } catch {}
        })
    })

    /*if (($(window).scrollTop() > $('#contact').offset().top - (window.innerHeight - (margin - 100)))) {
        if ($('#contact').css('opacity') == 0 || $('#contact').css('margin-right') == '-200px') {
            $('#contact').css('opacity', 1);
            $('#contact').css('margin-right', '0px')
            $('#contact').css('margin-left', '0px')
        }
    } else {
        if ($('#contact').css('opacity') == 1 || $('#contact').css('margin-right') == '0px') {
            $('#contact').css('opacity', 0);
            $('#contact').css('margin-right', '-200px')
            $('#contact').css('margin-left', '200px')
        }
    }*/
}

$(window).scroll(() => {
    fadeIn();
    if (window.scrollY > 0) {
        $('#logout-button').css('top', window.innerHeight - 70 + 'px')
    }
    else $('#logout-button').css('top', onSmallerDevice ? '250px' : '320px')
})

setInterval(() => {
    fadeIn();
}, 300)