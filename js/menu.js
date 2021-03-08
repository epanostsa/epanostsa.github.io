var defaultMenuColor = "white"
var defaultMenuColor2 = "#3b4252ff"

var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1

function hidePanel() {
    if ($(window).scrollTop() < 550 && onHomePage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor)
        $('#show-panel-button').css('filter', 'invert()')
    }
    $('#tabs').css('height', '0%')
    $('body, html').css('overflow-y', 'scroll')
}

function showPanel() {
    $('#panel').css('background', defaultMenuColor)
    $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
    $('#tabs').css('background', defaultMenuColor)
    $('.tab, .name').css('color', defaultMenuColor2)
    $('#show-panel-button').css('filter', 'invert(0%)')
    if ($('#tabs').height() == 0) {
        $('#tabs').css('height', '100%')
        $('body, html').css('overflow-y', 'hidden')
    } else {
        hidePanel()
    }
};

function goToSection(id) {
    if (location.pathname.indexOf("index") != -1 || location.pathname == "/") {
        hidePanel()
        $('html').scrollTop($('#' + id).offset().top);
    } else if (location.pathname.indexOf("newsletter") != -1) {
        if (location.pathname.indexOf("github") == -1) location.href = location.pathname + `/../../#${id}`;
        else location.href = location.pathname + `/../../index.html#${id}`;
    } else {
        if (location.pathname.indexOf("github") == -1) location.href = location.pathname + `/../../#${id}`;
        else location.href = location.pathname + `/../index.html#${id}`;
    }
}

document.addEventListener('click', (event) => {
    if (document.getElementById("tabs").style.height != '0px') {
        hidePanel();
    }
})

setInterval(() => {
    if (document.body.clientWidth > 1025 && $('#tabs').css('height') != '0%') {
        $('#tabs').css('height', '0%');
    }
}, 100)

if (location.pathname != "/" && location.pathname.indexOf("index") == -1) {
    $('#panel').css('background', defaultMenuColor)
    $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
}

if (!onHomePage) {
    $('.tab, .name').css('color', defaultMenuColor2)
}

$(window).scroll(() => {
    if ($(window).scrollTop() < 550 && onHomePage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor)
        $('#show-panel-button').css('filter', 'invert()')
    } else {
        $('#panel').css('background', defaultMenuColor)
        $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
        $('.tab, .name').css('color', defaultMenuColor2)
        $('#show-panel-button').css('filter', 'invert(20%)')
    }
})

$(".tab").on({
    mouseenter: () => {
        $(this).css('color', 'white')
    },
    mouseleave: () => {
        if ($(window).scrollTop() > 550) {
            $(this).css('color', defaultMenuColor2)
        }
    }
});