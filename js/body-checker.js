function checkSymptoms() {
    if ($('#head-front').prop('checked') == true) {
        alert('the front of your head hurts')
    }

    if ($('#left-arm-front').prop('checked') == true) {
        alert('your left arm hurts Dx')
    }
}

function clear() {
    $('input').prop('checked', false)
}