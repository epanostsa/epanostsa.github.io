var margin = 250

var sectionsLeft = [
    '#appointment-description',
    '#doctor-description',
    '#newsletter',
    '#about-description',
    '#newsletter-a'
]

var sectionsRight = [
    '#bot-description',
    '#diagnosis-description'
]

var sectionsAuto = [
    '#ref-content-surround'
]

function fadeIn() {
    sectionsLeft.forEach((section) => {
        try {
            if (($(window).scrollTop() > $(section).offset().top - (window.innerHeight - margin))) {
                if ($(section).css('opacity') == 0 || $(section).css('margin-left') == '-200px') {
                    $(section).css('opacity', 1);
                    $(section).css('margin-left', '0px')
                }
            } else {
                if ($(section).css('opacity') == 1 || $(section).css('margin-left') == '0px') {
                    $(section).css('opacity', 0);
                    $(section).css('margin-left', '-200px')
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
                }
            } else {
                if ($(section).css('opacity') == 1 || $(section).css('margin-right') == '0px') {
                    $(section).css('opacity', 0);
                    $(section).css('margin-right', '-200px')
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
            } else {
                if ($(section).css('opacity') == 1) {
                    $(section).css('opacity', 0);
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
                } else {
                    if ($(this).css('opacity') == 1) {
                        $(this).css('opacity', 0);
                        $(this).css('transform', 'scale(1.1, 1.1)');
                    }
                }
            } catch {}
        })
    })

    if (($(window).scrollTop() > $('#contact').offset().top - (window.innerHeight - (margin - 100)))) {
        if ($('#contact').css('opacity') == 0 || $('#contact').css('margin-right') == '-200px') {
            $('#contact').css('opacity', 1);
            $('#contact').css('margin-right', '0px')
        }
    } else {
        if ($('#contact').css('opacity') == 1 || $('#contact').css('margin-right') == '0px') {
            $('#contact').css('opacity', 0);
            $('#contact').css('margin-right', '-200px')
        }
    }
}

$(window).scroll(() => {
    fadeIn();
})

setInterval(() => {
    fadeIn();
}, 300)