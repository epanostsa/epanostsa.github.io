var defaultMenuColor = "white"
var defaultMenuColor2 = "#3b4252ff"

var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1

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

function hidePanel() {
    if ($(window).scrollTop() < 550 && onHomePage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab').css('color', defaultMenuColor)
    }
    $('#tabs').css('height', '0%')
}

function showPanel() {
    $('#panel').css('background', defaultMenuColor)
    $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
    $('.tab').css('color', 'white')
    $('#tabs').css('background', defaultMenuColor)
    $('.tab').css('color', defaultMenuColor2)
    if ($('#tabs').height() == 0) {
        $('#tabs').css('height', '100%')
    } else {
        hidePanel();
    }
};

document.addEventListener('click', (event) => {
    if (document.getElementById("tabs").style.visibility == "visible") {
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