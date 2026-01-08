/* =========================
   Intergen Coder — Full JS (OpenRouter)
   TEST MODE: API key can be hardcoded in this file
========================= */

const chatBox = document.getElementById("chat");
const chatScroll = document.getElementById("chatScroll");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChatBtn = document.getElementById("newChatBtn");
const savedConversations = document.getElementById("savedConversations");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("mobileOverlay");

const themeSwitcher = document.getElementById("theme-switcher");
const modelSelector = document.getElementById("modelSelector");

const welcome = document.getElementById("welcome");
const welcomeInput = document.getElementById("welcomeInput");
const welcomeSendBtn = document.getElementById("welcomeSendBtn");

const attachBtn = document.getElementById("attachBtn");
const micBtn = document.getElementById("micBtn");
const fileInput = document.getElementById("fileInput");

/* =========================
   OPENROUTER KEY (TESTING)
   Put your key here.
   IMPORTANT: remove before publishing.
========================= */
const OPENROUTER_API_KEY = "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"; // e.g. "sk-or-v1-xxxxx"
const OPENROUTER_KEY_NAME = "OPENROUTER_API_KEY"; // optional fallback

/**
 * Roles:
 * - OpenRouter payload: system | user | assistant
 * - UI-only: notification (never sent)
 * Typing indicator is an assistant message with _typing=true and _html=true (never sent).
 */
let messages = [];
let lastMessageDate = null;

let inFlight = false;
let abortController = null;

// =========================
// THEME
// =========================
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeSwitcher) themeSwitcher.checked = theme === "dark";
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme === "light" ? "dark" : "light");
}

// =========================
// VIEW
// =========================
function toggleView() {
  const hasMessages = messages.some((m) => m.role === "user" || m.role === "assistant");
  const inputWrapper = document.querySelector(".input-wrapper");

  if (hasMessages) {
    welcome.style.display = "none";
    chatScroll.style.display = "flex";
    if (inputWrapper) inputWrapper.style.display = "block";
  } else {
    welcome.style.display = "flex";
    chatScroll.style.display = "none";
    if (inputWrapper) inputWrapper.style.display = "none";
  }
}

// =========================
// RENDER
// =========================
function renderMessages() {
  chatBox.innerHTML = "";
  lastMessageDate = null;

  for (const message of messages) {
    if (message.role !== "system") addMessage(message, false);
  }

  chatScroll.scrollTop = chatScroll.scrollHeight;
}

function addMessage(message, isNew = true) {
  if (message.timestamp) {
    const messageDate = new Date(message.timestamp).toDateString();
    if (messageDate !== lastMessageDate) {
      const dateDiv = document.createElement("div");
      dateDiv.className = "date-separator";
      dateDiv.textContent = messageDate;
      chatBox.appendChild(dateDiv);
      lastMessageDate = messageDate;
    }
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${message.role}`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";

  // Only allow HTML for app-generated messages (notification or explicit _html=true).
  // All normal user/assistant content remains textContent to avoid XSS sinks.
  if (message.role === "notification" || message._html === true) contentDiv.innerHTML = message.content;
  else contentDiv.textContent = message.content;

  messageDiv.appendChild(contentDiv);
  chatBox.appendChild(messageDiv);

  if (isNew) chatScroll.scrollTop = chatScroll.scrollHeight;
  return messageDiv;
}

// =========================
// STORAGE / CONVERSATIONS
// =========================
function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

function systemMessage() {
  return { role: "system", content: "You are a helpful AI assistant." };
}

function saveCurrentConversation() {
  localStorage.setItem("currentConversation", JSON.stringify(messages));
}

function loadCurrentConversation() {
  const current = localStorage.getItem("currentConversation");
  const parsed = current ? safeParse(current, null) : null;

  messages = Array.isArray(parsed) && parsed.length ? parsed : [systemMessage()];

  renderMessages();
  toggleView();
}

function loadConversation(conversationId) {
  const conversation = safeParse(localStorage.getItem(conversationId), null);
  const convoMsgs = conversation?.messages;

  messages = Array.isArray(convoMsgs) && convoMsgs.length ? convoMsgs : [systemMessage()];

  saveCurrentConversation();
  renderMessages();
  toggleView();
  closeSidebar();
}

function loadSavedConversations() {
  if (!savedConversations) return;

  savedConversations.innerHTML = "";
  const keys = Object.keys(localStorage)
    .filter((k) => k.startsWith("conversation-"))
    .sort()
    .reverse();

  for (const key of keys) {
    const conversation = safeParse(localStorage.getItem(key), null);
    const convoMsgs = conversation?.messages;

    const firstUserMessage = Array.isArray(convoMsgs) ? convoMsgs.find((msg) => msg.role === "user") : null;

    const title = firstUserMessage
      ? firstUserMessage.content.substring(0, 30) + (firstUserMessage.content.length > 30 ? "..." : "")
      : "New Chat";

    const conversationDiv = document.createElement("div");
    conversationDiv.className = "saved-conversation";

    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;
    conversationDiv.appendChild(titleSpan);

    conversationDiv.addEventListener("click", () => loadConversation(key));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      localStorage.removeItem(key);

      const currentConvo = safeParse(localStorage.getItem("currentConversation"), []);
      if (JSON.stringify(currentConvo) === JSON.stringify(convoMsgs)) {
        newChatBtn?.click();
      }
      loadSavedConversations();
    });

    conversationDiv.appendChild(deleteBtn);
    savedConversations.appendChild(conversationDiv);
  }
}

// =========================
// SIDEBAR
// =========================
function openSidebar() {
  sidebar?.classList.add("open");
  overlay?.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeSidebar() {
  sidebar?.classList.remove("open");
  overlay?.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

hamburgerBtn?.addEventListener("click", () => {
  if (sidebar?.classList.contains("open")) closeSidebar();
  else openSidebar();
});
overlay?.addEventListener("click", closeSidebar);

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeSidebar();
});

// =========================
// OPENROUTER PAYLOAD SANITIZER
// =========================
function toOpenRouterMessages(msgs) {
  return msgs
    .filter((m) => (m.role === "system" || m.role === "user" || m.role === "assistant") && !m._typing)
    .map((m) => ({ role: m.role, content: m.content }));
}

// =========================
// SEND
// =========================
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSelectedModel() {
  return modelSelector?.value || localStorage.getItem("selectedModel") || "openai/gpt-oss-120b:free";
}

function getApiKey() {
  // priority: hardcoded test key -> localStorage fallback
  const hardcoded = (OPENROUTER_API_KEY || "").trim();
  if (hardcoded && hardcoded !== "PUT_YOUR_SK_OR_V1_KEY_HERE") return hardcoded;

  return (localStorage.getItem(OPENROUTER_KEY_NAME) || "").trim();
}

function requireApiKey() {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("Missing OpenRouter API key. Put it in OPENROUTER_API_KEY in the JS file (test) or set localStorage OPENROUTER_API_KEY.");
  return apiKey;
}

async function sendMessage(inputText = null) {
  const text = (inputText ?? userInput?.value ?? "").trim();
  if (!text || inFlight) return;

  const userMessage = { role: "user", content: text, timestamp: new Date().toISOString() };
  messages.push(userMessage);
  addMessage(userMessage);
  saveCurrentConversation();

  if (userInput) userInput.value = "";
  if (inputText != null && welcomeInput) welcomeInput.value = "";
  toggleView();

  const selectedModel = getSelectedModel();

  // Typing indicator
  const typingHtml = `
    <div class="typing-dots" aria-label="Assistant is typing">
      <span></span><span></span><span></span>
    </div>
  `;

  const typingMsg = {
    role: "assistant",
    content: typingHtml,
    timestamp: new Date().toISOString(),
    _typing: true,
    _html: true,
  };

  const typingEl = addMessage(typingMsg);
  typingEl?.classList.add("thinking");

  inFlight = true;
  if (sendBtn) sendBtn.disabled = true;

  abortController?.abort();
  abortController = new AbortController();

  try {
    const apiKey = requireApiKey();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      signal: abortController.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": location.origin,
        "X-Title": "Intergen Coder",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: selectedModel,
        messages: toOpenRouterMessages(messages),
        temperature: 0.7,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const msg = data?.error?.message || `Request failed (${response.status})`;
      throw new Error(msg);
    }

    typingEl?.remove();

    const assistantText = data?.choices?.[0]?.message?.content ?? "";
    const assistantMessage = { role: "assistant", content: assistantText, timestamp: new Date().toISOString() };
    messages.push(assistantMessage);
    saveCurrentConversation();
    addMessage(assistantMessage);
  } catch (error) {
    typingEl?.remove();
    addMessage({
      role: "notification",
      content: `<i class="fas fa-exclamation-triangle"></i> Error: ${escapeHtml(error?.message || String(error))}`,
      timestamp: new Date().toISOString(),
    });
  } finally {
    inFlight = false;
    if (sendBtn) sendBtn.disabled = false;
  }
}

// =========================
// EVENTS
// =========================
newChatBtn?.addEventListener("click", () => {
  if (messages.length > 1) {
    const firstUserTs = messages.find((m) => m.role === "user")?.timestamp || new Date().toISOString();
    const conversationId = `conversation-${firstUserTs}`;
    localStorage.setItem(conversationId, JSON.stringify({ messages, timestamp: firstUserTs }));
  }

  messages = [systemMessage()];
  saveCurrentConversation();
  renderMessages();
  toggleView();
  loadSavedConversations();
  closeSidebar();
});

userInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
sendBtn?.addEventListener("click", () => sendMessage());

welcomeInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage(welcomeInput.value.trim());
});
welcomeSendBtn?.addEventListener("click", () => sendMessage(welcomeInput?.value?.trim() || ""));

// Mic / Attach (guarded)
let isRecording = false;
micBtn?.addEventListener("click", () => {
  isRecording = !isRecording;
  if (isRecording) {
    micBtn.innerHTML = '<i class="fas fa-pause"></i>';
    micBtn.setAttribute("aria-label", "Pause recording");
  } else {
    micBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    micBtn.setAttribute("aria-label", "Use microphone");
  }
});

attachBtn?.addEventListener("click", () => fileInput?.click());
fileInput?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) alert(`File selected: ${file.name}`);
});

// Model persistence + UI notification (never sent)
function applySavedModel() {
  const saved = localStorage.getItem("selectedModel");
  if (!modelSelector) return;

  if (saved && [...modelSelector.options].some((o) => o.value === saved)) {
    modelSelector.value = saved;
  } else {
    localStorage.setItem("selectedModel", modelSelector.value);
  }
}

modelSelector?.addEventListener("change", () => {
  const selectedOption = modelSelector.options[modelSelector.selectedIndex];
  localStorage.setItem("selectedModel", modelSelector.value);

  const modelName = selectedOption.text;
  const modelChangeMessage = {
    role: "notification",
    content: `<i class="fas fa-circle-info"></i> Model switched to ${escapeHtml(modelName)}`,
    timestamp: new Date().toISOString(),
  };
  messages.push(modelChangeMessage);
  addMessage(modelChangeMessage);
  saveCurrentConversation();
});

themeSwitcher?.addEventListener("change", toggleTheme);

// PILL BUTTONS
document.querySelectorAll(".pill").forEach((button) => {
  button.addEventListener("click", () => {
    if (!welcomeInput) return;
    welcomeInput.value = button.textContent;
    welcomeInput.focus();
  });
});

// =========================
// INITIAL LOAD
// =========================
applyTheme(localStorage.getItem("theme") || "light");
applySavedModel();
loadCurrentConversation();
loadSavedConversations();
