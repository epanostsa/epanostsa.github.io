var user = localStorage.getItem("user")
var onSmallerDevice = window.innerWidth <= 1024;

if (!user) {
    location.href = "./sign-in.html"
}

user = user.length > 18 ? user.substring(0, 17) : user;

$('#titletitle').html(`Hello, ${user}`)

var appointments = JSON.parse(localStorage.getItem("appointments"))
try {
    appointments.forEach((appointment, i) => {
        $('#appointment-dashboard').append(`<div class="appointment" id="${i}"> <p class="appointment-date"><img class="icon" style="background-color: white; border-radius: 30px;" src="images/appointment-booked-icon.png" height="30">${appointments[i]["date"]}</p> Time: <span id="time">${appointments[i]["time"]}</span><br> Doctor: <span id="doctor">${appointments[i]["doctor"].substring(0, appointments[i]["doctor"].indexOf("(") - 1)}</span><br> Meeting link: <span>Pending</span><br><button class="cancel-appointment-button" index="${i}">Cancel</button></div>`)
    });
} catch {
    $('#appointment-dashboard').css('text-align', 'center')
    $('#appointment-dashboard').css('padding-top', onSmallerDevice ? '30px' : '40px')
    $('#appointment-dashboard').html("No appointments yet. Book one <a href='./appointment.html'>here</a>.")
}

var cancel = function () {
    $('.cancel-appointment-button').on('click', function() {
        var index = parseInt($(this).attr('index'));
        $(`#${index}`).remove();
        appointments.splice(index, 1);
        localStorage.setItem('appointments', JSON.stringify(appointments))
        if (!appointments.length) {
            localStorage.removeItem("appointments")
            $('#appointment-dashboard').css('text-align', 'center')
            $('#appointment-dashboard').css('padding-top', onSmallerDevice ? '30px' : '40px')
            $('#appointment-dashboard').html("No appointments yet. Book one <a href='./appointment.html'>here</a>.")
        } else {
            $('#appointment-dashboard').html("");
            appointments.forEach((appointment, i) => {
                $('#appointment-dashboard').append(`<div class="appointment" id="${i}"> <p class="appointment-date"><img class="icon" style="background-color: white; border-radius: 30px;" src="images/appointment-booked-icon.png" height="30">${appointments[i]["date"]}</p> Time: <span id="time">${appointments[i]["time"]}</span><br> Doctor: <span id="doctor">${appointments[i]["doctor"].substring(0, appointments[i]["doctor"].indexOf("(") > -1 ? appointments[i]["doctor"].indexOf("(") - 1 : appointments[i]["doctor"].length - 1)}</span><br> Meeting link: <span>Pending</span><br><button class="cancel-appointment-button" index="${i}">Cancel</button></div>`)
            });
        }
        cancel()
    })
}

cancel()

$('#logout-button').on('click', () => {
    localStorage.removeItem("user");
    location.href = "./sign-in.html"
})