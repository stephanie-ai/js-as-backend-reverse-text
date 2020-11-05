// SETUP

const btn = document.getElementById('submit');
const form = document.querySelector('#new-text-form');
const returnText = document.querySelector('ul');

// Bind event listeners

btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitText);

// Fetch all text as soon as app is loaded
showAllText();


// Text flow

function showAllText() {
    fetch('http://localhost:8000/cats')
        .then(r => r.json())
        .then(appendText)
        .catch(console.warn)
};

function submitText(e) {
    e.preventDefault();

    let textData = '';

    const options = {
        method: 'POST',
        body: JSON.stringify(textData)
    };

    fetch('http://localhost:8000/cats', options)
        .then(r => r.json())
        .then(() => appendText(textData))
        .catch(console.warn)
};

function appendTextMessage(data) {
    data.texts.forEach(appendText);
};

function appendText (textData) {
    
    returnText.append();
};

// Message flow

function getMessage() {
    fetch('http://localhost:8000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText) {
    const msg = document.createElement('p');
    msg.textContent = msgText;
    document.body.append(msg);
};