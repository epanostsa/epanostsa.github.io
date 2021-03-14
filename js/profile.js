var user = localStorage.getItem("user")

if (!user) {
    location.href = "./index.html"
}

user = user.length > 18 ? user.substring(0, 17) : user;

$('#titletitle').html(`Hello, ${user}`)

var appointments = JSON.parse(localStorage.getItem("appointments"))
try {
    appointments.forEach((appointment, i) => {
        $('#appointment-dashboard').append(`<div class="appointment"> <p class="appointment-date"><img class="icon" style="background-color: white; border-radius: 30px;" src="images/appointment-booked-icon.png" height="30">${appointments[i]["date"]}</p> Time: <span id="time">${appointments[i]["time"]}</span><br> Doctor: <span id="doctor">${appointments[i]["doctor"]}</span><br> Meeting link: <span>Pending</span><br> </div>`)
    });
} catch {
    $('#appointment-dashboard').css('padding', '20px')
    $('#appointment-dashboard').html("No appointments yet. Book one <a href='./appointment.html'>here</a>.")
}

$('#logout-button').on('click', () => {
    localStorage.removeItem("user");
    location.href = "./sign-in.html"
})