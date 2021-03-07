var sections = [
    '#appointment-description',
    '#bot-description',
    '#doctor-description',
    '#diagnosis-description',
    '#newsletter',
    '#contact'
]
$(window).scroll(() => {
    sections.forEach((section) => {
        if ($(window).scrollTop() > $(section).offset().top - 300) {
            $(section).css('opacity', 1);
        } else {
            $(section).css('opacity', 0);
        }
    })
})