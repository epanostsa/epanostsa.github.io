function goToSection(id) {
    if (location.pathname.indexOf("index") != -1 || location.pathname == "/") {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    } else {
        location.href = location.pathname + `/../index.html#${id}`
    }
}