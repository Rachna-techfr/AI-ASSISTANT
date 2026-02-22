// Function to send a message
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Append user message
    appendMessage(userInput, "user-message");

    // Show typing indicator
    showTypingIndicator();

    // Send message to Flask backend
    fetch("/chat", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        removeTypingIndicator(); // Remove typing animation
        appendMessage(data.response, "bot-message"); // Show bot response
    });

    document.getElementById("user-input").value = "";
}

// Function to append a message to the chat
function appendMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);

    // Ensure chat scrolls to the bottom
    setTimeout(scrollToBottom, 100);
}

// Function to show animated typing indicator
function showTypingIndicator() {
    let chatBox = document.getElementById("chat-box");
    let typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className = "bot-message typing";
    typingDiv.innerHTML = "<span></span><span></span><span></span>"; // Three dots animation
    chatBox.appendChild(typingDiv);
    scrollToBottom();
}

// Function to remove typing indicator
function removeTypingIndicator() {
    let typingDiv = document.getElementById("typing-indicator");
    if (typingDiv) {
        typingDiv.remove();
    }
}

// Scroll to bottom function
function scrollToBottom() {
    let chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle "Enter" key for sending messages
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to start voice recognition (User Input)
function startVoiceRecognition() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        let voiceText = event.results[0][0].transcript;
        document.getElementById("user-input").value = voiceText;
        sendMessage();
    };

    recognition.start();
}