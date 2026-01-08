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
  if (message.role === "notification" || message._html === true) {
    contentDiv.innerHTML = message.content;
  } else {
    // Process content for code blocks
    const processedContent = processCodeBlocks(message.content);
    contentDiv.innerHTML = processedContent;
  }

  messageDiv.appendChild(contentDiv);
  chatBox.appendChild(messageDiv);

  // Add copy button listeners to code blocks
  if (message.role === "assistant") {
    addCopyButtonListeners(contentDiv);
  }

  if (isNew) chatScroll.scrollTop = chatScroll.scrollHeight;
  return messageDiv;
}

// Process markdown-style code blocks and formatting
function processCodeBlocks(text) {
  // Escape HTML first
  const escaped = escapeHtml(text);
  
  // Process code blocks with language (```language\ncode```)
  let processed = escaped.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, language, code) => {
    const lang = language || 'code';
    const codeId = 'code-' + Math.random().toString(36).substr(2, 9);
    return `<div class="code-block-wrapper">
      <div class="code-block-header">
        <span class="code-language">${escapeHtml(lang)}</span>
        <button class="copy-code-btn" data-code-id="${codeId}">
          <i class="fas fa-copy"></i>
          Copy
        </button>
      </div>
      <pre><code id="${codeId}">${code.trim()}</code></pre>
    </div>`;
  });
  
  // Process inline code (`code`) - must be before other formatting
  processed = processed.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Process headers (###, ##, #)
  processed = processed.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  processed = processed.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  processed = processed.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Process bold (**text** or __text__)
  processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
  
  // Process italic (*text* or _text_) - after bold to avoid conflicts
  processed = processed.replace(/\*(.+?)\*/g, '<em>$1</em>');
  processed = processed.replace(/_(.+?)_/g, '<em>$1</em>');
  
  // Process strikethrough (~~text~~)
  processed = processed.replace(/~~(.+?)~~/g, '<del>$1</del>');
  
  // Process horizontal rules (---, ***, ___)
  processed = processed.replace(/^(---|\*\*\*|___)$/gm, '<hr>');
  
  // Process unordered lists (-, *, +)
  processed = processed.replace(/^[\-\*\+] (.+)$/gm, '<li>$1</li>');
  processed = processed.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
  
  // Process ordered lists (1., 2., etc.)
  processed = processed.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  
  // Process links [text](url)
  processed = processed.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  
  // Process blockquotes (> text)
  processed = processed.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
  
  // Convert newlines to <br> for remaining text
  processed = processed.replace(/\n/g, '<br>');
  
  return processed;
}

// Add copy button event listeners
function addCopyButtonListeners(contentDiv) {
  const copyButtons = contentDiv.querySelectorAll('.copy-code-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const codeId = button.getAttribute('data-code-id');
      const codeElement = document.getElementById(codeId);
      
      if (codeElement) {
        try {
          // Get the raw text content
          const code = codeElement.textContent;
          
          // Copy to clipboard
          await navigator.clipboard.writeText(code);
          
          // Update button state
          const originalHTML = button.innerHTML;
          button.innerHTML = '<i class="fas fa-check"></i> Copied!';
          button.classList.add('copied');
          
          // Reset after 2 seconds
          setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
          button.innerHTML = '<i class="fas fa-times"></i> Failed';
          setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i> Copy';
          }, 2000);
        }
      }
    });
  });
}

// Typewriter effect for assistant messages
async function typeMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${message.role}`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";

  messageDiv.appendChild(contentDiv);
  chatBox.appendChild(messageDiv);

  const text = message.content;
  let displayedText = '';
  
  // Typing speed (milliseconds per character) - faster for quick responses
  const typingSpeed = 3;
  
  // Check if message contains code blocks
  const hasCodeBlock = text.includes('```');
  
  if (hasCodeBlock) {
    // For messages with code blocks, type normally but render code blocks instantly when reached
    let inCodeBlock = false;
    let codeBlockBuffer = '';
    let currentLanguage = '';
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      // Detect code block start
      if (text.substr(i, 3) === '```') {
        if (!inCodeBlock) {
          // Starting a code block
          inCodeBlock = true;
          // Get language if specified
          const langMatch = text.substr(i).match(/```(\w+)?\n/);
          if (langMatch) {
            currentLanguage = langMatch[1] || 'code';
            i += langMatch[0].length - 1;
          } else {
            i += 2; // Skip the ```
          }
          codeBlockBuffer = '';
          continue;
        } else {
          // Ending a code block - render it immediately
          displayedText += '```' + (currentLanguage ? currentLanguage + '\n' : '\n') + codeBlockBuffer + '```';
          contentDiv.innerHTML = processCodeBlocks(displayedText);
          addCopyButtonListeners(contentDiv);
          inCodeBlock = false;
          codeBlockBuffer = '';
          currentLanguage = '';
          i += 2; // Skip the ```
          continue;
        }
      }
      
      if (inCodeBlock) {
        codeBlockBuffer += char;
      } else {
        displayedText += char;
        contentDiv.innerHTML = processCodeBlocks(displayedText);
        addCopyButtonListeners(contentDiv);
        chatScroll.scrollTop = chatScroll.scrollHeight;
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
      }
    }
  } else {
    // Regular text - type character by character
    for (let i = 0; i < text.length; i++) {
      displayedText += text[i];
      contentDiv.innerHTML = processCodeBlocks(displayedText);
      chatScroll.scrollTop = chatScroll.scrollHeight;
      
      // Slightly faster typing for spaces and punctuation
      const char = text[i];
      const delay = (char === ' ' || char === '\n') ? typingSpeed * 0.5 : typingSpeed;
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  // Final render with all features
  contentDiv.innerHTML = processCodeBlocks(displayedText);
  addCopyButtonListeners(contentDiv);
  chatScroll.scrollTop = chatScroll.scrollHeight;
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
    
    // Type out the message character by character
    await typeMessage(assistantMessage);
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
