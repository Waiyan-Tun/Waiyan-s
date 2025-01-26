import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyD9c64qPitqcz3RW8XM1D_X1Ic9BYHl0d4";

// Access your API key
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history: [
            { role: "user", parts: [{ text: "How do football odds work?" }] },
            { role: "model", parts: [{ text: "Football odds are posted as the fractional ratio..." }] }
        ],
        generationConfig: { maxOutputTokens: 30000 },
    });

    window.sendMessage = async function () {
        const userInput = document.getElementById("user-input");
        const userMessage = userInput.value;

        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const text = response.text();

        const showMessagesDiv = document.getElementById("showMessages");
        showMessagesDiv.innerHTML += `<p>${userMessage}</p>`;
        showMessagesDiv.innerHTML += `<p>${text}</p>`;

        userInput.value = "";
    };
}

run();

window.handleKeyDown = function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
};
