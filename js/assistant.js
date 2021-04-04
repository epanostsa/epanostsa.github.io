sentences = [
    "News regarding COVID-19 safety can be found on our <a class='link' style='text-decoration: underline' href='./index.html#newsletter'>newsletters</a>.",
    "If you want to know who we are and what we do, check our <a class='link' style='text-decoration: underline' href='./about.html'>about page</a>.",
    "To learn more about our doctors, check out our <a class='link' style='text-decoration: underline' href='./index.html#doctor-description'>doctors service</a>.",
    "Ways to contact us can be found <a class='link' style='text-decoration: underline' href='javascript:document.getElementById(\"contact\").scrollIntoView()'>here</a>.",
    "Learn more about our appointments <a class='link' style='text-decoration: underline' href='./index.html#appointment-description'>here</a>.",
    "At Epanos, we make sure to help diagnose your condition. More about this can be found <a class='link' style='text-decoration: underline' href='./index.html#diagnosis-description'>here</a>.",
    "Find some of our latest articles on our <a class='link' style='text-decoration: underline' href='./index.html#newsletter'>newsletter</a>.",
    "Information about vaccines has been covered by some of our researches in <a class='link' style='text-decoration: underline' href='./newsletters/2-million-covid-packages-shipped.html'>this article</a>.",
    "If you are experiencing symptoms like a persistent cough, sore or dry throat, stomach pains, etc, we recommend you to <a class='link' style='text-decoration: underline' href='./index.html#appointment-description'>book an appointment</a> in order to help us find the right doctor for you to diagnose your condition.",
    "Breathing problems may be a sign of COVID-19, but also other illnesses. To narrow down your condition, <a class='link' style='text-decoration: underline' href='./index.html#appointment-description'>book an appointment</a> in order to help us find the right doctor for you.",
    "You can find your profile <a class='link' style='text-decoration: underline' href='./profile.html'>here</a>. On your profile you will find information about all your booked appointments.",
    "Use our <a class='link' style='text-decoration: underline' href='./symptom-checker.html'>Symptom Checker</a> to create a small summary of your health problems and also make predictions of any diagnosis you might receive. You are strongly recommended to submit its assessment in an appointment form so that your doctor can correctly diagnose you."
]
function generateResponse(msg) {
    $('#chatbox').append("<div id='typing'>Assistant is typing<span id='dot1'></span><span id='dot2'></span><span id='dot3'></span></div>");
    $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
    if (/reference|judg|copyright|checklist|grade|grading/i.test(msg)) return "Are you a judge? See our references and checklists <a class='link' style='text-decoration: underline' href='./references.html'>here</a>.";
    else if (/vaccin/i.test(msg)) return sentences[7];
    else if (/mask/i.test(msg)) return "As COVID-19 is still in duration, always make sure to wear a mask if you are outside of your house in a place near other people. Learn more about COVID-19 precautions in <a class='link' style='text-decoration: underline' href='./newsletters/covid-precautions.html'>this article.</a>";
    else if (/cov|corona|sars|-19/i.test(msg)) return sentences[0];
    else if (/account|profile/i.test(msg)) return sentences[10];
    else if (/symptom|check|body/i.test(msg)) return sentences[11];
    else if (/doctor|logist|ician/i.test(msg)) return sentences[2];
    else if (/contact|call|phone|media|message/i.test(msg)) return sentences[3];
    else if (/appointment|schedule|book|bot/i.test(msg)) return sentences[4];
    else if (/cough|cold|sore|sneez|stomach|head|sick/i.test(msg)) return sentences[8];
    else if (/breath/i.test(msg)) return sentences[9];
    else if (/diagnos/i.test(msg)) return sentences[5];
    else if (/news|article/i.test(msg)) return sentences[6];
    else if (/who|what do you do|about|company|epanos/i.test(msg)) return sentences[1];
    else if (/thank you|thanks|thx|epic/i.test(msg)) return "It's always our pleasure to help.";
    else if (/assistant|bot|assist/i.test(msg)) return "I'm your virtual assistant! I'm a bot but I can help you with questions about our site.";
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
    "How do I check my account?",
    "What should I do if I have a cough?",
    "What does Epanos do?",
    "Shoud I wear a mask?"
]

var botGreeting = `Hello! I am a bot but I can help you with questions about features on our website. Try asking "${questions[Math.floor(Math.random() * questions.length)]}"`

function sendMessage(sender, message) {
    if (sender == "bot") {
        $('#chatbox').append(`<div class="botmessage"><b>Virtual Assistant</b>: ${message}</div><img class="pfp" src="images/bot-circle-cropped.png"><br><br>`);
    } else if (sender == "client") {
        $('#chatbox').append(`<img class="pfp" src="images/pfp.png"><div class="clientmessage"><b>You</b>: ${message}</div><br><br>`);
    }
}

var interval = setInterval(() => {
    $('#botimage-surrounding').css('animation-name', 'colorchange')
    $('#botimage-surrounding').css('animation-duration', '2s')
    sendMessage("bot", botGreeting)
    $('#chatbar').val('')
    $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
    clearInterval(interval)
}, 30);

$('#chat').on('submit', (e) => {
    e.preventDefault()
    $(window).scrollTop(0)
    var msg = $('#chatbar').val().replace("<", "&#60;")
    if (msg.split(" ").join("") != "") {
        sendMessage("client", msg)
        $('#botimage-surrounding').css('animation-name', 'none')
        $('#botimage-surrounding').css('animation-duration', 'none')
        $('#chatbar').val('')
        $("input").prop('readonly', true);
        var response = generateResponse(msg);
        setTimeout(() => {
            var interval = setInterval(() => {
                $('#botimage-surrounding').css('animation-name', 'colorchange')
                $('#botimage-surrounding').css('animation-duration', '1s')
                $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
                sendMessage("bot", response)
                $('#chatbox').scrollTop($('#chatbox')[0].scrollHeight, {behavior: "smooth"});
                clearInterval(interval)
                $('#typing').remove()
                $("input").prop('readonly', false);
            }, 30);
        }, response.length * 15);
       
    }
})