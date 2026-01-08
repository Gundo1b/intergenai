const chatBox = document.getElementById("chat");
const userInput = document.getElementById("userInput");

const messages = [
  {
    role: "system",
    content: "You are a helpful AI assistant."
  }
];

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = `message ${className}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // Show user message
  addMessage(text, "user");
  userInput.value = "";

  messages.push({ role: "user", content: text });

  // Show typing indicator
  const typing = document.createElement("div");
  typing.className = "message bot";
  typing.textContent = "Typing...";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": "http://localhost",
          "X-Title": "Simple OpenRouter Chatbot",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "tngtech/tng-r1t-chimera:free",
          messages: messages,
          temperature: 0.7
        })
      }
    );

    const data = await response.json();
    console.log("OpenRouter response:", data);

    if (!response.ok) {
      throw new Error(data.error?.message || "OpenRouter request failed");
    }

    const reply = data.choices[0].message.content;

    messages.push({ role: "assistant", content: reply });
    typing.remove();
    addMessage(reply, "bot");

  } catch (error) {
    typing.remove();
    console.error(error);
    addMessage("❌ Error: " + error.message, "bot");
  }
}

// Enter key support
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
