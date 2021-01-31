function goToSection(id) {
    if (location.pathname.indexOf("index") != -1 || location.pathname == "/") {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    } else {
        location.href = location.pathname + `/../index.html#${id}`
    }
}

function showPanel() {
    if (document.getElementById("tabs").style.display == "none" || document.getElementById("tabs").style.display == "") {
        document.getElementById("tabs").style.display = "inline";
       var rollDown = setInterval(() => {
            if (document.getElementById("tabs").clientHeight < 150) {
                document.getElementById("tabs").style.height = document.getElementById("tabs").clientHeight + 5 + 'px';
            } else {
                clearInterval(rollDown);
            }
        }, 5);
    } else {
        var rollUp = setInterval(() => {
            if (document.getElementById("tabs").clientHeight > 0) {
                document.getElementById("tabs").style.height = document.getElementById("tabs").clientHeight - 5 + 'px';
            } else {
                document.getElementById("tabs").style.display = "none";
                clearInterval(rollUp)
            }
        }, 5);
    }
};