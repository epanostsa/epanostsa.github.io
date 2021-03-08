var defaultColor = "#6a7794"
var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1

function goToSection(id) {
    if (location.pathname.indexOf("index") != -1 || location.pathname == "/") {
        hidePanel()
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
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
    }
    $('#tabs').css('height', '0%')
}

function showPanel() {
    $('#panel').css('background', defaultColor)
    $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
    $('.tab').css('color', 'white')
    $('#tabs').css('background', defaultColor)
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
    if (document.body.clientWidth > 1025) {
        $('#tabs').css('height', '0%');
    }
}, 100)

if (location.pathname != "/" && location.pathname.indexOf("index") == -1) {
    $('#panel').css('background', defaultColor)
    $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
}

$(window).scroll(() => {
    if (onHomePage) {
        if ($(window).scrollTop() < 550) {
            $('#panel').css('background', 'transparent')
            $('#panel').css('box-shadow', 'none')
        } else {
            $('#panel').css('background', defaultColor)
            $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
        }
    }
})