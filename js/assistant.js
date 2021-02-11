sentences = [
    "News regarding COVID-19 safety can be found on our <a style='text-decoration: underline' href='./index.html#newsletter'>newsletters</a>.",
    "If you want to know who we are and what we do, check our <a style='text-decoration: underline' href='./about.html'>about page</a>.",
    "To learn more about our doctors, check out our <a style='text-decoration: underline' href='./index.html#doctor-description'>doctors service</a>.",
    "Ways to contact us can be found <a style='text-decoration: underline' href='javascript:document.getElementById(\"contact\").scrollIntoView()'>here</a>.",
    "Learn more about our appointments <a style='text-decoration: underline' href='./index.html#appointment-description'>here</a>.",
    "At Epanos, we make sure to help diagnose your condition. More about this can be found <a style='text-decoration: underline' href='./index.html#diagnosis-description'>here</a>.",
    "Find some of our latest articles on our <a style='text-decoration: underline' href='./index.html#newsletter'>newsletter</a>.",
    "Information about vaccines can be found on our <a style='text-decoration: underline' href='./index.html#newsletter'>newsletter</a>."
]
function generateResponse(msg) {
    if (/reference|judg|copyright|checklist|grade|grading/i.test(msg)) return "Are you a judge? See our references and checklists <a style='text-decoration: underline' href='./references.html'>here</a>.";
    else if (/vaccin/i.test(msg)) return sentences[7];
    else if (/cov|corona|sars|-19/i.test(msg)) return sentences[0];
    else if (/doctor|logist|ician/i.test(msg)) return sentences[2];
    else if (/contact|call|phone|media|message/i.test(msg)) return sentences[3];
    else if (/appointment|schedule|book/i.test(msg)) return sentences[4];
    else if (/diagnos/i.test(msg)) return sentences[5];
    else if (/news|article/i.test(msg)) return sentences[6];
    else if (/who|what do you do|about|company/i.test(msg)) return sentences[1];
    else if (/thank you|thanks|thx/i.test(msg)) return "It's always our pleasure to help.";
    else if (/assistant|bot/i.test(msg)) return "I'm your virtual assistant! I'm a bot but I can help you with questions about our site.";
    else if (/hello|good morning|good evening|good afternoon|greetings|how are you/i.test(msg)) return "Hello! I'm happy to help with any questions about our site.";
    else return sentences[Math.floor(Math.random() * sentences.length)]
}

var questions = [
    "What is the status of COVID-19 vaccinations?",
    "How can I protect myself from COVID-19?",
    "How can I contact Epanos?",
    "Can you show me some health related articles?",
    "How can I book an appointment?",
    "What doctors are in Epanos?",
]

var botGreeting = `Hello! I am a bot but I can help you with questions about features on our website. Try asking "${questions[Math.floor(Math.random() * questions.length)]}"`

var interval = setInterval(() => {
    $('#botimage-surrounding').css('animation-name', 'colorchange')
    $('#botimage-surrounding').css('animation-duration', '2s')
    $('#chatbox-right').append(`<div class="message"><div class="botmessage"><b>Virtual Assistant</b>: ${botGreeting}</div></div><br>`);
    $('#chatbox-left').append(`<div class="message-invis"><div class="botmessage"><b>Virtual Assistant</b>: ${botGreeting}</div></div><br>`);
    $('#chatbar').val('')
    $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
    clearInterval(interval)
}, 30);

$('#chat').on('submit', (e) => {
    e.preventDefault()
    var msg = $('#chatbar').val().replace("<", "&#60;")
    if (msg.split(" ").join("") != "") {
        $('#chatbox-left').append(`<div class="message"><div class="clientmessage"><b>You</b>: ${msg}</div></div><br>`);
        $('#chatbox-right').append(`<div class="message-invis"><div class="botmessage"><b>You</b>: ${msg}</div></div><br>`);
        $('#botimage-surrounding').css('animation-name', 'none')
        $('#botimage-surrounding').css('animation-duration', 'none')
        var response = generateResponse(msg);
        $('#chatbox-left').append(`<div class="message-invis"><div class="botmessage"><b>Virtual Assistant</b>: ${response}</div></div><br>`);
        var interval = setInterval(() => {
            $('#botimage-surrounding').css('animation-name', 'colorchange')
            $('#botimage-surrounding').css('animation-duration', '1s')
            $('#chatbox-right').append(`<div class="message"><div class="botmessage"><b>Virtual Assistant</b>: ${response}</div></div><br>`);
            $('#chatbar').val('')
            $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
            clearInterval(interval)
        }, 30);
       
    }
})