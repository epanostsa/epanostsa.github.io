for (var i = 7; i < 12; i++) {
    $('#time').append(`<option value="${i}:00 A.M.">${i}:00 A.M.</option>`)
    $('#time').append(`<option value="${i}:30 A.M.">${i}:30 A.M.</option>`)
}

$('#time').append(`<option value="12:00 PM">12:00 P.M.</option>`)
$('#time').append(`<option value="12:30 PM">12:30 P.M.</option>`)

for (var i = 1; i < 12; i++) {
    $('#time').append(`<option value="${i}:00 P.M.">${i}:00 P.M.</option>`)
    $('#time').append(`<option value="${i}:30 P.M.">${i}:30 P.M.</option>`)
}

var url = new URL(document.URL).searchParams
var doctor = url.get("doctor")

var doctors = [
    "Greg Johnson (Family Physician)",
    "Anna Fielder (Family Physician)",
    "Katie Hall (Pediatrician)",
    "Bobert Robert (Psychiatrist)",
    "Sila Ramsey (Dermatologist)",
    "Donald Tooth (Neurologist)",
    "Ann Waffle (Cardiologist)",
    "Donald McChicken (General Surgeon)"
]

if (doctor) doctors.push(doctor);
doctors.reverse()

doctors.forEach((doctor) => {
    $('#doctor').append(`<option value="${doctor}">${doctor}</option>`)
})

$('#time').append(`<option value="12:00 A.M.">12:00 A.M.</option>`)

$('#info').on('submit', (e) => {
    e.preventDefault()
    if ($('#date').val().trim().length && $('#time').val().trim().length)  {
        var appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        var date = new Date($('#date').val().trim() + " EST");
        appointments.push({
            "date" : date.toLocaleString('default', {month: 'long', day: 'numeric', year: 'numeric'}),
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