document.addEventListener('DOMContentLoaded', function() {
    const chatbotCircle = document.getElementById('chatbot-circle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.querySelector('.send-btn');
    const chatInput = document.querySelector('.chat-input');
    const messagesContainer = document.querySelector('.messages');

    chatbotCircle.addEventListener('click', function() {
        chatbotCircle.style.display = 'none';
        chatbotContainer.style.display = 'flex';
        setTimeout(() => {
            chatbotContainer.classList.add('show');
        }, 10);
    });

    closeBtn.addEventListener('click', function() {
        chatbotContainer.classList.remove('show');
        setTimeout(() => {
            chatbotContainer.style.display = 'none';
            chatbotCircle.style.display = 'flex';
        }, 300);
    });

    sendBtn.addEventListener('click', function() {
        sendMessage();
    });

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        const messageContainer = document.createElement('div');
        messageContainer.textContent = message;
        messageContainer.classList.add('user-message');
        messagesContainer.appendChild(messageContainer);
        chatInput.value = '';

        const botResponse = document.createElement('div');
        botResponse.textContent = getResponse(message);
        botResponse.classList.add('bot-message');
        messagesContainer.appendChild(botResponse);

        // Scroll para o final das mensagens
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
