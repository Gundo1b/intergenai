(() => {
  const html = document.documentElement;

  // Sidebar (mobile)
  const overlay = document.getElementById("overlay");
  const btnMenu = document.getElementById("btnMenu");

  // Theme
  const themeLabel = document.getElementById("themeLabel");
  const themeSwitch = document.getElementById("themeSwitch");

  // UI
  const bannerText = document.getElementById("bannerText");
  const keyState = document.getElementById("keyState");
  const btnKey = document.getElementById("btnKey");
  const btnNew = document.getElementById("btnNew");

  // Toast
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  const toastKbd = document.getElementById("toastKbd");

  const toolMeta = {
    aicoding: { name: "AI Coding", desc: "Generate, refactor, and ship code.", hash: "#aicoding" },
    aichat:   { name: "AI Chat", desc: "Chat with models and keep threads.", hash: "#aichat" },
    aiimage:  { name: "AI Image Generator", desc: "Create and edit images from prompts.", hash: "#aiimage" },
    aivideo:  { name: "AI Video Generator", desc: "Generate clips from scripts.", hash: "#aivideo" },
  };

  function showToast(message, kbd = "Esc") {
    if (!toast) return;
    toastText.textContent = message;
    toastKbd.textContent = kbd;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  // ===== Sidebar =====
  function openSidebar(){ html.setAttribute("data-sidebar", "open"); }
  function closeSidebar(){ html.removeAttribute("data-sidebar"); }

  btnMenu?.addEventListener("click", openSidebar);
  overlay?.addEventListener("click", closeSidebar);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSidebar(); });
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", closeSidebar));

  // ===== Theme =====
  function applyTheme(theme){
    if (theme === "light") {
      html.setAttribute("data-theme", "light");
      themeLabel.textContent = "Light";
      themeSwitch.setAttribute("aria-checked", "true");
    } else {
      html.removeAttribute("data-theme");
      themeLabel.textContent = "Dark";
      themeSwitch.setAttribute("aria-checked", "false");
    }
  }

  function getPreferredTheme(){
    const saved = localStorage.getItem("INTERGEN_THEME");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function toggleTheme(){
    const current = html.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("INTERGEN_THEME", next);
    showToast(`Theme: ${next}`, "Esc");
  }

  themeSwitch?.addEventListener("click", toggleTheme);
  themeSwitch?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  });

  applyTheme(getPreferredTheme());

  // ===== Banner by hash =====
  function setBanner(hash){
    const key = (hash || "#home").replace("#", "");
    const meta = toolMeta[key];
    bannerText.textContent = meta ? `${meta.name} — ${meta.desc}` : "Choose a workspace tool to start building.";
  }

  setBanner(window.location.hash);
  window.addEventListener("hashchange", () => setBanner(window.location.hash));

  // ===== Cards =====
  function openTool(toolKey){
    const meta = toolMeta[toolKey];
    if (!meta) return;
    window.location.hash = meta.hash; // swap for real routing
    showToast(`Opening ${meta.name}…`, "⌘K");
  }

  document.querySelectorAll(".card[data-tool]").forEach(card => {
    card.addEventListener("click", () => openTool(card.dataset.tool));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openTool(card.dataset.tool);
      }
    });
  });

  // ===== API key (local only) =====
  function syncKeyState(){
    keyState.textContent = localStorage.getItem("INTERGEN_API_KEY") ? "Configured" : "Not configured";
  }
  syncKeyState();

  btnKey?.addEventListener("click", () => {
    const existing = localStorage.getItem("INTERGEN_API_KEY") || "";
    const v = prompt("Paste API key (stored locally in this browser):", existing);
    if (v === null) return;
    const trimmed = v.trim();

    if (!trimmed) {
      localStorage.removeItem("INTERGEN_API_KEY");
      syncKeyState();
      showToast("API key removed.", "Esc");
      return;
    }

    localStorage.setItem("INTERGEN_API_KEY", trimmed);
    syncKeyState();
    showToast("API key saved locally.", "Esc");
  });

  // ===== New button =====
  btnNew?.addEventListener("click", () => showToast("Create flow (wire up your builder here).", "⌘K"));

  // ===== Minimal command palette: Ctrl/⌘ + K =====
  window.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const mod = isMac ? e.metaKey : e.ctrlKey;

    if (mod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const cmd = prompt("Command palette:\n- aicoding\n- aichat\n- aiimage\n- aivideo\n- theme\n\nType a command:");
      if (!cmd) return;

      const key = cmd.trim().toLowerCase();
      if (key === "theme") toggleTheme();
      else if (toolMeta[key]) openTool(key);
      else showToast("Unknown command.", "Esc");
    }

    if (e.key === "Escape") toast?.classList.remove("show");
  });
})();
