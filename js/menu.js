requestOptions = {
    mode: 'cors'
}

fetch(location.pathname.indexOf("newsletter") > -1 ? 'https://epanostsa.github.io/menu-1-directory-away.html' : 'https://epanostsa.github.io/menu.html', requestOptions)
    .then(async (res) => {
        $('body').prepend(await res.text())
    }).then(() => {
        defaultMenuColor = "white"
        defaultMenuColor2 = "#3b4252ff"
        setMenuToDefault = false;
       
        onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1;
        var onSignInPage = location.pathname.indexOf("sign-in") > -1;
        dontDefaultMenuColor = [
           'about',
           'newsletters',
           'assistant',
           'appointment-booked'
       ]
       
        dontDefaultMenuColorLight = [
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
       
       if (!onUnchangedMenuPage && !onHomePage && !onUnchangedMenuLightPage && !onSignInPage) {
           setMenuToDefault = true;
       }
       
       setInterval(() => {
            if (localStorage.getItem('user') != undefined) {
                $('.sign-in-tab').hide();
            } else {
                $('.profile-tab').hide()
            }
           if (setMenuToDefault == true) {
               $('.tab, .name').css('color', defaultMenuColor2)
           }
       }, 100)
       
       if (onUnchangedMenuLightPage) {
           $('.tab, .name').css('color', defaultMenuColor2)
           $('#show-panel-button').css('filter', 'invert(0%)')
       }
       
       hidePanel = function () {
           if ($(window).scrollTop() < 550 && (onHomePage || onSignInPage) ) {
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
       
       showPanel = function() {
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
       
       goToSection = function(id) {
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
       
       if (!onHomePage && !onUnchangedMenuPage && !onUnchangedMenuLightPage && !onSignInPage) {
           $('#panel').css('background', defaultMenuColor)
           $('#panel').css('box-shadow', '0px 0px 15px rgb(63, 63, 63)')
       }
       
       $(window).scroll(() => {
           if ($(window).scrollTop() < 550 && (onHomePage || onSignInPage)) {
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
    })
    .catch(() => {})