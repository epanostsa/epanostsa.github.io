sentences = [
    "News regarding COVID-19 can be found on our <a style='text-decoration:underline' href='./index.html#newsletter'>newsletters</a>.",
    "If you want to know who we are and what we do, check our <a style='text-decoration:underline' href='./about.html'>about page</a>.",
    "To learn more about our doctors, check out our <a style='text-decoration:underline' href='./index.html#doctor-description'>doctors service</a>.",
    "Ways to contact us can be found <a style='text-decoration:underline' href='javascript:$(\"html\").scrollTop($(\"html\")[0].scrollHeight)'>here</a>.",
    ""
]
function generateResponse() {
    return sentences[Math.floor(Math.random() * sentences.length)]
}

$('#chat').on('submit', (e) => {
    e.preventDefault()
    var msg = $('#chatbar').val().replace("<", "&#60;")
    if (msg.split(" ").join("") != "") {
        $('#chatbox-left').append(`<div class="message"><div class="clientmessage"><b>You</b> ${msg}</div></div><br>`);
        $('#chatbox-right').append(`<div class="message-invis"><div class="botmessage"><b>You</b> ${msg}</div></div><br>`);
        var response = generateResponse();
        $('#chatbox-right').append(`<div class="message"><div class="botmessage"><b>Virtual Assistant</b> ${response}</div></div><br>`);
        $('#chatbox-left').append(`<div class="message-invis"><div class="botmessage"><b>Virtual Assistant</b> ${response}</div></div><br>`);
        $('#chatbar').val('')
        $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
    }
})