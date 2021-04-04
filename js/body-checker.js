function checkSymptoms() {
    var symptoms = [];
    if ($('#head-front').prop('checked') == true) {
        symptoms.push("Head pain (front)")
    }

    if ($('#left-arm-front').prop('checked') == true) {
        symptoms.push("Left arm pain (front)")
    }

    if ($('#right-arm-front').prop('checked') == true) {
        symptoms.push("Right arm pain (front)")
    }

    if ($('#chest').prop('checked') == true) {
        symptoms.push("Chest pain")
    }

    if ($('#back').prop('checked') == true) {
        symptoms.push("Back pain")
    }

    if ($('#right-leg-front').prop('checked') == true) {
        symptoms.push("Right leg pain (front)")
    }

    if ($('#left-leg-front').prop('checked') == true) {
        symptoms.push("Left leg pain (front)")
    }

    if ($('#right-leg-back').prop('checked') == true) {
        symptoms.push("Right leg pain (back)")
    }

    if ($('#left-leg-back').prop('checked') == true) {
        symptoms.push("Left leg pain (back)")
    }

    if ($('#head-back').prop('checked') == true) {
        symptoms.push("Head pain (back)")
    }

    $('#summary').val((symptoms.join(', ') || "No symptoms") + " (Verified by Symptom Checker ✅)")
    document.getElementById('summary').select();
    document.execCommand('copy');
    $('#copied').css('height', '140px')
    $(window).scrollTop($('#submit-button').offset().top - 150)
}

function clear() {
    $('input').prop('checked', false)
    $('#summary').val('');
    $('#copied').css('height', '0px')
}