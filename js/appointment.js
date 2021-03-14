$('#info').on('submit', (e) => {
    e.preventDefault()
    if ($('#date').val().trim().length && $('#time').val().trim().length)  {
        var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push({
            "date" : $('#date').val().trim(),
            "time" : $('#time').val().trim(),
            "doctor" : $('#doctor').val().trim() || "Pending"
        })
        localStorage.setItem("appointments", JSON.stringify(appointments))
        location.href = "./appointment-booked.html"
    } else {
        if (!$('#time').val().trim().length) {
            $('#time-error').show();
            $(window).scrollTop($('#time-error').offset().top - 200)
        } else if (!$('#date').val().trim().length) {
            $('#date-error').show();
            $(window).scrollTop($('#date-error').offset().top - 200)
        }
    }
})