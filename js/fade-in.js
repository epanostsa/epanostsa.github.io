var sections = [
    '#appointment-description',
    '#bot-description',
    '#doctor-description',
    '#diagnosis-description',
    '#newsletter',
]
$(window).scroll(() => {
    sections.forEach((section) => {
        if (($(window).scrollTop() > $(section).offset().top - 450)) {
            if ($(section).css('opacity') == 0 || $(section).css('left') == '-200px') {
                $(section).css('opacity', 1);
                $(section).css('left', '0')
            }
        } else {
            if ($(section).css('opacity') == 1 || $(section).css('left') == 0) {
                $(section).css('opacity', 0);
                $(section).css('left', '-200px')
            }
        }
    })

    if (($(window).scrollTop() > $('#contact').offset().top - 550)) {
        if ($('#contact').css('opacity') == 0 || $('#contact').css('left') == '-200px') {
            $('#contact').css('opacity', 1);
            $('#contact').css('left', '0')
        }
    } else {
        if ($('#contact').css('opacity') == 1 || $('#contact').css('left') == 0) {
            $('#contact').css('opacity', 0);
            $('#contact').css('left', '-200px')
        }
    }
})