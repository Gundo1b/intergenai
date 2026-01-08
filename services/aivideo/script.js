const $ = (id) => document.getElementById(id);

const promptEl = $("prompt");
const runBtn = $("runBtn");
const resetBtn = $("resetBtn");
const moreBtn = $("moreBtn");
const advanced = $("advanced");

const statusBadge = $("statusBadge");
const stageText = $("stageText");
const previewvideo = $("previewvideo");
const jsonOutput = $("jsonOutput");

const previewTab = $("previewTab");
const jsonTab = $("jsonTab");

const logsToggle = $("logsToggle");
const logbox = $("logbox");

const modeBtn = $("modeBtn");
const modeMenu = $("modeMenu");
const modeLabel = $("modeLabel");

const themeBtn = $("themeBtn");
const themeIcon = $("themeIcon");
const themeLabel = $("themeLabel");

const THEME_KEY = "intergen_theme";

/* =========================
   THEME
========================= */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const isDark = theme === "dark";
  themeIcon.innerHTML = isDark ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" fill="currentColor"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2"/></svg>';
  themeLabel.textContent = isDark ? "Dark" : "Light";
}

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") return applyTheme(saved);

  // Default: prefer system
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  applyTheme(prefersDark ? "dark" : "light");
})();

themeBtn.addEventListener("click", () => {
  const curr = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(curr === "dark" ? "light" : "dark");
});

/* =========================
   MENU (Form/JSON)
========================= */
modeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = modeMenu.hidden === false;
  modeMenu.hidden = open;
  modeBtn.setAttribute("aria-expanded", String(!open));
});

modeMenu.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-item");
  if (!btn) return;
  modeLabel.textContent = btn.dataset.mode;
  modeMenu.hidden = true;
  modeBtn.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", () => {
  modeMenu.hidden = true;
  modeBtn.setAttribute("aria-expanded", "false");
});

/* =========================
   ADDITIONAL SETTINGS TOGGLE
========================= */
moreBtn.addEventListener("click", () => {
  const isOpen = advanced.hidden === false;
  advanced.hidden = isOpen;
  moreBtn.setAttribute("aria-expanded", String(!isOpen));
});

/* =========================
   LOGS
========================= */
function log(line) {
  const ts = new Date().toISOString().slice(11, 19);
  const div = document.createElement("div");
  div.textContent = `[${ts}] ${line}`;
  logbox.appendChild(div);
  logbox.scrollTop = logbox.scrollHeight;
}

logsToggle.addEventListener("click", () => {
  const open = logbox.hidden === false;
  logbox.hidden = open;
  logsToggle.setAttribute("aria-expanded", String(!open));
  logsToggle.innerHTML = (open ? "Show" : "Hide") + ' <span class="chev">▾</span>';
});

/* =========================
   RESULT VIEW TABS
========================= */
function setResultView(view) {
  const isPreview = view === "preview";
  previewTab.classList.toggle("active", isPreview);
  jsonTab.classList.toggle("active", !isPreview);
  previewTab.setAttribute("aria-selected", String(isPreview));
  jsonTab.setAttribute("aria-selected", String(!isPreview));

  previewvideo.hidden = !isPreview;
  jsonOutput.hidden = isPreview;

  // If nothing generated yet, keep placeholder visible
  if (!previewvideo.src && jsonOutput.textContent.trim() === "") {
    previewvideo.hidden = true;
    jsonOutput.hidden = true;
  }
}

previewTab.addEventListener("click", () => setResultView("preview"));
jsonTab.addEventListener("click", () => setResultView("json"));

/* =========================
   RESET
========================= */
resetBtn.addEventListener("click", () => {
  promptEl.value = "";
  previewvideo.removeAttribute("src");
  previewvideo.hidden = true;
  jsonOutput.textContent = "";
  jsonOutput.hidden = true;
  stageText.textContent = "Waiting for your input...";
  statusBadge.textContent = "Idle";
  log("Reset");
});

/* =========================
   RUN (Ctrl+Enter)
========================= */
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") runBtn.click();
});

runBtn.addEventListener("click", async () => {
  const prompt = promptEl.value.trim();
  if (!prompt) {
    stageText.textContent = "Enter a prompt to generate.";
    return;
  }

  await runGeneration({ prompt });
});

/* =========================
   PLACEHOLDER GENERATION
   Replace this with your real API call.
========================= */
async function runGeneration({ prompt }) {
  runBtn.disabled = true;
  statusBadge.textContent = "Running";
  stageText.textContent = "Generating…";
  log(`Run: prompt="${prompt.slice(0, 80)}${prompt.length > 80 ? "…" : ""}"`);

  // UI: show JSON by default if mode is JSON, else Preview
  const mode = (modeLabel.textContent || "Form").toLowerCase();
  setResultView(mode === "json" ? "json" : "preview");

  try {
    // Simulate latency
    await new Promise((r) => setTimeout(r, 900));

    // Fake result payload (replace with real response)
    const payload = {
      id: "gen_" + Math.random().toString(16).slice(2),
      status: "success",
      model: "gpt-video-1",
      prompt,
      created_at: new Date().toISOString(),
      cost_estimate_usd: 0.06
    };

    jsonOutput.textContent = JSON.stringify(payload, null, 2);

    // Optional: placeholder video (gradient) so preview isn’t empty
    // Replace with real base64/url from your API
    previewvideo.src =
      "data:video/svg+xml;base64," +
      btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#64E1FF"/>
              <stop offset="55%" stop-color="#8A6BFF"/>
              <stop offset="100%" stop-color="#009DFF"/>
            </linearGradient>
          </defs>
          <rect width="1024" height="1024" fill="url(#g)"/>
          <text x="60" y="160" font-size="54" fill="rgba(255,255,255,0.92)" font-family="Arial" font-weight="700">
            Intergen Preview
          </text>
          <text x="60" y="230" font-size="28" fill="rgba(255,255,255,0.80)" font-family="Arial">
            Replace this with your generated video output
          </text>
        </svg>
      `);
    previewvideo.hidden = false;

    stageText.textContent = "";
    statusBadge.textContent = "Idle";
    log("Success");

    // Ensure correct view
    setResultView(mode === "json" ? "json" : "preview");
  } catch (err) {
    console.error(err);
    statusBadge.textContent = "Error";
    stageText.textContent = "Generation failed.";
    log(`Error: ${err?.message || String(err)}`);
  } finally {
    runBtn.disabled = false;
  }
}
