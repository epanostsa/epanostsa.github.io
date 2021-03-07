var sections = [
    '#appointment-description',
    '#bot-description',
    '#doctor-description',
    '#diagnosis-description',
    '#newsletter',
]
$(window).scroll(() => {
    sections.forEach((section) => {
        if ($(window).scrollTop() > $(section).offset().top - 450) {
            $(section).css('opacity', 1);
            $(section).css('left', '0')
        } else {
            $(section).css('opacity', 0);
            $(section).css('left', '-200px')
        }
    })
    if ($(window).scrollTop() > $('#contact').offset().top - 550) {
        $('#contact').css('opacity', 1);
        $('#contact').css('left', '0')
    } else {
        $('#contact').css('opacity', 0);
        $('#contact').css('left', '-200px')
    }
})