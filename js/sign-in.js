$('#sign-in-form').on('submit', (e) => {
    e.preventDefault()
    if ($('#password').val() != "" && $('#username').val() != "") {
        var username = $('#username').val()
        username = username.split('@')[0]
        localStorage.setItem("user", username)
        $('#sign-in-surround').css('opacity', 0)
        setTimeout(() => {
            location.href = "./profile.html"
        }, 600);
    } else {
        $('#error').css('display', 'block')
    }
})