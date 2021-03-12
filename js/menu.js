const requestOptions = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
    },
};

if (location.pathname.indexOf('newsletter') > -1) {
    fetch('../menu.html', requestOptions)
    .then((res) => {$('body').prepend(res.text)})
    .catch(() => {})
} else {
    fetch('./menu.html', requestOptions)
    .then((res) => {$('body').prepend(res.text)})
    .catch(() => {})
}

var defaultMenuColor = "white"
var defaultMenuColor2 = "#3b4252ff"
var setMenuToDefault = false;

var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1
var dontDefaultMenuColor = [
    'about',
    'newsletters',
    'assistant',
    'appointment-booked'
]

var dontDefaultMenuColorLight = [
    'references',
    'doctors',
    'appointment.'
]

function onPage(page) {
    return location.pathname.indexOf(page) > -1
}

var onUnchangedMenuPage = false;
dontDefaultMenuColor.forEach((p) => {
    if (onPage(p)) {
        onUnchangedMenuPage = true;
    }
})

var onUnchangedMenuLightPage = false;
dontDefaultMenuColorLight.forEach((p) => {
    if (onPage(p)) {
        onUnchangedMenuLightPage = true;
    }
})

if (!onUnchangedMenuPage && !onHomePage && !onUnchangedMenuLightPage) {
    setMenuToDefault = true;
}

if (setMenuToDefault == true) {
    $('.tab, .name').css('color', defaultMenuColor2)
}

if (onUnchangedMenuLightPage) {
    $('.tab, .name').css('color', defaultMenuColor2)
    $('#show-panel-button').css('filter', 'invert(0%)')
}

function hidePanel() {
    if ($(window).scrollTop() < 550 && onHomePage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor)
        $('#show-panel-button').css('filter', 'invert()')
    } else if ($(window).scrollTop() < 150 && onUnchangedMenuPage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor)
        $('#show-panel-button').css('filter', 'invert()')
    }
    else if ($(window).scrollTop() < 150 && onUnchangedMenuLightPage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor2)
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
    if (onHomePage) {
        hidePanel()
        $('html').scrollTop($('#' + id).offset().top);
    } else if (onPage('newsletter')) {
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

if (!onHomePage && !onUnchangedMenuPage && !onUnchangedMenuLightPage) {
    $('#panel').css('background', defaultMenuColor)
    $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
}

$(window).scroll(() => {
    if ($(window).scrollTop() < 550 && onHomePage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor)
        $('#show-panel-button').css('filter', 'invert()')
    } else if ($(window).scrollTop() < 150 && onUnchangedMenuPage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor)
        $('#show-panel-button').css('filter', 'invert()')
    } else if ($(window).scrollTop() < 150 && onUnchangedMenuLightPage) {
        $('#panel').css('background', 'transparent')
        $('#panel').css('box-shadow', 'none')
        $('.tab, .name').css('color', defaultMenuColor2)
    } else {
        $('#panel').css('background', defaultMenuColor)
        $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
        $('.tab, .name').css('color', defaultMenuColor2)
        $('#show-panel-button').css('filter', 'invert(20%)')
    }
})